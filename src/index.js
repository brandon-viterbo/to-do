import "./styles.css";
import { createProject } from "./project";
import { userProjects, } from "./app";
import { addProjectToUl, loadProject, removeAllChildren, } from "./ui";

const projectsUl = document.querySelector(".navbar > ul");
const btnAddProject = document.querySelector(".add-project");
const inputEnterProjectName = document.querySelector(".enter-project");
const projectPage = document.querySelector(".project");

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
})


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
      loadProject(userProjects.getProjects(), parseInt(projectLi.dataset.index), projectPage);
    });

    deleteBtn.addEventListener("click", (e) => {
      e.preventDefault();
      deleteProject(userProjects, projectLi);
      updateDatasetIndexes(projectsUl);
      removeAllChildren(projectPage);
    });

    e.target.value = "";
  }
})
