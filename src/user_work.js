const UserWork = () => {
  const projects = [];

  const addProject = (project) => projects.push(project);
  const getProjects = () => projects;
  return { addProject, getProjects };
};

export default UserWork;
