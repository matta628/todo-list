const TodoList = (name, desc, dueDate, priority, status, project) => {
  const getName = () => name;
  const getDesc = () => desc;
  const getDueDate = () => dueDate;
  const getPriority = () => priority;
  const getStatus = () => status;
  const getProject = () => project;
  let todoId = -1;
  const setTodoId = (id) => { todoId = id; };
  const getTodoId = () => todoId;
  return {
    getName, getDesc, getDueDate, getPriority, getStatus, getProject, setTodoId, getTodoId,
  };
};

export default TodoList;
