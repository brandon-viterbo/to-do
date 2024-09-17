import "./styles.css";
import { createProject } from "./project";
import { userProjects, } from "./app";
import { refreshProjectsUl, addProjectToUl, } from "./ui";

const projectsList = document.querySelector(".navbar > ul");
userProjects.addProject("Read Ulysses");
userProjects.addProject("Read Obasan");

refreshProjectsUl(userProjects.getProjects(), projectsList);

const readMe = createProject("Read Me");

addProjectToUl(readMe, projectsList);