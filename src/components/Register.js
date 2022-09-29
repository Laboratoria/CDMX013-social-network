import { onNavigate } from '../main.js';

export const Register = () => {
  const div = document.createElement('div');
  const title = document.createElement('h2');
  const buttonNewRegister = document.createElement('button');
  const buttonBack = document.createElement('button');
  const inputEmail = document.createElement('input');
  const inputPass = document.createElement('input');
  const descriptionRegister = document.createElement('h3');
  const inputConfirm = document.createElement('input');
  const buttongoogler = document.createElement('button');
  const liner = document.createElement('hr');

  div.classList.add('container-register');
  buttonBack.textContent = 'Menú de Inicio';
  buttonBack.classList = ('buttonBack');
  title.textContent = 'Postalk';
  title.classList = ('postalkr');
  descriptionRegister.textContent = 'Crea una cuenta';
  descriptionRegister.classList = ('descriptionr');
  inputEmail.textContent = ('input');
  inputEmail.classList = ('inputEmail');
  inputPass.textContent = ('input');
  inputPass.classList = ('inputPass');
  inputConfirm.textContent = ('input');
  inputConfirm.classList = ('inputConfirm');
  inputEmail.placeholder = 'Email';
  inputPass.placeholder = 'Contraseña';
  inputConfirm.placeholder = 'Confirmar contraseña';
  buttonNewRegister.textContent = 'Registrar';
  buttonNewRegister.classList = ('buttonr');
  buttongoogler.textContent = '';
  buttongoogler.classList = ('buttongoogle');
  liner.classList = ('liner');

  document.getElementsByClassName('inputEmail').value;

  /*buttonNewRegister.addEventListener ('click' ) , () => {
 console.log("Hola");
  }*/
  buttonBack.addEventListener('click', () => {
    onNavigate('/');


  });

  // eslint-disable-next-line max-len
  div.append(title, liner, buttongoogler, descriptionRegister, buttonBack, inputEmail, inputPass, inputConfirm, buttonNewRegister, buttonBack);

  return div;
};
