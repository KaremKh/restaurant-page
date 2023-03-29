import _ from 'lodash';
console.log("wa karem");
import '../style.css';

import Icon1 from '../images/icon1.png';
import Icon2 from '../images/icon2.png';
import Icon3 from '../images/icon3.png';
import BackgroundImg from '../images/back-img.jpg';
import loadHome from './home';
import menuImage from '../images/menu.png';
import Menu1 from '../images/menu1.png'
import Menu2 from '../images/menu2.png'


function loadMenu() {

  document.body.className = '';
  document.body.classList.add('menu');



  const contentDiv =  document.querySelector('#content');
  contentDiv.innerHTML = '';
  
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


  homeLink.href = '#';
  homeLink.textContent = 'Home';
  
  homeLink.addEventListener('click', () => {
      loadHome();
  });
  
  homeLi.appendChild(homeLink);
  
  const menuLi = document.createElement('li');
  const menuLink = document.createElement('a');
  menuLink.href = '#';
  menuLink.textContent = 'Menu';
  menuLi.appendChild(menuLink);
  
  const contactLi = document.createElement('li');
  const contactLink = document.createElement('a');
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
  searchIconImg.src = Icon3
  
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
  
  contentDiv.appendChild(headerDiv);

    // Get the ul element
var menuList = document.querySelector('ul');

// Get all the li elements inside the ul
var lis = menuList.querySelectorAll('li');


lis[0].classList.remove('active');
lis[2].classList.remove('active');
lis[1].classList.add('active');

// create the menutitle element
const menutitleDiv = document.createElement('div');
menutitleDiv.classList.add('menutitle');

const titleDiv = document.createElement('div');
titleDiv.classList.add('title');
titleDiv.textContent = 'Menu';

const menuImg = document.createElement('img');
menuImg.src = menuImage;
menutitleDiv.appendChild(menuImg);
menutitleDiv.appendChild(titleDiv);

// create the before element and set its background image
const beforeDiv = document.createElement('div');
beforeDiv.classList.add('menutitle-background');
beforeDiv.style.backgroundImage = `url(${BackgroundImg})`;

// insert the before element as the first child of menutitle
menutitleDiv.insertBefore(beforeDiv, menutitleDiv.firstChild);

// append the menutitle element to the content element
contentDiv.appendChild(menutitleDiv);

const menuDiv = document.createElement('div');
menuDiv.classList.add('menu-container');
const menu1 = document.createElement('img');
menu1.src = Menu1;
const menu2 = document.createElement('img');
menu2.src = Menu2;

menuDiv.appendChild(menu1);
menuDiv.appendChild(menu2);
contentDiv.appendChild(menuDiv);

  







  }

  export default loadMenu;