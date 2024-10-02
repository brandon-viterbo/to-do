function makeNavBarLink(displayText) {
  const listItem = document.createElement("li");
  const btnDelete = document.createElement("button");

  listItem.textContent = displayText;
  btnDelete.textContent = "X";
  listItem.appendChild(btnDelete);

  return listItem;
}

function removeAllChildren(element) {
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

export function makeTodoElement(todo) {
  const todoCard = document.createElement("div");
  const todoHeader = document.createElement("h3");
  const todoDueDate = document.createElement("p");
  const todoDescription = document.createElement("p");

  todoHeader.textContent = todo.getName();
  todoDueDate.textContent = todo.getDueDate();
  todoDescription.textContent = todo.getDescription();

  todoCard.appendChild(todoHeader);
  todoCard.appendChild(todoDueDate);
  todoCard.appendChild(todoDescription);

  return todoCard;
}

export function loadProject(projectsList, projectIndex, displayElement) {
  const project = projectsList[projectIndex];
  const header = document.createElement("h3");

  removeAllChildren(displayElement);

  header.textContent = project.getName();
}