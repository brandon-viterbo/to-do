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
      loadProject(projectsList, projectIndex, addTodoBtn, todoForm, projectHeaderDisplay, projectTodosDisplay);
    });

    deleteBtn.addEventListener("click", (e) => {
      e.preventDefault();

      selectedProject = null;
      deleteProject(userProjects, projectLi);
      updateDatasetIndexes(projectsUl);
      clearProjectPage(addTodoBtn, todoForm, projectHeaderDisplay, projectTodosDisplay);
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
  const thisTodo = createTodo(submittedName);
  const todoCard = makeTodoCard(thisTodo);

  selectedProject.addTodo(thisTodo);
  todoList.appendChild(todoCard);

  document.querySelector("#title").value = "";

  toggleDisplayBlockNone(todoForm);
  toggleDisplayBlockNone(addTodoBtn);
});

