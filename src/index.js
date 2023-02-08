import './style.css';
import initPage from './init';
import Project from './project';
import UserWork from './user_work';

initPage();

const userWork = UserWork();

function makeProjects() {
  const project1 = Project('Daily To Do', 'what i want to do everyday to improve my life', []);
  userWork.addProject(project1);
  const project2 = Project('Job Hunt', 'bitch we GETTING that job!!!', []);
  userWork.addProject(project2);
  const project3 = Project('The Odin Project', 'learn web dev shit :D', []);
  userWork.addProject(project3);
}
makeProjects();

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

function displayAllProjects() {
  // eventually refactor into its own module
  userWork.getProjects().forEach((project) => displayProject(project));
}

displayAllProjects();
