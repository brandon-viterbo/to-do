import { createTodo } from "./todo";

export function createProject(projectName) {
  let name = projectName;
  let todos = [];

  const getName = () => name;
  const setName = (newName) => name = newName;
  
  const getTodos = () => todos;
  const addTodo = (todoName) => todos.push(createTodo(todoName));
  const removeTodo = (todoIndex) => todos.splice(todoIndex, 1);

  return { getName, setName, getTodos, addTodo, removeTodo, };
}