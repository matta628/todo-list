/* eslint-disable no-console */
const Project = (name, desc, todos) => {
  const getName = () => name;
  const getDesc = () => desc;
  const getTodos = () => todos;
  const addTodo = (todo) => todos.push(todo);
  return {
    getName, getDesc, getTodos, addTodo,
  };
};

export default Project;
