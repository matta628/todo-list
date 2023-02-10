/* eslint-disable no-console */
import userWork from './user_work';
import Project from './project';
import spotlightDisplayer from './projects_display';

function submitNewProject(event) {
  const name = document.getElementById('new-project-name').value;
  const newProject = Project(name, 'TODO: collect desc', []);
  userWork.addProject(newProject);

  const formWrapper = document.querySelector('.project-form');
  spotlightDisplayer.removeChild(formWrapper);

  const newProjectDOM = spotlightDisplayer.createProjectDOM(newProject);
  const projectCreateButton = document.querySelector('.project-create-button');
  spotlightDisplayer.addChildBefore(newProjectDOM, projectCreateButton);
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
  const projectCreateForm = createProjectForm();
  const projectCreateButton = document.querySelector('.project-create-button');
  spotlightDisplayer.addChildBefore(projectCreateForm, projectCreateButton);
  spotlightDisplayer.scrollToBottom();
}

function addProjectCreateButton() {
  const projectCreateButton = document.createElement('button');
  projectCreateButton.classList.add('project-create-button');
  projectCreateButton.innerHTML = '+ Add Project';
  projectCreateButton.addEventListener('click', createProject);

  spotlightDisplayer.addChild(projectCreateButton);
}

export default addProjectCreateButton;
