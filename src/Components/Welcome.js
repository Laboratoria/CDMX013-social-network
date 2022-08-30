export function welcome() {
  // Buttons Container

  const buttonsContainer = document.createElement('div');
  buttonsContainer.setAttribute('class', 'buttons-container');

  // Logo
  const logo = document.createElement('img');
  logo.src = './img/logo.png';
  buttonsContainer.appendChild(logo);

  // Text
  const text = document.createElement('p');
  text.setAttribute('class', 'welcome-text');
  text.innerHTML = 'Join us and share your healthy life style';
  buttonsContainer.appendChild(text);

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
  document.querySelector('footer').appendChild(divFooter);

  return buttonsContainer;
}
