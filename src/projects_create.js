/* eslint-disable no-console */
import createProjectForm from './project_form';
import spotlightDisplayer from './projects_display';

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
