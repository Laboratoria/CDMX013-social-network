export function welcome() {
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
  logo.src = './img/logo.png';
  buttonsContainer.appendChild(logo);

  // Text
  const text = document.createElement('p');
  text.setAttribute('class', 'welcome-text');
  text.innerHTML = 'By Signing up you agree to the Terms of use';

  // Login
  const loginBtn = document.createElement('button');
  loginBtn.setAttribute('class', 'button');
  loginBtn.setAttribute('name', 'login');
  loginBtn.innerHTML = 'Login';
  buttonsContainer.appendChild(loginBtn);

  // Register
  const registerBtn = document.createElement('button');
  registerBtn.setAttribute('class', 'button');
  registerBtn.setAttribute('id', 'register');
  registerBtn.innerHTML = 'Register';
  buttonsContainer.appendChild(registerBtn);

  // Footer Div
  const divFooter = document.createElement('div');
  divFooter.setAttribute('class', 'welcome-footer');
  divFooter.appendChild(text);
  // Insert to main
  mainContainer.append(welcomeImg, buttonsContainer, divFooter);

  return mainContainer;
}
