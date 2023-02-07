const initPage = () => {
  const content = document.createElement('div');
  content.setAttribute('id', 'content');
  document.body.appendChild(content);

  const header = document.createElement('div');
  header.classList.add('header');
  header.innerHTML = '// TODO';
  content.appendChild(header);

  const main = document.createElement('div');
  main.classList.add('main');
  const spotlight = document.createElement('div');
  spotlight.classList.add('spotlight');
  // const sideProjects = document.createElement('div');
  // sideProjects.classList.add('side-projects');
  main.appendChild(spotlight);
  // main.appendChild(sideProjects);
  content.appendChild(main);
};

export default initPage;
