import "./styles.css";
import { createProject } from "./project.js";

let projectName = prompt("Your awesome project's name?");
const myProject = createProject(projectName);
console.log(`Created project ${myProject.getName()}`);

projectName = prompt("Rename your project please!");
myProject.setName(projectName);
console.log(`Renamed project to ${myProject.getName()}`);
console.log(`Todos for ${myProject.getName()}: ${myProject.getTodos()}`);

const firstTodo = prompt("What is your first todo for this project?");
myProject.addTodo(firstTodo);
console.log(`Todos for ${myProject.getName()}: ${myProject.getTodos()}`);

const secondTodo = prompt("And the second?");
myProject.addTodo(secondTodo);
console.log(`Todos for ${myProject.getName()}: ${myProject.getTodos()}`);

console.log("Deleting first Todo");
myProject.removeTodo(firstTodo);
console.log(myProject.getTodos());