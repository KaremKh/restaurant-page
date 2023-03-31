import Icon1 from '../images/icon1.png';
import Icon2 from '../images/icon2.png';
import Icon3 from '../images/icon3.png';
import loadMenu from './menu';
import loadHome from './home';
import loadContact from './contact';

function loadNavbar() {
  const headerDiv = document.createElement('div');
  headerDiv.classList.add('header');

  const logoDiv = document.createElement('div');
  logoDiv.classList.add('logo');
  logoDiv.textContent = 'KoulTime';

  const tabsDiv = document.createElement('div');
  tabsDiv.classList.add('tabs');

  const nav = document.createElement('nav');
  const ul = document.createElement('ul');

  const homeLi = document.createElement('li');
  const homeLink = document.createElement('a');
  homeLink.id = 'homelink';

  homeLink.addEventListener('click', () => {
    loadHome();
  });

  homeLink.href = '#';
  homeLink.textContent = 'Home';

  homeLi.appendChild(homeLink);

  const menuLi = document.createElement('li');
  const menuLink = document.createElement('a');

  menuLink.id = 'menulink';
  menuLink.href = '#';
  menuLink.textContent = 'Menu';
  menuLi.appendChild(menuLink);

  menuLink.addEventListener('click', () => {
    loadMenu();
  });

  const contactLi = document.createElement('li');
  const contactLink = document.createElement('a');

  contactLink.id = 'contactlink';

  contactLink.addEventListener('click', () => {
    loadContact();
  });

  contactLink.href = '#';
  contactLink.textContent = 'Contact';
  contactLi.appendChild(contactLink);

  ul.appendChild(homeLi);
  ul.appendChild(menuLi);
  ul.appendChild(contactLi);

  nav.appendChild(ul);
  tabsDiv.appendChild(nav);

  const buttonsDiv = document.createElement('div');
  buttonsDiv.classList.add('buttons');

  const userIconLink = document.createElement('a');
  userIconLink.href = '#';
  userIconLink.classList.add('button-icon');

  const userIconImg = document.createElement('img');
  userIconImg.id = 'user-icon';
  userIconImg.alt = 'User Icon';
  userIconImg.src = Icon1;

  userIconLink.appendChild(userIconImg);

  const cartIconLink = document.createElement('a');
  cartIconLink.href = '#';
  cartIconLink.classList.add('button-icon');

  const cartIconImg = document.createElement('img');
  cartIconImg.id = 'cart-icon';
  cartIconImg.alt = 'Cart Icon';
  cartIconImg.src = Icon2;

  cartIconLink.appendChild(cartIconImg);

  const searchIconLink = document.createElement('a');
  searchIconLink.href = '#';
  searchIconLink.classList.add('button-icon');

  const searchIconImg = document.createElement('img');
  searchIconImg.id = 'search-icon';
  searchIconImg.alt = 'Search Icon';
  searchIconImg.src = Icon3;

  searchIconLink.appendChild(searchIconImg);

  const signInButton = document.createElement('button');
  signInButton.classList.add('button');
  signInButton.textContent = 'Sign In';

  buttonsDiv.appendChild(userIconLink);
  buttonsDiv.appendChild(cartIconLink);
  buttonsDiv.appendChild(searchIconLink);
  buttonsDiv.appendChild(signInButton);

  headerDiv.appendChild(logoDiv);
  headerDiv.appendChild(tabsDiv);
  headerDiv.appendChild(buttonsDiv);

  return headerDiv;
}

export default loadNavbar;
