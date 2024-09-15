function createPriority(priorityInt) {
  const maxPriority = 2;
  const minPriority = 0;
  const isInRange = (int) => Number.isInteger(int) && int <= maxPriority && int >= minPriority;
  const initialInt = parseInt(priorityInt, 10);

  if (!isInRange(initialInt)) {
    return;
  }

  let priority = initialInt;

  const getPriority = () => priority;
  const setPriority = (newPriority) => {
    if (isInRange(newPriority)) { priority = newPriority; }
  };

  return { getPriority, setPriority, };
}

export function createTodo(todoName) {
  let name = todoName;
  let description = "";
  let dueDate = "";
  let priority = createPriority(0);
  let done = false;

  const getName = () => name;
  const setName = (newName) => name = newName;
  const getDescription = () => description;
  const setDescription = (newDescription) => description = newDescription;
  const getDueDate = () => dueDate();
  const setDueDate = (newDueDate) => dueDate = newDueDate;
  const getPriority = () => priority.getPriority();
  const setPriority = (newPriorityLevel) => priority.setPriority(newPriorityLevel);
  const isDone = () => done;
  const toggleDone = () => done = !done;

  return { getName, setName, getDescription, setDescription, getDueDate,
    setDueDate, getPriority, setPriority, isDone, toggleDone,
  };
}