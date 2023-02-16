/* eslint-disable no-console */
import userWork from './user_work';

const SpotlightDisplayer = () => {
  const createAddTodoButton = () => {
    const addTodoButton = document.createElement('button');
    addTodoButton.classList.add('add-todo-button');
    addTodoButton.innerHTML = '+ Add Todo';
    return addTodoButton;
  };

  const displayProjectTodos = (project) => {
    const todos = document.createElement('div');
    todos.classList.add('project-todos');
    project.getTodos().forEach((todo) => {
      const todoDOM = document.createElement('div');
      todoDOM.classList.add('todo');

      const todoName = document.createElement('div');
      todoName.classList.add('todo-name');
      todoName.innerHTML = todo.getName();
      todoDOM.appendChild(todoName);

      const todoDueDate = document.createElement('div');
      todoDueDate.classList.add('todo-due-date');
      todoDueDate.innerHTML = todo.getDueDate();
      todoDOM.appendChild(todoDueDate);

      todos.appendChild(todoDOM);
    });
    const addTodoButton = createAddTodoButton();
    todos.appendChild(addTodoButton);
    return todos;
  };

  const createProjectDOM = (project) => {
    const projectDOM = document.createElement('div');
    projectDOM.classList.add('project');
    const projectName = document.createElement('div');
    projectName.classList.add('project-name');
    projectName.innerHTML = project.getName();
    projectDOM.appendChild(projectName);
    const todos = displayProjectTodos(project);
    projectDOM.appendChild(todos);
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
