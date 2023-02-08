function addProjectCreateButton() {
  const projectCreateButton = document.createElement('button');
  projectCreateButton.classList.add('project-create-button');
  projectCreateButton.innerHTML = '+ Add Project';
  const spotlight = document.querySelector('.spotlight');
  spotlight.appendChild(projectCreateButton);
}

export default addProjectCreateButton;
