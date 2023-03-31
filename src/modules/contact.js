import BackgroundImg from '../images/back-img1.jpg';
import contactImage from '../images/contact.png';
import loadNavbar from './navbar';

function loadContact() {
  document.body.className = '';
  document.body.classList.add('contact');

  const contentDiv = document.querySelector('#content');
  contentDiv.innerHTML = '';

  contentDiv.appendChild(loadNavbar());

  // create the menutitle element
  const contactTitleDiv = document.createElement('div');
  contactTitleDiv.classList.add('contacttitle');

  const contactDiv = document.createElement('div');
  contactDiv.classList.add('title');
  contactDiv.textContent = 'Contact Us';

  const contactImg = document.createElement('img');
  contactImg.src = contactImage;
  contactTitleDiv.appendChild(contactImg);
  contactTitleDiv.appendChild(contactDiv);

  // create the before element and set its background image
  const beforeDiv = document.createElement('div');
  beforeDiv.classList.add('contacttitle-background');
  beforeDiv.style.backgroundImage = `url(${BackgroundImg})`;

  // insert the before element as the first child of menutitle
  contactTitleDiv.insertBefore(beforeDiv, contactTitleDiv.firstChild);

  // append the menutitle element to the content element
  contentDiv.appendChild(contactTitleDiv);

  // Create a div element with the class 'contact-container'
  const contactContainer = document.createElement('div');
  contactContainer.classList.add('contact-container');

  // Create a form element with the id 'contact-form'
  const form = document.createElement('form');
  form.setAttribute('id', 'contact-form');
  form.setAttribute('method', 'post');
  form.setAttribute('action', '#');

  // Create input elements for name, email and subject
  const nameInput = document.createElement('input');
  nameInput.setAttribute('type', 'text');
  nameInput.setAttribute('id', 'name');
  nameInput.setAttribute('placeholder', 'Name');
  nameInput.setAttribute('required', '');

  const emailInput = document.createElement('input');
  emailInput.setAttribute('type', 'email');
  emailInput.setAttribute('id', 'email');
  emailInput.setAttribute('placeholder', 'Email');
  emailInput.setAttribute('required', '');

  const subjectInput = document.createElement('input');
  subjectInput.setAttribute('type', 'text');
  subjectInput.setAttribute('id', 'subject');
  subjectInput.setAttribute('placeholder', 'Subject');
  subjectInput.setAttribute('required', '');

  // Create a textarea element for message
  const messageInput = document.createElement('textarea');
  messageInput.setAttribute('id', 'message');
  messageInput.setAttribute('placeholder', 'Message');
  messageInput.setAttribute('required', '');

  // Create a submit button
  const submitBtn = document.createElement('button');
  submitBtn.setAttribute('type', 'submit');
  submitBtn.setAttribute('id', 'submit-btn');
  submitBtn.textContent = 'Send';

  // Append all the elements to the form element
  form.appendChild(nameInput);
  form.appendChild(emailInput);
  form.appendChild(subjectInput);
  form.appendChild(messageInput);
  form.appendChild(submitBtn);

  // Append the form element to the contact container
  contactContainer.appendChild(form);

  // Append the contact container to the document body
  document.body.appendChild(contactContainer);

  // Add an event listener to the form for submission
  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const nameValue = nameInput.value.trim();
    const emailValue = emailInput.value.trim();
    const subjectValue = subjectInput.value.trim();
    const messageValue = messageInput.value.trim();

    if (
      nameValue === ''
      || emailValue === ''
      || subjectValue === ''
      || messageValue === ''
    ) {
      alert('Please fill out all fields');
    } else {
      // You can add your own code here to handle the form submission
      alert('Thank you for your message!');
    }
  });

  contentDiv.appendChild(contactContainer);

  // Get the ul element
  const menuList = document.querySelector('ul');

  // Get all the li elements inside the ul
  const lis = menuList.querySelectorAll('li');

  lis[0].classList.remove('active');
  lis[1].classList.remove('active');
  lis[2].classList.add('active');
}

export default loadContact;
