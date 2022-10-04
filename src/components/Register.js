import { onNavigate } from '../main.js';
import { creatAnAccount } from '../lib/auth.js';

export const Register = () => {
  const sectionRegister = document.createElement('section');
  const headerRegister = document.createElement('header');
  const imageLogo = document.createElement('img');
  const mainRegister = document.createElement('main');
  const createAnAccount = document.createElement('p');
  const email = document.createElement('input');
  const password = document.createElement('input');
  const buttonReg = document.createElement('button');
  const buttonBack = document.createElement('button');
  const errorMessageOfRegister = document.createElement('div');
  const footerWelcome = document.createElement('footer');

  sectionRegister.classList = 'sectionRegister';
  headerRegister.classList = 'headerRegister';
  imageLogo.classList = 'imageLogo';
  imageLogo.alt = 'Imagen de un taco';
  mainRegister.classList = 'mainRegister';
  createAnAccount.classList = 'createAnAccount';
  email.classList = 'email';
  password.classList = 'password';
  password.type = 'password';
  buttonReg.classList = 'buttonReg';
  buttonBack.classList = 'buttonBack';
  errorMessageOfRegister.classList = 'errorMessageOfRegister';
  footerWelcome.classList = 'footer';

  imageLogo.setAttribute('src', './image/logotaco.png');
  createAnAccount.textContent = 'Crea una cuenta';
  email.placeholder = 'Correo electrónico';
  password.placeholder = 'password';
  buttonReg.textContent = 'Regístrate';
  buttonBack.textContent = 'Regresar';
  errorMessageOfRegister.textContent = '';
  footerWelcome.textContent = 'Al registrarte, aceptas los Términos de servicio y la Política de privacidad, incluida la política de Uso de Cookies';

  buttonReg.addEventListener('click', () => {
    errorMessageOfRegister.textContent = '';
    if (email.value === '' || password.value === '') {
      errorMessageOfRegister.textContent = 'Llena los campos requeridos';
    } else {
      creatAnAccount(email.value, password.value)
        .then((userCredential) => {
        // Signed in
          const user = userCredential.user;
          // console.log(userCredential);
          console.log(user);
          onNavigate('/wall');
        // ...
        })
        .catch((error) => {
          console.log(error.code)
          // const errorCode = error.code;
          // const errorMessage = error.message;
          if (error.code === 'auth/email-already-in-use') {
            errorMessageOfRegister.textContent = 'Ya existe una cuenta con el email proporcionado';
          } else if (error.code === 'auth/invalid-email') {
            errorMessageOfRegister.textContent = 'La dirección de email no es válida';
            console.log('estoy dentro del if');
          } else if (error.code === 'auth/weak-password') {
            errorMessageOfRegister.textContent = 'Introduce al menos 8 caracteres';
          }
        });
    }
  });

  buttonBack.addEventListener('click', () => {
    onNavigate('/');
  });

  mainRegister.append(createAnAccount,
    errorMessageOfRegister,
    email,
    password,
    buttonReg,
    buttonBack);
  headerRegister.append(imageLogo);
  sectionRegister.append(headerRegister, mainRegister, footerWelcome);

  return sectionRegister;
};
