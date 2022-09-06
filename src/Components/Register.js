import { newUser } from '../lib/Auth.js';
import { onNavigate } from '../main.js';

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
  inputUsername.setAttribute('required', 'required');
  // Mail
  const labelMail = document.createElement('label');
  labelMail.setAttribute('for', 'user-mail');
  labelMail.textContent = 'Mail';
  const inputMail = document.createElement('input');
  inputMail.setAttribute('type', 'email');
  inputMail.setAttribute('id', 'user-mail');
  inputMail.setAttribute('required', 'required');

  // Password
  const labelPass = document.createElement('label');
  labelPass.setAttribute('for', 'user-pass');
  labelPass.textContent = 'Password';
  const inputPass = document.createElement('input');
  inputPass.setAttribute('type', 'password');
  inputPass.setAttribute('id', 'user-pass');
  inputPass.setAttribute('required', 'required');
  
  // aler msg
  const alertMsg = document.createElement('p');
  alertMsg.textContent = 'Password must have 6 characters length';
  alertMsg.setAttribute('id', 'alert-msg');
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
  // eslint-disable-next-line max-len
  registerForm.append(labelUsername, inputUsername, labelMail, inputMail, labelPass, inputPass, alertMsg, btnSignUp);
  formContainer.append(registerForm);
  // Insert form to form container
  // Insert everything to main
  mainContainer.append(registerDiv, formContainer);
  // Inser to div father of all
  fatherOfAll.append(mainContainer, registerFooter);
  // Take data from the form
  registerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    /* const inputName = document.querySelector('#username').value; 
    document.querySelector('#username').required = true;*/
 
    const inputmailValue = document.querySelector('#user-mail').value;
    const inputpasswordValue = document.querySelector('#user-pass').value;
    console.log(inputmailValue, inputpasswordValue);

    newUser(inputmailValue, inputpasswordValue).then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      // ..
      console.log(user);
      // Email verification sent!
      // ...
      console.log('si funciona');
      onNavigate('/home');
    })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log('nel');
        // ..
        if(inputpasswordValue >= 1 ){
          alertMsg.style = 'display: block';
        }
        
      });
  });
  // Return all
  return fatherOfAll;
}