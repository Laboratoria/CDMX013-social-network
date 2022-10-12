import { onNavigate } from '../main.js';
import { guardarUssuario, loginGoogle } from '../firebase/auth.js';

export const Register = () => {
  const div = document.createElement('div');
  const title = document.createElement('h2');
  const buttonNewRegister = document.createElement('button');
  const buttonBack = document.createElement('button');
  const inputEmail = document.createElement('input');
  const inputPass = document.createElement('input');
  const descriptionRegister = document.createElement('h3');

  const liner = document.createElement('hr');
  const imageGoogle = document.createElement('img');

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
  inputPass.setAttribute('type', 'password');

  inputEmail.placeholder = 'Email';
  inputPass.placeholder = 'Contraseña';

  buttonNewRegister.textContent = 'Registrar';
  buttonNewRegister.classList = ('buttonr');
  liner.classList = ('liner');
  imageGoogle.classList = ('buttongoogle');
  imageGoogle.setAttribute('src', 'https://i.postimg.cc/tJh7mK8T/google.png');

  imageGoogle.addEventListener('click', () => {
    loginGoogle();
  });
  // document.getElementsByClassName('inputEmail').value;

  /* buttonNewRegister.addEventListener ('click' ) , () => {
 console.log("Hola");
  } */
  buttonBack.addEventListener('click', () => {
    onNavigate('/');
  });

  buttonNewRegister.addEventListener('click', () => {
    guardarUssuario(inputEmail.value, inputPass.value).then((userCredential) => {
      // Signed in
      const user = userCredential.user;
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

  // eslint-disable-next-line max-len
  div.append(title, liner, imageGoogle, descriptionRegister, buttonBack, inputEmail, inputPass, buttonNewRegister, buttonBack);

  return div;
};
