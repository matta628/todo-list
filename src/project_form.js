import userWork from './user_work';
import Project from './project';
import spotlightDisplayer from './projects_display';

function submitNewProject(event) {
  const name = document.getElementById('new-project-name').value;
  const desc = document.getElementById('new-project-description').value;
  const newProject = Project(name, desc, []);
  userWork.addProject(newProject);

  const formWrapper = document.querySelector('.project-form');
  spotlightDisplayer.removeChild(formWrapper);

  const newProjectDOM = spotlightDisplayer.createProjectDOM(newProject);
  const projectCreateButton = document.querySelector('.project-create-button');
  spotlightDisplayer.addChildBefore(newProjectDOM, projectCreateButton);
  event.preventDefault();
}

function createFormInputDiv(name, type, required) {
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
}

function createProjectForm() {
  const projectCreateForm = document.createElement('div');
  projectCreateForm.classList.add('project-form', 'project');

  const form = document.createElement('form');
  form.setAttribute('id', 'form');
  projectCreateForm.appendChild(form);

  const name = createFormInputDiv('name', 'text', true);
  name.classList.add('project-name');
  form.appendChild(name);

  const desc = createFormInputDiv('description', 'text', false);
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
}

export default createProjectForm;
