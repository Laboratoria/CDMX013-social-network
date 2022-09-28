import { onNavigate } from '../main.js';

export const Welcome = () => {
    const div = document.createElement('div');
    const title = document.createElement('h2');
    const description = document.createElement('h3');
    const buttonLogin = document.createElement('button');
    const buttonRegistrer = document.createElement('button');

    div.classList.add('container-welcome');
    buttonLogin.textContent = 'Iniciar Sesión'; // como agregar un ID a un elemento
    buttonLogin.classList.add('buttonLogin'); // para reutilizar usar el mismo nombre
    buttonRegistrer.textContent = 'Registrarte';
    buttonRegistrer.classList.add('buttonRegistrer');
    title.textContent = 'Postalk';
    title.classList = ('postalk');
    description.textContent = 'Recomienda tu podcast favorito, likea y comenta';
    description.classList = ('description');

    buttonLogin.addEventListener('click', () => {
        onNavigate('/login');
    });

    buttonRegistrer.addEventListener('click', () => {
        onNavigate('/register');
    });

    div.append(title, description, buttonLogin, buttonRegistrer);

    return div;
};

// cntrl + shift +p
