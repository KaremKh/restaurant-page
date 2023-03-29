import _ from 'lodash';
console.log("wa karem");
import '../style.css';
import Background from '../images/background.jpg';
import Icon1 from '../images/icon1.png';
import Icon2 from '../images/icon2.png';
import Icon3 from '../images/icon3.png';
import Shawarma from '../images/shawarma.jpeg';
import Entrees from '../images/entrees.jpg';
import Drink from '../images/drink.jpg';
import Brunch from '../images/brunch.jpg'
import loadMenu from './menu';



function loadHome() {

  document.body.className = '';
  
    let contentDiv;

    if (document.querySelector('#content') == null){
        contentDiv = document.createElement('div');
        contentDiv.id = 'content';
        contentDiv.innerHTML = '';
        document.body.appendChild(contentDiv);
    }
    else {
        contentDiv = document.querySelector('#content');
        contentDiv.innerHTML = '';
        console.log("removing content");
    }
    

    const orderNowDiv = document.createElement('div');
    orderNowDiv.classList.add('order-now');

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
    homeLi.appendChild(homeLink);

    const menuLi = document.createElement('li');
    const menuLink = document.createElement('a');
    menuLink.href = '#';
    menuLink.textContent = 'Menu';
    menuLi.appendChild(menuLink);

    menuLink.addEventListener('click', () => {
      loadMenu();
  });

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

    const orderDiv = document.createElement('div');
orderDiv.classList.add('order');

orderNowDiv.appendChild(headerDiv);
orderNowDiv.appendChild(orderDiv);

const promoDiv = document.createElement('div');
promoDiv.classList.add('promo');

const promos = [
    {
      title: "Lunch Special",
      value: "20% off on all shawarma wraps from 11am to 2pm every weekday",
      image: Shawarma
    },
    {
      title: "Family Feast",
      value: "Get a free appetizer platter with any order of two or more entrees",
      image: Entrees
    },
    {
      title: "Happy Hour",
      value: "Enjoy half-priced drinks and appetizers from 4pm to 6pm every day",
      image: Drink
    },
    {
      title: "Weekend Brunch",
      value: "Try our new brunch menu featuring Middle Eastern-inspired dishes",
      image: Brunch
    }
  ];

for (let i = 0; i<4; i++){
    const promoCard = document.createElement('div');
    promoCard.classList.add('card');
    promoCard.id = `card${i+1}`;
    const promoImg = document.createElement('img');
    promoImg.id = 'promo-img';
    promoImg.src = promos[i].image;
    const promoTitle = document.createElement('h4');
    promoTitle.id = 'promo-title';
    promoTitle.textContent = promos[i].title;
    const promoValue = document.createElement('h3');
    promoValue.id = 'promo-value';
    promoValue.textContent = promos[i].value;
    const promoButton = document.createElement('button');
    promoButton.id = 'promo-btn';
    promoButton.textContent = 'Copy Code';

    promoCard.appendChild(promoImg);
    promoCard.appendChild(promoTitle);
    promoCard.appendChild(promoValue);
    promoCard.appendChild(promoButton);

    promoDiv.appendChild(promoCard);
} 

const footerDiv = document.createElement('div');
footerDiv.classList.add('footer');

contentDiv.appendChild(orderNowDiv);
contentDiv.appendChild(promoDiv);
contentDiv.appendChild(footerDiv);

const restoIntro = document.createElement('div');
restoIntro.classList.add('intro');
const introHeader = document.createElement('h1');
introHeader.textContent = 'KoulTime'; 
const introP = document.createElement('p');
introP.textContent = 'Welcome to KoulTime Restaurant, where we serve authentic Arabic cuisine made with fresh ingredients and traditional recipes passed down through generations.'; // Description of the restaurant
const introB = document.createElement('button');
introB.classList.add('button');
introB.textContent = 'View Menu'; 
introB.addEventListener( 'click', () => {
    loadMenu();
});
restoIntro.appendChild(introHeader);
restoIntro.appendChild(introP);
restoIntro.appendChild(introB);
orderDiv.appendChild(restoIntro);

// Get the ul element
var menuList = document.querySelector('ul');

// Get all the li elements inside the ul
var lis = menuList.querySelectorAll('li');


lis[0].classList.add('active');
lis[1].classList.remove('active');
lis[2].classList.remove('active');







  }

  export default loadHome;
 
  