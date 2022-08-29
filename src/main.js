// Este es el punto de entrada de tu aplicacion

// import { myFunction } from './lib/index.js';

// myFunction();

function welcome() {
  const divContainer = document.createElement('div');
  const container = document.createElement('div');
  divContainer.setAttribute('class', 'default');
  const logo = document.createElement('img');
  logo.src = './img/logo.png';
  const buttonsContainer = document.querySelector('main').appendChild(container);
  buttonsContainer.appendChild(divContainer);
  buttonsContainer.setAttribute('class', 'buttons-container');

  const divDefault = document.querySelector('.default');
  divDefault.appendChild(logo);

  const text = document.createElement('p');
  text.setAttribute('class', 'welcome-text');
  text.innerHTML = 'Join us and share your healthy life style';
  divDefault.appendChild(text);

  const loginBtn = document.createElement('button');
  loginBtn.setAttribute('class', 'login-button');
  loginBtn.setAttribute('name', 'login');
  loginBtn.innerHTML = 'Login';
  divDefault.appendChild(loginBtn);

  const registerBtn = document.createElement('button');
  registerBtn.setAttribute('class', 'register-button');
  registerBtn.setAttribute('name', 'login');
  registerBtn.innerHTML = 'Login';
  divDefault.appendChild(registerBtn);
}

welcome();
