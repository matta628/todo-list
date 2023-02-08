function displayProject(project) {
  const spotlight = document.querySelector('.spotlight');
  const projectDOM = document.createElement('div');
  projectDOM.classList.add('project');
  const projectName = document.createElement('div');
  projectName.classList.add('project-name');
  projectName.innerHTML = project.getName();
  projectDOM.appendChild(projectName);
  spotlight.appendChild(projectDOM);
}

function displayAllProjects(projects) {
  projects.forEach((project) => displayProject(project));
}

export default displayAllProjects;
