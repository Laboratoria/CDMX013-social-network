import { onNavigate } from '../main.js';

export const Welcome = () => {
  const sectionWelcome = document.createElement('section');
  const header = document.createElement('header');
  const imageLogo = document.createElement('img');
  const mainWelcome = document.createElement('main');
  const description = document.createElement('p');
  const buttonSignWithGoogle = document.createElement('button');
  const orSelect = document.createElement('img');
  const buttonLogin = document.createElement('button');
  const ask = document.createElement('p');
  const buttonRegister = document.createElement('button');

  sectionWelcome.classList = 'sectionOfWelcome';
  header.classList = 'header';
  imageLogo.classList = 'imageLogo';
  imageLogo.alt = 'Imagen de un taco';
  mainWelcome.classList = 'mainWelcome';
  description.classList = 'description';
  buttonSignWithGoogle.classList = 'buttonSignWithGoogle';
  orSelect.classList = 'orSelect';
  orSelect.alt = 'or';
  buttonLogin.classList = 'buttonLogin';
  ask.classList = 'ask';

  imageLogo.src = './image/logotaco.png';
  orSelect.src = './image/or.png';
  description.textContent = '¿Buscas los mejores lugares de la ciudad para comer deliciosos tacos? Pues aquí encontrarás recomendaciones de lugares magníficos y podrás compartir tus tips para poder convertirte en un taquero profesional de “La calle a tu cocina”.';
  buttonLogin.textContent = 'Iniciar Sesión';
  ask.textContent = '¿No tienes cuenta?';
  buttonRegister.textContent = 'Regístrate';
  buttonRegister.classList = 'buttonRegister';

  buttonLogin.addEventListener('click', () => {
    onNavigate('/login');
  });

  buttonRegister.addEventListener('click', () => {
    onNavigate('/register');
  });


  header.append(imageLogo);
  mainWelcome.append(description, buttonSignWithGoogle, orSelect, buttonLogin, ask, buttonRegister);
  sectionWelcome.append(header, mainWelcome);

  return sectionWelcome;
};
