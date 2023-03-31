import '../style.css';

import Shawarma from '../images/shawarma.jpeg';
import Entrees from '../images/entrees.jpg';
import Drink from '../images/drink.jpg';
import Brunch from '../images/brunch.jpg';
import loadMenu from './menu';
import loadNavbar from './navbar';

console.log('wa karem');

function loadHome() {
  document.body.className = '';

  let contentDiv;

  if (document.querySelector('#content') == null) {
    contentDiv = document.createElement('div');
    contentDiv.id = 'content';
    contentDiv.innerHTML = '';
    document.body.appendChild(contentDiv);
  } else {
    contentDiv = document.querySelector('#content');
    contentDiv.innerHTML = '';
    console.log('removing content');
  }

  const orderNowDiv = document.createElement('div');
  orderNowDiv.classList.add('order-now');

  const orderDiv = document.createElement('div');
  orderDiv.classList.add('order');

  orderNowDiv.appendChild(loadNavbar());
  orderNowDiv.appendChild(orderDiv);

  const promoDiv = document.createElement('div');
  promoDiv.classList.add('promo');

  const promos = [
    {
      title: 'Lunch Special',
      value: '20% off on all shawarma wraps from 11am to 2pm every weekday',
      image: Shawarma,
    },
    {
      title: 'Family Feast',
      value:
        'Get a free appetizer platter with any order of two or more entrees',
      image: Entrees,
    },
    {
      title: 'Happy Hour',
      value:
        'Enjoy half-priced drinks and appetizers from 4pm to 6pm every day',
      image: Drink,
    },
    {
      title: 'Weekend Brunch',
      value: 'Try our new brunch menu featuring Middle Eastern-inspired dishes',
      image: Brunch,
    },
  ];

  for (let i = 0; i < 4; i++) {
    const promoCard = document.createElement('div');
    promoCard.classList.add('card');
    promoCard.id = `card${i + 1}`;
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

  contentDiv.appendChild(orderNowDiv);
  contentDiv.appendChild(promoDiv);

  const restoIntro = document.createElement('div');
  restoIntro.classList.add('intro');
  const introHeader = document.createElement('h1');
  introHeader.textContent = 'KoulTime';
  const introP = document.createElement('p');
  introP.textContent = 'Welcome to KoulTime Restaurant, where we serve authentic Arabic cuisine made with fresh ingredients and traditional recipes passed down through generations.'; // Description of the restaurant
  const introB = document.createElement('button');
  introB.classList.add('button');
  introB.textContent = 'View Menu';
  introB.addEventListener('click', () => {
    loadMenu();
  });
  restoIntro.appendChild(introHeader);
  restoIntro.appendChild(introP);
  restoIntro.appendChild(introB);
  orderDiv.appendChild(restoIntro);

  // Get the ul element
  const menuList = document.querySelector('ul');

  // Get all the li elements inside the ul
  const lis = menuList.querySelectorAll('li');

  lis[0].classList.add('active');
  lis[1].classList.remove('active');
  lis[2].classList.remove('active');
}

export default loadHome;
