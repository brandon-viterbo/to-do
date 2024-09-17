import "./styles.css";
import { userProjects } from "./app";

console.log(userProjects.getProjects());

userProjects.addProject("Read Ulysses");
console.log(userProjects.getProjects());

userProjects.addProject("Read Obasan");
console.log(userProjects.getProjects());

userProjects.removeProject("Read Ulysses");
console.log(userProjects.getProjects());

userProjects.removeProject("Read Obasan");
console.log(userProjects.getProjects());
