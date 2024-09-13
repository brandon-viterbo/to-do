import { createTodo } from "./todo";

export function createProject(projectName) {
  let name = projectName;
  let todos = {};

  const getName = () => name;
  const setName = (newName) => name = newName;
  const getTodos = () => JSON.stringify(todos);
  const addTodo = (todoName) => todos[todoName] = todoName;
  const removeTodo = (todoName) => delete todos[todoName];

  return { getName, setName, getTodos, addTodo, removeTodo, };
}