import "./styles.css";
import { createProject } from "./project.js";
import { createTodo } from "./todo.js";

const myTodo = createTodo("Read Book 8");
let thisPriority = myTodo.getPriority();
console.log(thisPriority);

myTodo.setPriority(4);
console.log(myTodo.getPriority());

myTodo.setPriority(-1);
console.log(myTodo.getPriority());

myTodo.setPriority(1.0001);
console.log(myTodo.getPriority());

myTodo.setPriority(1);
console.log(myTodo.getPriority());

myTodo.setPriority(2);
console.log(myTodo.getPriority());
