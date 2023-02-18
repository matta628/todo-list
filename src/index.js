import './style.css';
import initPage from './init';
import Project from './project';
import userWork from './user_work';
import spotlightDisplayer from './projects_display';
import addProjectCreateButton from './projects_create';
import TodoList from './todo_list';

initPage();

function makeExampleProjects() {
  const todo1 = TodoList('name 1', 'desc 1', 'due date 1', 'priority 1', 'status 1');
  const todo2 = TodoList('name 2', 'desc 2', 'due date 2', 'priority 2', 'status 2');
  const todo3 = TodoList('name 3', 'desc 3', 'due date 3', 'priority 3', 'status 3');
  const todo4 = TodoList('name 4', 'desc 4', 'due date 4', 'priority 4', 'status 4');
  const todo5 = TodoList('name 5', 'desc 5', 'due date 5', 'priority 5', 'status 5');

  const project1 = Project('Daily To Do', 'what i want to do everyday to improve my life');
  project1.addTodo(todo1);
  project1.addTodo(todo2);
  project1.addTodo(todo3);
  project1.addTodo(todo4);
  project1.addTodo(todo5);
  userWork.addProject(project1);

  const project2 = Project('Job Hunt', 'bitch we GETTING that job!!!', []);
  userWork.addProject(project2);
  const project3 = Project('The Odin Project', 'learn web dev shit :D', []);
  userWork.addProject(project3);
}

makeExampleProjects();

spotlightDisplayer.displayAllProjects();

addProjectCreateButton();
