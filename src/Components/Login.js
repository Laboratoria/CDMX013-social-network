/* eslint-disable no-unused-expressions */
/* eslint-disable no-trailing-spaces */
/* eslint-disable no-unused-vars */

import {
  providerGoogle, resultRedirect, credential, singIn, loginUser, providerGithub, signInWithGithub,
}
  from '../lib/Auth.js';
import { onNavigate } from '../main.js';

export function login() {
  // Container for main and footer
  const fatherOfAll = document.createElement('div');
  // Creates main
  const mainContainer = document.createElement('main');
  // Div Login IMG, TXT
  const loginDiv = document.createElement('div');
  loginDiv.setAttribute('class', 'loginDiv');
  // Img Confetti
  const loginImg = document.createElement('img');
  loginImg.setAttribute('class', 'confetti-img');
  loginImg.src = './img/confetti.jpg';
  // Login Text
  const titleLogin = document.createElement('h2');
  titleLogin.setAttribute('class', 'login-title');
  titleLogin.innerHTML = 'Login';
  // Welcome Text
  const welcomeText = document.createElement('p');
  welcomeText.setAttribute('class', 'welcome-text');
  welcomeText.innerHTML = 'Welcome! Please enter your details';

  loginDiv.append(loginImg, titleLogin, welcomeText);

  const formContainer = document.createElement('div');
  formContainer.setAttribute('class', 'login-container');
  // Login Form
  const loginForm = document.createElement('form');
  loginForm.setAttribute('class', 'form-login');
  // Mail
  const labelMail = document.createElement('label');
  labelMail.setAttribute('for', 'mail');
  labelMail.textContent = 'Mail';
  const inputMail = document.createElement('input');
  inputMail.setAttribute('type', 'email');
  inputMail.setAttribute('id', 'mail');
  inputMail.setAttribute('required', 'required');
  // Password
  const labelPassword = document.createElement('label');
  labelPassword.setAttribute('class', 'passLogin');
  labelPassword.setAttribute('for', 'password');
  labelPassword.textContent = 'Password';
  const inputPassword = document.createElement('input');
  inputPassword.setAttribute('type', 'password');
  inputPassword.setAttribute('id', 'password');
  inputPassword.setAttribute('required', 'required');
  // aler msg
  const alertMsg = document.createElement('div');
  alertMsg.setAttribute('id', 'alert-msg');
  // Login btn
  const btnLogin = document.createElement('button');
  btnLogin.textContent = 'Login';
  btnLogin.setAttribute('class', 'login');
  btnLogin.setAttribute('type', 'submit');
  btnLogin.setAttribute('value', 'submit');

  // Footer
  const loginFooter = document.createElement('footer');
  const footerText = document.createElement('p');
  footerText.setAttribute('class', 'footer-text');
  footerText.textContent = 'Or login with...';
  loginFooter.setAttribute('class', 'login-footer');
  // logos container
  const logosContainer = document.createElement('div');
  logosContainer.setAttribute('class', 'logos-container');
  // logo google IMG
  const logoGoogle = document.createElement('img');
  logoGoogle.setAttribute('class', 'login-google');
  logoGoogle.src = '../img/google-logo.png';

  // github logo IMG
  const logoGithub = document.createElement('img');
  logoGithub.setAttribute('class', 'login-Github');
  logoGithub.src = '../img/gitHub-logo.png';
 
  const createAccount = document.createElement('div');
  createAccount.setAttribute('class', 'register-login');
  const footerQuestion = document.createElement('div');
  footerQuestion.setAttribute('class', 'footer-text');
  footerQuestion.textContent = 'Don´t have an account?';
  
  const registerText = document.createElement('div');
  registerText.setAttribute('class', 'register-text');
  registerText.textContent = 'Sign up';
  registerText.addEventListener('click', () => {
    onNavigate('/register');
  });
  createAccount.append(footerQuestion, registerText);
  logosContainer.append(logoGoogle, logoGithub);
  // Insert footer text
  loginFooter.append(footerText, logosContainer, createAccount);
  // Insert form elements
  // eslint-disable-next-line max-len
  loginForm.append(labelMail, inputMail, labelPassword, inputPassword, alertMsg, btnLogin);
  formContainer.append(loginForm);
  // Insert everything to main
  mainContainer.append(loginDiv, formContainer);
  // Inser to div father of all
  fatherOfAll.append(mainContainer, loginFooter);
  
  // Login email and password
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const inputmailValue = document.querySelector('#mail').value;
    const inputpasswordValue = document.querySelector('#password').value;

    loginUser(inputmailValue, inputpasswordValue).then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      // ...
    })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        if (errorCode === 'auth/wrong-password') {
          alertMsg.textContent = 'Email or password incorrect';
          alertMsg.style = 'display: block';
        } else {
          alertMsg.textContent = 'User not found';
          alertMsg.style = 'display: block';
        }
      });
  });

  // LOGIN WITH GOOGLE
  logoGoogle.addEventListener('click', () => {
    providerGoogle;
    singIn(providerGoogle);
    resultRedirect().then((result) => {
      const credentialGoogle = credential(result);
      const token = credentialGoogle.accessToken;
      // The signed-in user info.
      const user = result.user;
      console.log(user);
      console.log('si funciona');
    })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log('valiendo qso');
      });
  });
  // LOGIN WITH GITHUB
  logoGithub.addEventListener('click', () => {
    providerGithub;
    singIn(providerGithub);
    resultRedirect().then((result) => {
      const credentialGithub = credential(result);
      const token = credentialGithub.accessToken;
      // The signed-in user info.
      const user = result.user;
    })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log('no entra a git');
      });
  });

  inputMail.addEventListener('click', (e) => {
    e.preventDefault();
    alertMsg.style = 'display: none';
  });

  inputPassword.addEventListener('click', (e) => {
    e.preventDefault();
    alertMsg.style = 'display: none';
  });

  return fatherOfAll;
}
