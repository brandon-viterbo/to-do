export function refreshProjectsList(userProjects, displayElement) {
  const currentProjects = userProjects.getProjects();

  currentProjects.forEach(project => {
    const listItem = document.createElement("li");
    const btnDelete = document.createElement("button");

    listItem.classList.add("project-link");
    listItem.textContent = project.getName();
    btnDelete.textContent = "X";
    listItem.appendChild(btnDelete);
    displayElement.appendChild(listItem);
  });
}