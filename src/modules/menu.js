import _ from 'lodash';
console.log("wa karem");
import '../style.css';

import BackgroundImg from '../images/back-img.jpg';
import menuImage from '../images/menu.png';
import Menu1 from '../images/menu1.png'
import Menu2 from '../images/menu2.png'
import loadNavbar from './navbar';


function loadMenu() {

  document.body.className = '';
  document.body.classList.add('menu');



  const contentDiv =  document.querySelector('#content');
  contentDiv.innerHTML = '';
  
  contentDiv.appendChild(loadNavbar());

    

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


// Get the ul element
var menuList = document.querySelector('ul');
// Get all the li elements inside the ul
var lis = menuList.querySelectorAll('li');


lis[0].classList.remove('active');
lis[2].classList.remove('active');
lis[1].classList.add('active');

  







  }

  export default loadMenu;