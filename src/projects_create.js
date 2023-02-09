import userWork from './user_work';
import Project from './project';

function submitNewProject(event) {
  const form = document.getElementById('form');
  form.reset();

  const name = document.getElementById('new-project-name').value;
  userWork.addProject(Project(name, 'desc...', []));

  event.preventDefault();
}

function createProjectForm() {
  const projectCreateForm = document.createElement('div');
  projectCreateForm.classList.add('project-form', 'project');

  const form = document.createElement('form');
  form.setAttribute('id', 'form');
  projectCreateForm.appendChild(form);

  const nameLabel = document.createElement('label');
  nameLabel.innerHTML = 'Name: ';
  nameLabel.setAttribute('for', 'new-project-name');
  const nameInput = document.createElement('input');
  nameInput.setAttribute('type', 'text');
  nameInput.setAttribute('id', 'new-project-name');
  nameInput.setAttribute('name', 'new-project-name');
  nameInput.required = true;

  const name = document.createElement('div');
  name.classList.add('project-name', 'name-input');
  name.appendChild(nameLabel);
  name.appendChild(nameInput);
  form.appendChild(name);

  const submitProjectButton = document.createElement('input');
  submitProjectButton.setAttribute('type', 'submit');
  submitProjectButton.setAttribute('id', 'submit-project-button');

  const submitProject = document.createElement('div');
  submitProject.classList.add('submit-project');
  submitProject.appendChild(submitProjectButton);
  form.appendChild(submitProject);

  form.addEventListener('submit', submitNewProject);

  return projectCreateForm;
}

function createProject() {
  const spotlight = document.querySelector('.spotlight');
  const projectCreateForm = createProjectForm();
  const projectCreateButton = document.querySelector('.project-create-button');
  spotlight.insertBefore(projectCreateForm, projectCreateButton);
  spotlight.scrollTop = spotlight.scrollHeight;
}

function addProjectCreateButton() {
  const spotlight = document.querySelector('.spotlight');
  const projectCreateButton = document.createElement('button');
  projectCreateButton.classList.add('project-create-button');
  projectCreateButton.innerHTML = '+ Add Project';
  projectCreateButton.addEventListener('click', createProject);

  spotlight.appendChild(projectCreateButton);
}

export default addProjectCreateButton;
