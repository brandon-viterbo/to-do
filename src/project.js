export function createProject(name) {
  let projectName = name;
  let todos = {};

  const getName = () => projectName;
  const setName = (newName) => projectName = newName;
  const getTodos = () => JSON.stringify(todos);
  const addTodo = (todoName) => todos[todoName] = todoName;
  const removeTodo = (todoName) => delete todos[todoName];

  return { getName, setName, getTodos, addTodo, removeTodo, };
}