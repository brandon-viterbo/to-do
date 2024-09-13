export function createTodo(todoName) {
  let name = todoName;
  let description = "";
  let dueDate = "";
  let priority = 0;

  const getName = () => name;
  const setName = (newName) => name = newName;
  const getDescription = () => description;
  const setDescription = (newDescription) => description = newDescription;
  const getDueDate = () => dueDate();
  const setDueDate = (newDueDate) => dueDate = newDueDate;
  const getPriority = () => priority;
  const incPriority = () => priority++;
  const decPriority = () => priority--;

  return { getName, setName, getDescription, setDescription, getDueDate,
    setDueDate, getPriority, incPriority, decPriority,
  };
}