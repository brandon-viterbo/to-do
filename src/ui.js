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

export function makeTodoCard(todo) {
  const todoCard = document.createElement("li");
  const header = document.createElement("h3");
  const dueDate = document.createElement("p");
  const description = document.createElement("p");
  const priority = document.createElement("div");

  todoCard.classList.add("todo-card");

  header.classList.add(".name");
  header.textContent = todo.getName();

  dueDate.classList.add("due-date");
  dueDate.textContent = todo.getDueDate();

  description.classList.add("description");
  description.textContent = todo.getDescription();

  priority.classList.add("priority");
  priority.textContent = todo.getPriority();

  todoCard.appendChild(header);
  todoCard.appendChild(dueDate);
  todoCard.appendChild(description);
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