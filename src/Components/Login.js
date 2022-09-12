import { providerGoogle, resultRedirect, credential, singIn, loginUser } from '../lib/Auth.js';
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
     
  loginDiv.append(loginImg,titleLogin,welcomeText);

  const formContainer= document.createElement('div');
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
  const labelPassword= document.createElement('label');
  labelPassword.setAttribute('class', 'passLogin');
  labelPassword.setAttribute('for', 'password');
  labelPassword.textContent = 'Password';
  const inputPassword = document.createElement('input');
  inputPassword.setAttribute('type', 'password');
  inputPassword.setAttribute('id', 'password');
  inputPassword.setAttribute('required', 'required');
  // aler msg
  const alertMsg = document.createElement('p');
  alertMsg.textContent = 'Password must have 6 characters length';
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
  logosContainer.setAttribute('class','logos-container');
  //logo google IMG
  const  logoGoogle= document.createElement('img');
  logoGoogle.setAttribute('class', 'login-google');
  logoGoogle.src = '../img/google-logo.png';


  //logo twitter IMG
  const  logoTwitter= document.createElement('img');
  logoTwitter.setAttribute('class', 'login-Twitter');
  logoTwitter.src = '../img/gitHub-logo.png';

  logosContainer.append(logoGoogle, logoTwitter);
  // Insert footer text
  loginFooter.append(footerText, logosContainer);
  // Insert form elements
  // eslint-disable-next-line max-len
  loginForm.append(labelMail, inputMail, labelPassword, inputPassword, alertMsg,  btnLogin );
  formContainer.append(loginForm);
  // Insert everything to main
  mainContainer.append(loginDiv, formContainer);
  // Inser to div father of all
  fatherOfAll.append(mainContainer, loginFooter);    
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const inputmailValue = document.querySelector('#mail').value;
    const inputpasswordValue = document.querySelector('#password').value;

    loginUser(inputmailValue, inputpasswordValue).then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      
    })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log('valiendo qso');
      });
  });

  logoGoogle.addEventListener('click', ()=> {
    providerGoogle;
    singIn(providerGoogle);
    resultRedirect().then((result)=> {
      const credentialGoogle = credential(result);
      const token = credentialGoogle.accessToken;
    // The signed-in user info.
      const user = result.user;
    console.log(user);
    console.log('si funciona');
    })
    .catch((error) =>{
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log('valiendo qso');
    });
  });
  
 
  return fatherOfAll;
}
