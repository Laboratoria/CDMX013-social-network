import { onNavigate } from '../main.js';

export function welcome() {
  // Container for main and footer
  const fatherOfAll = document.createElement('div');
  // Buttons Container
  const mainContainer = document.createElement('main');
  const buttonsContainer = document.createElement('div');
  buttonsContainer.setAttribute('class', 'buttons-container');
  // Welcome IMG
  const welcomeImg = document.createElement('img');
  welcomeImg.setAttribute('class', 'first-img');
  welcomeImg.src = './img/welcome-img.jpg';

  // Logo
  const logo = document.createElement('img');
  logo.setAttribute('class', 'logo');
  logo.src = './img/logo.png';
  buttonsContainer.appendChild(logo);

  // Text
  const text = document.createElement('p');
  text.setAttribute('class', 'first-text');
  text.innerHTML = 'By Signing up you agree to the Terms of use';

  // Login
  const loginBtn = document.createElement('button');
  loginBtn.setAttribute('class', 'button');
  loginBtn.setAttribute('id', 'login');
  loginBtn.innerHTML = 'Login';
  loginBtn.addEventListener('click', () => {
    onNavigate('/login');
  });
  buttonsContainer.appendChild(loginBtn);

  // Register
  const registerBtn = document.createElement('button');
  registerBtn.setAttribute('class', 'button');
  registerBtn.setAttribute('id', 'register');
  registerBtn.innerHTML = 'Sign up';
  registerBtn.addEventListener('click', () => {
    onNavigate('/register');
  });
  buttonsContainer.appendChild(registerBtn);

  // Footer Div
  const footerContainer = document.createElement('footer');
  footerContainer.appendChild(text);
  // Insert to main
  mainContainer.append(welcomeImg, buttonsContainer);
  fatherOfAll.append(mainContainer, footerContainer);

  return fatherOfAll;
}
