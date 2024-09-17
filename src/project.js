import { createTodo } from "./todo";
import { removeNamedElemant } from "./utils";

export function createProject(projectName) {
  let name = projectName;
  let todos = [];

  const getName = () => name;
  const setName = (newName) => name = newName;
  
  const getTodos = () => todos;
  const addTodo = (todoName) => todos.push(createTodo(todoName));
  const removeTodo = (todoName) => removeNamedElemant(todos, todoName);

  return { getName, setName, getTodos, addTodo, removeTodo, };
}