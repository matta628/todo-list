/* eslint-disable no-console */
const Project = (name, desc, todos) => {
  const getName = () => name;
  const getDesc = () => desc;
  const getTodos = () => todos;
  return { getName, getDesc, getTodos };
};

function makeProjects() {
  const project1 = Project('Job Hunt', 'need to apply & shit', []);
  console.log(project1);
  const project2 = Project('The Odin Project', 'learn web dev stuff!!', []);
  console.log(project2);
  const project3 = Project('Leetcode', 'be able to solve LC hard in 30 mins', []);
  console.log(project3);
}

export default makeProjects;
