import { onNavigate } from '../main.js';
import { creatAnAccount } from '../lib/auth.js';

export const Register = () => {
  const sectionRegister = document.createElement('section');
  const header = document.createElement('header');
  const imageLogo = document.createElement('img');
  const mainRegister = document.createElement('main');
  const createAnAccount = document.createElement('p');
  const email = document.createElement('input');
  const password = document.createElement('input');
  const buttonRegister1 = document.createElement('button');
  const buttonBack = document.createElement('button');
  let errorMessageOfRegister = document.createElement('p');
  const footerWelcome = document.createElement('footer');

  sectionRegister.classList = 'sectionRegister';
  header.classList = 'header';
  imageLogo.classList = 'imageLogo';
  imageLogo.alt = 'Imagen de un taco';
  mainRegister.classList = 'mainRegister';
  createAnAccount.classList = 'createAnAccount';
  email.classList = 'email';
  password.classList = 'password';
  password.type = 'password';
  buttonRegister1.classList = 'buttonRegister1';
  buttonBack.classList = 'buttonBack';
  errorMessageOfRegister.classList = 'errorMessageOfRegister';
  footerWelcome.classList = 'footer';

  imageLogo.setAttribute('src', './image/logotaco.png');
  createAnAccount.textContent = 'Crea una cuenta';
  email.placeholder = 'Correo electrónico';
  password.placeholder = 'password';
  buttonRegister1.textContent = 'Regístrate';
  buttonBack.textContent = 'Regresar';
  errorMessageOfRegister = '';
  footerWelcome.textContent = 'Al registrarte, aceptas los Términos de servicio y la Política de privacidad, incluida la política de Uso de Cookies';

  buttonRegister1.addEventListener('click', () => {
    if (email.value === '' || password.value === '') {
      errorMessageOfRegister.innerHTML = 'Llena los campos requeridos';
    } else {
      creatAnAccount(email.value, password.value)
        .then((userCredential) => {
        // Signed in
          const user = userCredential.user;
          console.log(user);
          onNavigate('/wall');
        // ...
        })
        .catch((error) => {
          // if (error.code === "auth/invalid-email"){

          // }else if() {

          // }
          const errorCode = error.code;
          const errorMessage = error.message;
          //console.log(error.keys());
          console.log(error.code)
          console.log(error.message);
          // ..
        });
    }
  });

  buttonBack.addEventListener('click', () => {
    onNavigate('/');
  });

  mainRegister.append(createAnAccount, email, password, buttonRegister1, buttonBack);
  header.append(imageLogo);
  sectionRegister.append(header, mainRegister, footerWelcome);

  return sectionRegister;
};
