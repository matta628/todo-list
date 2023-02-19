/* eslint-disable no-console */
import userWork from './user_work';
import TodoList from './todo_list';
import Project from './project';

const SpotlightDisplayer = () => {
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

  const deleteTodoForm = (todoForm) => {
    const todoDiv = todoForm.parentNode;
    todoDiv.lastChild.style.display = 'block';
    todoDiv.removeChild(todoForm);
  };

  const submitNewTodo = (event) => {
    const todoForm = event.target.parentNode;
    const name = todoForm.querySelector('#new-todo-name').value;
    const desc = todoForm.querySelector('#new-todo-desc').value;
    const dueDate = todoForm.querySelector('#new-todo-dueDate').value;
    const priority = todoForm.querySelector('#new-todo-priority').value;
    const status = todoForm.querySelector('#new-todo-status').checked;
    const newTodo = TodoList(name, desc, dueDate, priority, status);

    const todoDiv = todoForm.parentNode;
    todoDiv.removeChild(todoForm);
    todoDiv.lastChild.style.display = 'block';
    const projectDOM = todoDiv.parentNode;
    const { id } = projectDOM.dataset;
    const project = userWork.getProject(id);
    project.addTodo(newTodo);
    todoDiv.insertBefore(createTodoDOM(newTodo), todoDiv.lastChild);
    event.preventDefault();
  };

  const createTodoForm = () => {
    const todoForm = document.createElement('div');

    const form = document.createElement('form');
    form.setAttribute('id', 'todo-form');
    todoForm.appendChild(form);

    const name = createFormInputDiv('name', 'Name: ', 'text', true);
    name.classList.add('todo-name');
    form.appendChild(name);

    const desc = createFormInputDiv('desc', 'Description: ', 'text', false);
    desc.classList.add('todo-desc');
    form.appendChild(desc);

    const dueDate = createFormInputDiv('dueDate', 'Due Date: ', 'text', false);
    dueDate.classList.add('todo-dueDate');
    form.appendChild(dueDate);

    const priorityDiv = document.createElement('div');
    const priorityLabel = document.createElement('label');
    priorityLabel.setAttribute('for', 'new-todo-priority');
    priorityLabel.innerHTML = 'Priority: ';
    priorityDiv.appendChild(priorityLabel);
    const priority = document.createElement('select');
    priority.setAttribute('name', 'new-todo-priority');
    priority.setAttribute('id', 'new-todo-priority');
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

    const status = createFormInputDiv('status', 'Status: ', 'checkbox', false);
    form.appendChild(status);

    const todoFormButtons = document.createElement('div');
    todoFormButtons.classList.add('todo-buttons');

    const cancelButton = document.createElement('button');
    cancelButton.setAttribute('id', 'cancel-button');
    cancelButton.innerHTML = 'Cancel';
    cancelButton.addEventListener('click', deleteTodoForm.bind(this, todoForm));
    todoFormButtons.appendChild(cancelButton);

    const submitTodoButton = document.createElement('input');
    submitTodoButton.setAttribute('type', 'submit');
    submitTodoButton.setAttribute('id', 'submit-todo-button');
    todoFormButtons.appendChild(submitTodoButton);
    form.appendChild(todoFormButtons);

    form.addEventListener('submit', submitNewTodo);
    return todoForm;
  };

  const addTodoForm = (project, projectDOM) => {
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
    addTodoButton.addEventListener('click', addTodoForm.bind(this, project, projectDOM));
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

  const displayProject = (project, id) => {
    const spotlight = document.querySelector('.spotlight');
    const projectDOM = createProjectDOM(project);
    projectDOM.dataset.id = id;
    spotlight.appendChild(projectDOM);
  };

  const submitNewProject = (event) => {
    const name = document.getElementById('new-project-name').value;
    const desc = document.getElementById('new-project-description').value;
    const newProject = Project(name, desc, []);
    const id = userWork.addProject(newProject);

    const formWrapper = document.querySelector('.project-form');
    formWrapper.style.display = 'none';
    const form = document.querySelector('#project-form');
    form.reset();

    const newProjectDOM = createProjectDOM(newProject);
    newProjectDOM.dataset.id = id;
    addChildBefore(newProjectDOM, formWrapper);
    event.preventDefault();
  };

  const createProjectInputDiv = (name, type, required) => {
    const formDiv = document.createElement('div');
    formDiv.classList.add(`${name}-input`);

    const label = document.createElement('label');
    label.innerHTML = `${name.charAt(0).toUpperCase()}${name.slice(1)}: `;
    label.setAttribute('for', `new-project-${name}`);
    formDiv.appendChild(label);

    const input = document.createElement('input');
    input.setAttribute('type', type);
    input.setAttribute('id', `new-project-${name}`);
    input.setAttribute('name', `new-project-${name}`);
    input.required = required;
    formDiv.appendChild(input);
    return formDiv;
  };

  const createProjectForm = () => {
    const projectCreateForm = document.createElement('div');
    projectCreateForm.classList.add('project-form', 'project');

    const form = document.createElement('form');
    form.setAttribute('id', 'project-form');
    projectCreateForm.appendChild(form);

    const name = createProjectInputDiv('name', 'text', true);
    name.classList.add('project-name');
    form.appendChild(name);

    const desc = createProjectInputDiv('description', 'text', false);
    form.appendChild(desc);

    const submitProject = document.createElement('div');
    submitProject.classList.add('submit-project');

    const submitProjectButton = document.createElement('input');
    submitProjectButton.setAttribute('type', 'submit');
    submitProjectButton.setAttribute('id', 'submit-project-button');
    submitProject.appendChild(submitProjectButton);
    form.appendChild(submitProject);

    form.addEventListener('submit', submitNewProject);

    return projectCreateForm;
  };

  const createProject = () => {
    const projectForm = document.querySelector('.project-form');
    projectForm.style.display = 'flex';
    scrollToBottom();
  };

  const addProjectCreateButton = () => {
    const projectCreateButton = document.createElement('button');
    projectCreateButton.classList.add('project-create-button');
    projectCreateButton.innerHTML = '+ Add Project';
    projectCreateButton.addEventListener('click', createProject);

    const projectCreateForm = createProjectForm();
    projectCreateForm.style.display = 'none';
    addChild(projectCreateButton);
    addChildBefore(projectCreateForm, projectCreateButton);
  };

  const displayAllProjects = () => {
    const projects = userWork.getProjects();
    projects.forEach((obj) => {
      const [id, project] = Object.entries(obj)[0];
      displayProject(project, id);
    });
    addProjectCreateButton();
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
