export function register() {
// Container for main and footer
  const fatherOfAll = document.createElement('div');
  // Creates main
  const mainContainer = document.createElement('main');
  // Div Register IMG, TXT
  const registerDiv = document.createElement('div');
  registerDiv.setAttribute('class', 'registerDiv');
  // Img Confetti
  const registerImg = document.createElement('img');
  registerImg.setAttribute('class', 'confetti-img');
  registerImg.src = './img/confetti.jpg';
  // Create Account Text
  const titleCreateAccount = document.createElement('h2');
  titleCreateAccount.setAttribute('class', 'create-account');
  titleCreateAccount.innerHTML = 'Create Account';
  // Join Us Text
  const joinUsText = document.createElement('p');
  joinUsText.setAttribute('class', 'join-text');
  joinUsText.innerHTML = 'Join us and share your healthy lifestyle';
  // Append to registerDiv
  registerDiv.append(registerImg, titleCreateAccount, joinUsText);

  const formContainer = document.createElement('div');
  formContainer.setAttribute('class', 'form-container');
  // Register Form
  const registerForm = document.createElement('form');
  registerForm.setAttribute('class', 'form-register');
  // Username
  const labelUsername = document.createElement('label');
  labelUsername.setAttribute('for', 'username');
  labelUsername.textContent = 'Username';
  const inputUsername = document.createElement('input');
  inputUsername.setAttribute('type', 'text');
  inputUsername.setAttribute('id', 'username');
  // Mail
  const labelMail = document.createElement('label');
  labelMail.setAttribute('for', 'user-mail');
  labelMail.textContent = 'Mail';
  const inputMail = document.createElement('input');
  inputMail.setAttribute('type', 'email');
  inputMail.setAttribute('id', 'user-mail');
  // Password
  const labelPass = document.createElement('label');
  labelPass.setAttribute('for', 'user-pass');
  labelPass.textContent = 'Password';
  const inputPass = document.createElement('input');
  inputPass.setAttribute('type', 'password');
  inputPass.setAttribute('id', 'user-pass');
  // Sign up btn
  const btnSignUp = document.createElement('button');
  btnSignUp.textContent = 'Sign up';
  btnSignUp.setAttribute('class', 'sign-up');
  btnSignUp.setAttribute('type', 'submit');
  btnSignUp.setAttribute('value', 'submit');
  // Footer
  const registerFooter = document.createElement('footer');
  const footerText = document.createElement('p');
  footerText.setAttribute('class', 'footer-text');
  footerText.textContent = 'Already have an account? Log in';
  // Insert footer text
  registerFooter.appendChild(footerText);
  // Insert form elements
  registerForm.append(labelUsername, inputUsername, labelMail, inputMail);
  registerForm.append(labelPass, inputPass, btnSignUp);
  // Insert form to form container
  registerFooter.append(registerForm);
  // Insert everything to main
  mainContainer.append(registerDiv, formContainer, registerFooter);
  // Inser to div father of all
  fatherOfAll.appendChild(mainContainer);
  // Return all
  return fatherOfAll;
}
