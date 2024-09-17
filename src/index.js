import "./styles.css";
import { createProject } from "./project";
import { userProjects, } from "./app";
import { refreshProjectsUl, addProjectToUl, } from "./ui";

const projectsList = document.querySelector(".navbar > ul");
const btnAddProject = document.querySelector(".add-project");
const inputEnterProjectName = document.querySelector(".enter-project");

btnAddProject.addEventListener("click", (e) => {
  e.preventDefault();
  btnAddProject.style.display = "none";
  inputEnterProjectName.style.display = "block";
})


inputEnterProjectName.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    const projectName = e.target.value;
    const newProject = createProject(projectName);
    
    userProjects.addProject(newProject);
    addProjectToUl(newProject, projectsList)
    inputEnterProjectName.style.display = "none";
    btnAddProject.style.display = "block";
  }
})

userProjects.addProject(createProject("Read Ulysses"));
userProjects.addProject(createProject("Read Obasan"));

refreshProjectsUl(userProjects.getProjects(), projectsList);

const readMe = createProject("Read Me");

addProjectToUl(readMe, projectsList);

