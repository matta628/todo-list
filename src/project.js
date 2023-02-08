/* eslint-disable no-console */
const Project = (name, desc, todos) => {
  const getName = () => name;
  const getDesc = () => desc;
  const getTodos = () => todos;
  return { getName, getDesc, getTodos };
};

export default Project;
