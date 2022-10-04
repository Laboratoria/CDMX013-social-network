/* eslint-disable max-len */
import { onNavigate } from '../main.js';
import { signWithEmailPassword, loginGoogle } from '../firebase/auth.js';


export const Login = () => {
  const div = document.createElement('div');
  const titlepost = document.createElement('h1');
  const title = document.createElement('h3');
  const button = document.createElement('button');
  const buttonBack = document.createElement('button');
  const inputEmail = document.createElement('input');
  const inputPassword = document.createElement('input');
  const recuerdame = document.createElement('p');

  const forgotpassword = document.createElement('p');
  const line = document.createElement('hr');
  const notienescuenta = document.createElement('p');
  const buttonnuevacuenta = document.createElement('button');
  const imageGoogletwo = document.createElement('img');

  titlepost.textContent = 'Postalk';
  titlepost.classList = ('postalklog');
  div.classList.add('container-login');
  button.textContent = 'Inicia Sesión';
  button.classList = ('buttonlogin');
  buttonBack.textContent = 'Regresa';
  buttonBack.classList.add('buttonback');
  title.textContent = 'Inicia sesión para acceder a tu cuenta';
  title.classList = ('iniciasesion');
  inputEmail.placeholder = 'Correo electronico';
  inputEmail.classList = ('emaillogin');
  inputPassword.placeholder = 'Contraseña';
  inputPassword.classList = ('passwordlogin');
  inputPassword.setAttribute('type', 'password');
  recuerdame.textContent = 'Recordarme';
  recuerdame.classList = ('recuerdame');

  forgotpassword.textContent = '¿Olvisdaste la constraseña?';
  forgotpassword.classList = ('forgotpassword');
  line.classList = ('line');
  notienescuenta.textContent = '¿No tienes cuenta?';
  notienescuenta.classList = ('textcuenta');
  buttonnuevacuenta.textContent = 'Registrar';
  buttonnuevacuenta.classList = ('buttonnuevacuenta');

  imageGoogletwo.classList = ('buttongoogle');
  imageGoogletwo.setAttribute('src', 'https://i.postimg.cc/tJh7mK8T/google.png');

  button.addEventListener('click', () => {
    console.log('hola');
    const mail = inputEmail.value;
    const password = inputPassword.value;
    signWithEmailPassword(mail, password).then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log(user)
      // ...
    })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log (errorMessage)
      });
  });
  imageGoogletwo.addEventListener('click', () => {
    loginGoogle();
  });
  buttonBack.addEventListener('click', () => {
    onNavigate('/');
  });

  div.append(titlepost, imageGoogletwo, recuerdame, notienescuenta, line, forgotpassword, title, inputEmail, inputPassword, button, buttonBack, buttonnuevacuenta);

  return div;
};

// modularizar el codigo
