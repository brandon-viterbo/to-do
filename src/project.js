import { createTodo } from "./todo";

export function createProject(projectName) {
  let name = projectName;
  let todos = [];

  const getName = () => name;
  const setName = (newName) => name = newName;
  
  const getTodos = () => todos;
  const addTodo = (todoName) => todos.push(createTodo(todoName));
  const removeTodo = (todoName) => {
    for (let i = 0; i < todos.length; i++) {
      const thisTodo = todos[i];
      if (thisTodo.getName() === todoName) {
        todos.splice(i, 1);
        break;
      }
    }
  };

  return { getName, setName, getTodos, addTodo, removeTodo, };
}