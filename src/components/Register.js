import { onNavigate } from '../main.js';
// eslint-disable-next-line import/no-unresolved
import { creatAnAccount } from '../lib/auth.js';

export const Register = () => {
  const sectionRegister = document.createElement('section');
  const headerRegister = document.createElement('header');
  const imageLogo = document.createElement('img');
  const mainRegister = document.createElement('main');
  const createAnAccount = document.createElement('p');
  // eslint-disable-next-line import/no-mutable-exports
  let userName = document.createElement('input');
  const emailRegister = document.createElement('input');
  const passwordRegister = document.createElement('input');
  const buttonRegister = document.createElement('button');
  const buttonBackRegister = document.createElement('button');
  const errorMessageOfRegister = document.createElement('div');
  const footerRegister = document.createElement('footer');

  sectionRegister.classList = 'sectionRegister';
  headerRegister.classList = 'headerRegister';
  imageLogo.classList = 'imageLogo';
  imageLogo.alt = 'Imagen de un taco';
  mainRegister.classList = 'mainRegister';
  createAnAccount.classList = 'createAnAccount';
  userName.classList = 'userName';
  emailRegister.classList = 'emailRegister';
  emailRegister.type = 'email';
  passwordRegister.classList = 'passwordRegister';
  passwordRegister.type = 'password';
  buttonRegister.classList = 'buttonRegister';
  buttonBackRegister.classList = 'buttonBackRegister';
  errorMessageOfRegister.classList = 'errorMessageOfRegister';
  footerRegister.classList = 'footerRegister';

  imageLogo.src = './image/logotaco.png';
  createAnAccount.textContent = 'Crea una cuenta';
  userName.placeholder = 'Nombre de usuario';
  emailRegister.placeholder = 'Correo electrónico';
  passwordRegister.placeholder = 'Contraseña';
  buttonRegister.textContent = 'Regístrate';
  buttonBackRegister.textContent = 'Regresar';
  errorMessageOfRegister.textContent = '';
  footerRegister.textContent = 'Al registrarte, aceptas los Términos de servicio y la Política de privacidad, incluida la política de Uso de Cookies';

  buttonRegister.addEventListener('click', () => {
    errorMessageOfRegister.textContent = '';
    creatAnAccount(emailRegister.value, passwordRegister.value)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        user.displayName = userName.value;
        // console.log(user.displayName);
        // console.log(userCredential);
        onNavigate('/wall');
        // ...
      })
      .catch((error) => {
        // console.log(error.code);
        // const errorCode = error.code;
        // const errorMessage = error.message;
        if (emailRegister.value === '' || passwordRegister.value === '') {
          errorMessageOfRegister.textContent = 'Llena los campos requeridos';
        } else if (error.code === 'auth/email-already-in-use') {
          errorMessageOfRegister.textContent = 'Ya existe una cuenta con el email proporcionado';
        } else if (error.code === 'auth/invalid-email') {
          errorMessageOfRegister.textContent = 'La dirección de email no es válida';
          // console.log('estoy dentro del if');
        } else if (error.code === 'auth/weak-password') {
          errorMessageOfRegister.textContent = 'Introduce al menos 8 caracteres';
        }
      });
  });

  buttonBackRegister.addEventListener('click', () => {
    onNavigate('/');
  });

  headerRegister.appendChild(imageLogo);
  mainRegister.append(
    createAnAccount,
    errorMessageOfRegister,
    userName,
    emailRegister,
    passwordRegister,
    buttonRegister,
    buttonBackRegister,
  );
  sectionRegister.append(headerRegister, mainRegister, footerRegister);

  return sectionRegister;
};
