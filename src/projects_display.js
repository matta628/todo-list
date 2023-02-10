/* eslint-disable no-console */
import userWork from './user_work';

const SpotlightDisplayer = () => {
  const createProjectDOM = (project) => {
    const projectDOM = document.createElement('div');
    projectDOM.classList.add('project');
    const projectName = document.createElement('div');
    projectName.classList.add('project-name');
    projectName.innerHTML = project.getName();
    projectDOM.appendChild(projectName);
    return projectDOM;
  };

  const displayProject = (project) => {
    const spotlight = document.querySelector('.spotlight');
    const projectDOM = createProjectDOM(project);
    spotlight.appendChild(projectDOM);
  };

  const displayAllProjects = () => {
    const projects = userWork.getProjects();
    projects.forEach((project) => displayProject(project));
  };

  const addChild = (newDiv) => {
    const spotlight = document.querySelector('.spotlight');
    spotlight.appendChild(newDiv);
  };

  const addChildBefore = (newDiv, targetDiv) => {
    const spotlight = document.querySelector('.spotlight');
    spotlight.insertBefore(newDiv, targetDiv);
  };

  const removeChild = (target) => {
    const spotlight = document.querySelector('.spotlight');
    spotlight.removeChild(target);
  };

  const scrollToBottom = () => {
    const spotlight = document.querySelector('.spotlight');
    spotlight.scrollTop = spotlight.scrollHeight;
  };

  return {
    displayAllProjects,
    addChild,
    addChildBefore,
    removeChild,
    scrollToBottom,
    createProjectDOM,
  };
};

const spotlightDisplayer = SpotlightDisplayer(userWork);

export default spotlightDisplayer;
