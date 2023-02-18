/* eslint-disable no-console */
import userWork from './user_work';

const SpotlightDisplayer = () => {
  const createAddTodoButton = () => {
    const addTodoButton = document.createElement('button');
    addTodoButton.classList.add('add-todo-button');
    addTodoButton.innerHTML = '+ Add Todo';
    return addTodoButton;
  };

  const createTodoDOM = (todo) => {
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
    return todoDOM;
  };

  const createFormInputDiv = (name, labelText, type, required) => {
    const formDiv = document.createElement('div');
    formDiv.classList.add(`${name}-input`);

    const label = document.createElement('label');
    label.innerHTML = labelText;
    label.setAttribute('for', `new-todo-${name}`);
    formDiv.appendChild(label);

    const input = document.createElement('input');
    input.setAttribute('type', type);
    input.setAttribute('id', `new-todo-${name}`);
    input.setAttribute('name', `new-todo-${name}`);
    input.required = required;
    formDiv.appendChild(input);
    return formDiv;
  };

  const createTodoForm = () => {
    const todoForm = document.createElement('div');

    const form = document.createElement('form');
    form.setAttribute('id', 'todo-form');
    todoForm.appendChild(form);

    const name = createFormInputDiv('name', 'Name: ', 'text', true);
    name.classList.add('todo-name');
    form.appendChild(name);

    const desc = createFormInputDiv('desc', 'Description: ', 'text', true);
    desc.classList.add('todo-desc');
    form.appendChild(desc);

    const dueDate = createFormInputDiv('dueDate', 'Due Date: ', 'text', true);
    dueDate.classList.add('todo-dueDate');
    form.appendChild(dueDate);

    const priorityDiv = document.createElement('div');
    const priorityLabel = document.createElement('label');
    priorityLabel.setAttribute('for', 'priority');
    priorityLabel.innerHTML = 'Priority: ';
    priorityDiv.appendChild(priorityLabel);
    const priority = document.createElement('select');
    priority.setAttribute('name', 'priority');
    priority.setAttribute('id', 'priority');
    const low = document.createElement('option');
    low.value = 'low';
    low.innerHTML = 'low';
    priority.appendChild(low);
    const medium = document.createElement('option');
    medium.value = 'medium';
    medium.innerHTML = 'medium';
    priority.appendChild(medium);
    const high = document.createElement('option');
    high.value = 'high';
    high.innerHTML = 'high';
    priority.appendChild(high);
    priorityDiv.appendChild(priority);
    form.appendChild(priorityDiv);

    const status = createFormInputDiv('status', 'Status: ', 'checkbox', true);
    form.appendChild(status);

    const submitTodo = document.createElement('div');
    submitTodo.classList.add('submit-todo');

    const submitTodoButton = document.createElement('input');
    submitTodoButton.setAttribute('type', 'submit');
    submitTodoButton.setAttribute('id', 'submit-todo-button');
    submitTodo.appendChild(submitTodoButton);
    form.appendChild(submitTodo);

    return todoForm;
  };

  const addTodo = (project, projectDOM) => {
    const todoForm = createTodoForm();
    todoForm.classList.add('todo-form');
    const todos = projectDOM.lastChild;
    const addTodoButton = todos.lastChild;
    addTodoButton.style.display = 'none';
    todos.insertBefore(todoForm, todos.lastChild);
    todos.scrollTop = todos.scrollHeight;
  };

  const displayProjectTodos = (project, projectDOM) => {
    const todos = document.createElement('div');
    todos.classList.add('project-todos');
    project.getTodos().forEach((todo) => {
      const todoDOM = createTodoDOM(todo);
      todos.appendChild(todoDOM);
    });
    const addTodoButton = createAddTodoButton();
    addTodoButton.addEventListener('click', addTodo.bind(this, project, projectDOM));
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
    const todos = displayProjectTodos(project, projectDOM);
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
