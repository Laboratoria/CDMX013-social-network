import { onNavigate } from '../main.js';

export const Welcome = () => {
  const sectionWelcome = document.createElement('section');
  const headerWelcome = document.createElement('header');
  const imageLogo = document.createElement('img');
  const mainWelcome = document.createElement('main');
  const description = document.createElement('p');
  const buttonLogin = document.createElement('button');
  const ask = document.createElement('p');
  const buttonRegisterOfWelcome = document.createElement('button');

  sectionWelcome.classList = 'sectionWelcome';
  headerWelcome.classList = 'headerWelcome';
  imageLogo.classList = 'imageLogo';
  imageLogo.alt = 'Imagen de un taco';
  mainWelcome.classList = 'mainWelcome';
  description.classList = 'description';
  buttonLogin.classList = 'buttonLogin';
  ask.classList = 'ask';

  imageLogo.src = './image/logotaco.png';
  description.textContent = '¿Buscas los mejores lugares de la ciudad para comer deliciosos tacos? Pues aquí encontrarás recomendaciones de lugares magníficos y podrás compartir tus tips para poder convertirte en un taquero profesional de “La calle a tu cocina”.';
  buttonLogin.textContent = 'Iniciar Sesión';
  ask.textContent = '¿No tienes cuenta?';
  buttonRegisterOfWelcome.textContent = 'Regístrate';
  buttonRegisterOfWelcome.classList = 'buttonRegisterOfWelcome';

  buttonLogin.addEventListener('click', () => {
    onNavigate('/login');
  });

  buttonRegisterOfWelcome.addEventListener('click', () => {
    onNavigate('/register');
  });

  headerWelcome.appendChild(imageLogo);
  mainWelcome.append(description, buttonLogin, ask, buttonRegisterOfWelcome);
  sectionWelcome.append(headerWelcome, mainWelcome);

  return sectionWelcome;
};
