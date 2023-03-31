import loadHome from './home';

function loadFooter() {
  const footer = document.createElement('div');
  footer.classList.add('footer');
  const creator = document.createElement('p');
  creator.textContent = 'Designed by Karem Khanchouch ©';
  footer.appendChild(creator);
  document.body.appendChild(footer);
}

function loadPage() {
  loadHome();
  loadFooter();
}

export default loadPage;
