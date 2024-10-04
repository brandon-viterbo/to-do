function makeNavBarLink(displayText) {
  const listItem = document.createElement("li");
  const spanText = document.createElement("span");
  const btnDelete = document.createElement("button");

  spanText.textContent = displayText;
  btnDelete.textContent = "X";
  listItem.append(spanText);
  listItem.appendChild(btnDelete);

  return listItem;
}

export function removeAllChildren(element) {
  while (element.firstChild) {
    element.removeChild(element.lastChild);
  }
}

export function addProjectToUl(project, displayElement) {
  const projectLink = makeNavBarLink(project.getName());
  
  projectLink.classList.add("project-link");
  displayElement.appendChild(projectLink);

  return projectLink;
}

export function refreshProjectsList(projectsArr, displayElement) {
  removeAllChildren(displayElement);

  for (let i = 0; i < projectsArr.length; i++) {
    const project = projectsArr[i];
    const projectLink = addProjectToUl(project, displayElement);

    projectLink.setAttribute("data-index", i);
    displayElement.appendChild(projectLink);
  }
}

export function makeTodoCard(todo, todoIndex) {
  const todoCard = document.createElement("li");

  const titleContainer = document.createElement("div");
  const title = document.createElement("h3");
  const titleEdit = document.createElement("input");
  
  const dueDateContainer = document.createElement("div");
  const dueDate = document.createElement("p");
  const dueDateEdit = document.createElement("input");
  
  const descriptionContainer = document.createElement("div");
  const description = document.createElement("p");
  const descriptionEdit = document.createElement("input");
  
  const priority = document.createElement("div");
  const todoPriority = todo.getPriority();

  const buttonsDiv = document.createElement("div");
  const doneResumeBtn = document.createElement("button");
  const deleteBtn = document.createElement("button");


  todoCard.classList.add("todo-card");
  todoCard.setAttribute("data-index", `${todoIndex}`);


  title.classList.add("name");
  title.textContent = todo.getName();
  dueDate.classList.add("due-date");
  dueDate.textContent = todo.getDueDate();
  description.classList.add("description");
  description.textContent = todo.getDescription();
  
  priority.classList.add("priority");
  if (todoPriority === 2) {
    priority.style.backgroundColor = "red";
  } else if (todoPriority === 1) {
    priority.style.backgroundColor = "yellow";
  } else if (todoPriority === 0) {
    priority.style.backgroundColor = "hsl(0deg 0% 60%)";
  }


  titleEdit.setAttribute("type", "text");
  dueDateEdit.setAttribute("type", "date");
  descriptionEdit.setAttribute("type", "text");


  titleContainer.appendChild(title);
  titleContainer.appendChild(titleEdit);

  dueDateContainer.appendChild(dueDate);
  dueDateContainer.appendChild(dueDateEdit);

  descriptionContainer.appendChild(description);
  descriptionContainer.appendChild(descriptionEdit);


  buttonsDiv.classList.add("buttons");
  doneResumeBtn.classList.add("done-resume");

  if (!todo.isDone()) {
    todoCard.style.backgroundColor = "hsl(0deg 0% 80%)";
    doneResumeBtn.textContent = "Done";
  } else {
    todoCard.style.backgroundColor = "#66FF99";
    doneResumeBtn.textContent = "Resume";
  }

  deleteBtn.classList.add("delete");
  deleteBtn.textContent = "Delete";
  buttonsDiv.appendChild(doneResumeBtn);
  buttonsDiv.appendChild(deleteBtn);

  titleContainer.classList.add("title");
  dueDateContainer.classList.add("due-date");
  descriptionContainer.classList.add("description");

  todoCard.append(titleContainer);
  todoCard.appendChild(dueDateContainer);
  todoCard.appendChild(descriptionContainer);
  todoCard.appendChild(buttonsDiv);
  todoCard.appendChild(priority);

  return todoCard;
}

export function clearProjectPage(addTodoBtn, todoForm, headerDisplay, todoDisplay) {
  addTodoBtn.style.display = "none";
  todoForm.style.display = "none";
  headerDisplay.textContent = "";
  removeAllChildren(todoDisplay);
}

export function loadProject(projectsList, projectIndex, addTodoBtn, todoForm, headerDisplay, todoDisplay) {
  const project = projectsList[projectIndex];
  const todos = project.getTodos();

  clearProjectPage(addTodoBtn, todoForm, headerDisplay, todoDisplay);
  addTodoBtn.style.display = "block";
  headerDisplay.textContent = project.getName();
  
  for (let i = 0; i < todos.length; i++) {
    const todo = todos[i];
    
    const todoCard = makeTodoCard(todo);
    todoDisplay.appendChild(todoCard);
  }
}