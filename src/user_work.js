const UserWork = () => {
  let id = -1;
  const projects = {};

  const addProject = (project) => {
    projects[++id] = project;
    return id;
  };
  const removeProject = (targetId) => {
    delete projects[targetId];
  };
  const getProjects = () => projects;
  const getProject = (targetId) => {
    if (targetId in projects) {
      return projects[targetId];
    }
    return null;
  };
  return {
    addProject, removeProject, getProjects, getProject,
  };
};

const userWork = UserWork();

export default userWork;
