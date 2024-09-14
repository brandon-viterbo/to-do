import "./styles.css";
import { createProject } from "./project.js";
import { createTodo } from "./todo.js";

let projectName = prompt("Your awesome project's name?");
const myProject = createProject(projectName);
console.log(`Created project ${myProject.getName()}`);

projectName = prompt("Rename your project please!");
myProject.setName(projectName);
console.log(`Renamed project to ${myProject.getName()}`);
console.log(myProject.getTodos());

const firstTodo = prompt("What is your first todo for this project?");
myProject.addTodo(firstTodo);
console.log(myProject.getTodos());

const secondTodo = prompt("And the second?");
myProject.addTodo(secondTodo);
console.log(myProject.getTodos());

const todoList = myProject.getTodos();
const todo1 = todoList[0];
const todo2 = todoList[1];
console.log(todo1.getName());
console.log(todo2.getName());

console.log("Deleting first Todo");
myProject.removeTodo(firstTodo);

const newList = myProject.getTodos();
const newTodo = newList[0];
console.log(newTodo.getName());