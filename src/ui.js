function makeNavBarLink(displayText) {
  const listItem = document.createElement("li");
  const btnDelete = document.createElement("button");

  listItem.textContent = displayText;
  btnDelete.textContent = "X";
  listItem.appendChild(btnDelete);
  return listItem;
}

export function refreshProjectsUl(projectsArr, displayElement) {
  projectsArr.forEach(project => {
    addProjectToUl(project, displayElement);
  });
}

export function addProjectToUl(project, displayElement) {
  const projectLink = makeNavBarLink(project.getName());
  
  projectLink.classList.add("project-link");
  displayElement.appendChild(projectLink);
}