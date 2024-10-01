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
    
    userProjects.addProject(newProject);
    addProjectToUl(newProject, projectsList)
    toggleDisplayBlockNone(inputEnterProjectName);
    toggleDisplayBlockNone(btnAddProject);
    e.target.value = "";
  }
})

userProjects.addProject(createProject("Read Ulysses"));
userProjects.addProject(createProject("Read Obasan"));

refreshProjectsUl(userProjects.getProjects(), projectsList);

const readMe = createProject("Read Me");

addProjectToUl(readMe, projectsList);

