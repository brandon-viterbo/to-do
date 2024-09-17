import "./styles.css";
import { userProjects, } from "./app";
import { refreshProjectsList } from "./ui";

const projectsList = document.querySelector(".navbar > ul");

console.log(userProjects.getProjects());

userProjects.addProject("Read Ulysses");
console.log(userProjects.getProjects());

userProjects.addProject("Read Obasan");
console.log(userProjects.getProjects());

refreshProjectsList(userProjects, projectsList);