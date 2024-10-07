import "./styles.css";
import { createProject } from "./project";
import { userProjects, } from "./app";
import { addProjectToUl, loadProject, clearProjectPage, makeTodoCard, } from "./ui";
import { createTodo } from "./todo";

const projectsUl = document.querySelector(".navbar > ul");
const btnAddProject = document.querySelector(".add-project");
const inputEnterProjectName = document.querySelector(".enter-project");
const projectHeaderDisplay = document.querySelector(".projectName");
const projectTodosDisplay = document.querySelector(".todos");
const addTodoBtn = document.querySelector(".add-todo");
const todoForm = document.querySelector(".todo-form");
const todoFormSubmit = document.querySelector(".todo-form > input");
const todoList = document.querySelector(".todos");
const renameProjectBtn = document.querySelector(".rename-project");
const renameProjectInput = document.querySelector(".project-name-input");
let selectedProject = null;

function toggleDisplayBlockNone(element) {
  const elementStyles = window.getComputedStyle(element);
  const displayValue = elementStyles.getPropertyValue("display");

  if (displayValue === "none") {
    element.style.display = "block";
  } else if (displayValue === "block") {
    element.style.display = "none";
  }
}

function deleteProject(projectsModel, projectLi) {
  const projectIndex = parseInt(projectLi.dataset.index); 
  projectsModel.removeProject(projectIndex);
  projectLi.remove();
}

function updateDatasetIndexes(htmlList) {
  const listItems = htmlList.children;

  for (let i = 0; i < listItems.length; i++) {
    const li = listItems[i];
    
    li.dataset.index = i;
  }
}

function updateProjectNamesUl(htmlList) {
  const projects = userProjects.getProjects();
  const listItems = htmlList.children;

  for (let i = 0; i < projects.length; i++) {
    const proj = projects[i];
    const name = proj.getName();
    const thisLink = listItems[i];
    const thisLinksText = thisLink.children[0];

    thisLinksText.textContent = name;
  }
}

function makeTodoCardChangeable(todo, todoCard) {
  const deleteTodoBtn = todoCard.querySelector(".delete");
  const doneResumeBtn = todoCard.querySelector(".done-resume");
  const priority = todoCard.querySelector(".priority");
  const titleContainer = todoCard.querySelector(".title");
  const titleDisplay = titleContainer.children[0];
  const titleEdit = titleContainer.children[1];
  const dueDateContainer = todoCard.querySelector(".due-date");
  console.log(dueDateContainer)
  const dueDateDisplay = dueDateContainer.children[0];
  const dueDateEdit = dueDateContainer.children[1];
  const descriptionContainer = todoCard.querySelector(".description");
  const descriptionDisplay = descriptionContainer.children[0];
  const descriptionEdit = descriptionContainer.children[1];
  
  titleDisplay.addEventListener("click", (e) => {
    e.preventDefault();

    toggleDisplayBlockNone(titleDisplay);
    toggleDisplayBlockNone(titleEdit);
  });

  titleEdit.addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
      const newName = e.target.value;      

      todo.setName(newName);
      titleDisplay.textContent = newName;
      toggleDisplayBlockNone(titleDisplay);
      toggleDisplayBlockNone(titleEdit);
    }
  });

  dueDateDisplay.addEventListener("click", (e) => {
    e.preventDefault();

    toggleDisplayBlockNone(dueDateDisplay);
    toggleDisplayBlockNone(dueDateEdit);
  });

  dueDateEdit.addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
      const newDate = e.target.value;      

      todo.setDueDate(newDate);
      dueDateDisplay.textContent = newDate;
      toggleDisplayBlockNone(dueDateDisplay);
      toggleDisplayBlockNone(dueDateEdit);
    }
  });

  descriptionDisplay.addEventListener("click", (e) => {
    e.preventDefault();

    toggleDisplayBlockNone(descriptionDisplay);
    toggleDisplayBlockNone(descriptionEdit);
  });

  descriptionEdit.addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
      const newDesc = e.target.value;      

      todo.setDescription(newDesc);
      descriptionDisplay.textContent = newDesc;
      toggleDisplayBlockNone(descriptionDisplay);
      toggleDisplayBlockNone(descriptionEdit);
    }
  });

  deleteTodoBtn.addEventListener("click", (e) => {
    e.preventDefault();
    
    selectedProject.removeTodo(todo);
    todoCard.remove();
    updateDatasetIndexes(todoList);
  });

  doneResumeBtn.addEventListener("click", (e) => {
    e.preventDefault();

    if (!todo.isDone()) {
      todoCard.style.backgroundColor = "#66FF99";
      doneResumeBtn.textContent = "Resume";
    } else {
      todoCard.style.backgroundColor = "hsl(0deg 0% 80%)";
      doneResumeBtn.textContent = "Done";
    }
    
    todo.toggleDone();
  });
  
  priority.addEventListener("click", (e) => {
    const thisPriority = todo.getPriority();

    if (thisPriority === 2) {
      todo.setPriority(0);
      priority.style.backgroundColor = "hsl(0deg 0% 60%)";
    } else if (thisPriority === 1) {
      todo.setPriority(2);
      priority.style.backgroundColor = "red";
    } else if (thisPriority === 0) {
      todo.setPriority(1);
      priority.style.backgroundColor = "yellow";
    }
  });
}

btnAddProject.addEventListener("click", (e) => {
  e.preventDefault();
  toggleDisplayBlockNone(btnAddProject);
  toggleDisplayBlockNone(inputEnterProjectName);
});

inputEnterProjectName.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    const projectName = e.target.value;
    const newProject = createProject(projectName);
    const projectLi = addProjectToUl(newProject, projectsUl);
    const projectLink = projectLi.children[0]
    const deleteBtn = projectLi.children[1];
    const oldList = userProjects.getProjects();
    const newProjectIndex = oldList.length;
    
    projectLi.dataset.index = newProjectIndex;
    userProjects.addProject(newProject);
    toggleDisplayBlockNone(inputEnterProjectName);
    toggleDisplayBlockNone(btnAddProject);
    
    projectLink.addEventListener("click", (e) => {
      e.preventDefault();
      
      const projectIndex = parseInt(projectLi.dataset.index);
      const projectsList = userProjects.getProjects();
      selectedProject = projectsList[projectIndex];
      const todosModel = selectedProject.getTodos();
      const todoChildren = todoList.children;
      loadProject(projectsList, projectIndex, addTodoBtn, todoForm, projectHeaderDisplay, projectTodosDisplay, renameProjectBtn);
      
      
      for (let i = 0; i < todoChildren.length; i++) {
        const todoCard = todoChildren[i];
      
        makeTodoCardChangeable(todosModel[i], todoCard);
      }      
    });
    
    deleteBtn.addEventListener("click", (e) => {
      e.preventDefault();
      
      selectedProject = null;
      deleteProject(userProjects, projectLi);
      updateDatasetIndexes(projectsUl);
      clearProjectPage(addTodoBtn, todoForm, projectHeaderDisplay, projectTodosDisplay, renameProjectBtn);
    });
    
    e.target.value = "";
  }
});

addTodoBtn.addEventListener("click", (e) => {
  e.preventDefault();
  
  toggleDisplayBlockNone(addTodoBtn);
  toggleDisplayBlockNone(todoForm);
});

todoForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const submittedName = document.querySelector("#title").value;
  const dueDate = document.querySelector("#due-date").value;
  const description = document.querySelector("#description").value;
  const priorityInputs = document.querySelectorAll("input[name='priority'");
  const initialTodos = selectedProject.getTodos();
  const todoIndex = initialTodos.length;
  
  
  let priority = null;
  priorityInputs.forEach(priorityInput => {
    if (priorityInput.checked) {
      priority = parseInt(priorityInput.value);
    }
  });

  const thisTodo = createTodo(submittedName);
  thisTodo.setDueDate(dueDate);
  thisTodo.setDescription(description);
  thisTodo.setPriority(priority);
  
  const todoCard = makeTodoCard(thisTodo, todoIndex);
  makeTodoCardChangeable(thisTodo, todoCard);
  
  selectedProject.addTodo(thisTodo);
  todoList.appendChild(todoCard);
  
  document.querySelector("#title").value = "";
  document.querySelector("#due-date").value = "";
  document.querySelector("#description").value = "";
  
  toggleDisplayBlockNone(todoForm);
  toggleDisplayBlockNone(addTodoBtn);
});

renameProjectBtn.addEventListener("click", (e) => {
  e.preventDefault();

  toggleDisplayBlockNone(renameProjectBtn);
  toggleDisplayBlockNone(renameProjectInput);
});

renameProjectInput.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    const newName = e.target.value;

    selectedProject.setName(newName);
    projectHeaderDisplay.textContent = newName;
    toggleDisplayBlockNone(renameProjectBtn);
    toggleDisplayBlockNone(renameProjectInput);
    updateProjectNamesUl(projectsUl);

    e.target.value = "";
  }
})