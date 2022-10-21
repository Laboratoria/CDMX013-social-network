import { signEmailPass, signWithGoogle } from '../lib/auth.js';
import { onNavigate } from '../main.js';

export const Login = () => {
  const sectionLogin = document.createElement('div');
  const headerLogin = document.createElement('header');
  const imageLogo = document.createElement('img');
  const mainLogin = document.createElement('main');
  const startSession = document.createElement('p');
  const buttonGoogle = document.createElement('img');
  const orSelect = document.createElement('img');
  const emailLogin = document.createElement('input');
  const passwordLogin = document.createElement('input');
  const buttonStartSession = document.createElement('button');
  const buttonBackLogin = document.createElement('button');
  const errorMessageOfLogin = document.createElement('div');
  const footerLogin = document.createElement('footer');

  sectionLogin.classList = 'sectionLogin';
  headerLogin.classList = 'headerLogin';
  imageLogo.classList = 'imageLogo';
  imageLogo.alt = 'Imagen de un taco';
  mainLogin.classList = 'mainLogin';
  startSession.classList = 'startSession';
  buttonGoogle.classList = 'buttonGoogle';
  buttonGoogle.alt = 'button of Google';
  orSelect.classList = 'orSelect';
  orSelect.alt = 'or';
  emailLogin.classList = 'emailLogin';
  emailLogin.type = 'email';
  passwordLogin.classList = 'passwordLogin';
  passwordLogin.type = 'password';
  buttonStartSession.classList = 'buttonStartSession';
  buttonBackLogin.classList = 'buttonBackLogin';
  errorMessageOfLogin.classList = 'errorMessageOfLogin';
  footerLogin.classList = 'footerLogin';
  imageLogo.src = './image/logotaco.png';
  startSession.textContent = 'Inicia Sesión';
  buttonGoogle.src = './image/btn_google_light_normal_tvdpi.9.png';
  orSelect.src = './image/or.png';
  emailLogin.placeholder = 'Correo electrónico';
  passwordLogin.placeholder = 'Contraseña';
  buttonStartSession.textContent = 'Iniciar Sesión';
  buttonBackLogin.textContent = 'Regresar';
  errorMessageOfLogin.textContent = '';
  footerLogin.textContent = 'Al registrarte, aceptas los Términos de servicio y la Política de privacidad, incluida la política de Uso de Cookies';

  buttonStartSession.addEventListener('click', () => {
    errorMessageOfLogin.textContent = '';
    signEmailPass(emailLogin.value, passwordLogin.value)
      .then((userCredential) => {
        const user = userCredential.user;
        // console.log(user);
        onNavigate('/wall');
      })
      .catch((error) => {
        // console.log(error.code);
        // const errorCode = error.code;
        // const errorMessage = error.message;
        if (emailLogin.value === '' || passwordLogin.value === '') {
          errorMessageOfLogin.textContent = 'Llena los campos requeridos';
        } else if (error.code === 'auth/wrong-password') {
          errorMessageOfLogin.textContent = 'La contraseña es incorrecta';
        } else if (error.code === 'auth/invalid-email') {
          errorMessageOfLogin.textContent = 'La dirección de email es incorrecta';
          // console.log('estoy dentro del if');
        } else if (error.code === 'auth/user-not-found') {
          errorMessageOfLogin.textContent = 'Usuario no registrado, procede a crear una cuenta';
        }
      });
  });

  buttonGoogle.addEventListener('click', () => {
    signWithGoogle();
  });

  buttonBackLogin.addEventListener('click', () => {
    onNavigate('/');
  });

  headerLogin.appendChild(imageLogo);
  mainLogin.append(
    startSession,
    buttonGoogle,
    orSelect,
    errorMessageOfLogin,
    emailLogin,
    passwordLogin,
    buttonStartSession,
    buttonBackLogin,
  );
  sectionLogin.append(headerLogin, mainLogin, footerLogin);

  return sectionLogin;
};
