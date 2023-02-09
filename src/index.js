import './style.css';
import initPage from './init';
import Project from './project';
import userWork from './user_work';
import displayAllProjects from './projects_display';
import addProjectCreateButton from './projects_create';

initPage();

function makeExampleProjects() {
  const project1 = Project('Daily To Do', 'what i want to do everyday to improve my life', []);
  userWork.addProject(project1);
  const project2 = Project('Job Hunt', 'bitch we GETTING that job!!!', []);
  userWork.addProject(project2);
  const project3 = Project('The Odin Project', 'learn web dev shit :D', []);
  userWork.addProject(project3);
}
makeExampleProjects();

displayAllProjects(userWork.getProjects());
addProjectCreateButton();
