/* eslint-disable max-len */
import { onNavigate } from '../main.js';
import { guardarUssuario } from '../firebase/auth.js';

export const Login = () => {
  const div = document.createElement('div');
  const titlepost = document.createElement('h1');
  const title = document.createElement('h3');
  const button = document.createElement('button');
  const buttonBack = document.createElement('button');
  const inputEmail = document.createElement('input');
  const inputPassword = document.createElement('input');
  const recuerdame = document.createElement('p');
  const buttongoogle = document.createElement('button');
  const forgotpassword = document.createElement('p');
  const line = document.createElement('hr');
  const notienescuenta = document.createElement('p');
  const buttonnuevacuenta = document.createElement('button');

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
  recuerdame.textContent = 'Recordarme';
  recuerdame.classList = ('recuerdame');
  buttongoogle.textContent = '';
  buttongoogle.classList = ('buttongoogle');
  forgotpassword.textContent = '¿Olvisdaste la constraseña?';
  forgotpassword.classList = ('forgotpassword');
  line.classList = ('line');
  notienescuenta.textContent = '¿No tienes cuenta?';
  notienescuenta.classList = ('textcuenta');
  buttonnuevacuenta.textContent = 'Registrar';
  buttonnuevacuenta.classList = ('buttonnuevacuenta');

  buttonBack.addEventListener('click', () => {
    onNavigate('/');
  });
  button.addEventListener('click', () => {
    guardarUssuario('carlos@carlos.com', '123456').then((userCredential) => {
      // Signed in
      console.log('ya se creo tu user');
      // ...
    })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log('Nel Karnal no puedes', errorMessage);
        // ..
      });

      
  });

  div.append(titlepost, recuerdame, notienescuenta, line, forgotpassword, buttongoogle, title, inputEmail, inputPassword, button, buttonBack, buttonnuevacuenta);

  return div;
};

// modularizar el codigo
