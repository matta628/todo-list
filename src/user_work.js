const UserWork = () => {
  let id = 0;
  const projects = [];

  const addProject = (project) => projects.push({ [id++]: project });
  const getProjects = () => projects;
  const getProject = (targetId) => {
    for (let i = 0; i < projects.length; i++) {
      if (Object.keys(projects[i])[0] === targetId) {
        return projects[i][targetId];
      }
    }
    return null;
  };
  return { addProject, getProjects, getProject };
};

const userWork = UserWork();

export default userWork;
