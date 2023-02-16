const TodoList = (name, desc, dueDate, priority, status) => {
  const getName = () => name;
  const getDesc = () => desc;
  const getDueDate = () => dueDate;
  const getPriority = () => priority;
  const getStatus = () => status;
  return {
    getName, getDesc, getDueDate, getPriority, getStatus,
  };
};

export default TodoList;
