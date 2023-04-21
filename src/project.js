/* eslint-disable no-console */
const Project = (name, desc) => {
  let id = -1;
  const todos = {};
  const getName = () => name;
  const getDesc = () => desc;
  const getTodos = () => todos;
  const addTodo = (todo) => {
    todos[++id] = todo;
    todo.setTodoId(id);
  };
  const removeTodo = (todoId) => {
    console.log(todos);
    console.log(todoId);
    delete todos[todoId];
    console.log(todos);
  };
  return {
    getName, getDesc, getTodos, addTodo, removeTodo,
  };
};

export default Project;
