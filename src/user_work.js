const UserWork = () => {
  const projects = [];

  const addProject = (project) => projects.push(project);
  const getProjects = () => projects;
  return { addProject, getProjects };
};

const userWork = UserWork();

export default userWork;
