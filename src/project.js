export function createProject(projectName) {
  let name = projectName;
  let todos = [];

  const getName = () => name;
  const setName = (newName) => name = newName;
  
  const getTodos = () => todos;
  const addTodo = (todo) => todos.push(todo);
  const removeTodo = (todoIndex) => todos.splice(todoIndex, 1);

  return { getName, setName, getTodos, addTodo, removeTodo, };
}