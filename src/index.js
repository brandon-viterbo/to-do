import "./styles.css";
import { createProject } from "./project";
import { userProjects, } from "./app";
import { refreshProjectsUl, addProjectToUl, } from "./ui";

const projectsList = document.querySelector(".navbar > ul");
const btnAddProject = document.querySelector(".add-project");
const inputEnterProjectName = document.querySelector(".enter-project");

function toggleDisplayBlockNone(element) {
  const elementStyles = window.getComputedStyle(element);
  const displayValue = elementStyles.getPropertyValue("display");

  if (displayValue === "none") {
    element.style.display = "block";
  } else if (displayValue === "block") {
    element.style.display = "none";
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
    const projectLinkEle = addProjectToUl(newProject, projectsList);
    const deleteBtn = projectLinkEle.children[0];
    
    userProjects.addProject(newProject);
    toggleDisplayBlockNone(inputEnterProjectName);
    toggleDisplayBlockNone(btnAddProject);

    deleteBtn.addEventListener("click", (e) => {
      e.preventDefault();
      projectLinkEle.remove();
      userProjects.removeProject(projectName);
    });

    e.target.value = "";
  }
})
