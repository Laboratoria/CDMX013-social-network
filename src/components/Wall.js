import { onNavigate } from '../main.js';
import { userName } from './Register.js';
import { closed, auth } from '../lib/auth.js';
import { savePost } from '../lib/store.js';

const sectionWall = document.createElement('sectionWall');
const headerWall = document.createElement('header');
const imageLogo = document.createElement('img');
const mainWall = document.createElement('main');
const containerWritePost = document.createElement('section');
const welcomeToWall = document.createElement('p');
const imageChef = document.createElement('img');
const askToPost = document.createElement('p');
const inputPost = document.createElement('textarea');
const buttonPost = document.createElement('img');
const errorMessagePost = document.createElement('p');
const containerOldPost = document.createElement('section');
const containerChefUserNamePost = document.createElement('section');
const imageChefOldPost = document.createElement('img');
const userNameOldPost = document.createElement('p');
const showOldPost = document.createElement('textarea');
const containerImageOldPost = document.createElement('section');
const buttonLikePost = document.createElement('img');
const buttonEditPost = document.createElement('img');
const buttonDelatePost = document.createElement('img');
const containerBackWall = document.createElement('section');
const buttonBackWall = document.createElement('img');

sectionWall.classList = 'sectionWall';
headerWall.classList = 'headerWall';
imageLogo.classList = 'imageLogo';
imageLogo.alt = 'Imagen de un taco';
mainWall.classList = 'mainWall';
containerWritePost.classList = 'containerWritePost';
welcomeToWall.classList = 'welcomeToWall';
imageChef.classList = 'imageChef';
imageChef.alt = 'Imagen de un chef';
imageChef.title = 'Usuario';
askToPost.classList = 'askToPost';
inputPost.classList = 'inputPost';
buttonPost.classList = 'buttonPost';
buttonPost.type = 'submit';
buttonPost.alt = 'Imagen de un recetario';
buttonPost.title = 'Publicar';
errorMessagePost.classList = 'errorMessagePost';
containerOldPost.classList = 'containerOldPost';
containerChefUserNamePost.classList = 'containerChefUserNamePost';
imageChefOldPost.classList = 'imageChefOldPost';
imageChefOldPost.alt = 'Imagen de un chef';
imageChefOldPost.title = 'Usuario';
userNameOldPost.classList = 'userNameOldPost';
showOldPost.classList = 'showOldPost';
containerImageOldPost.classList = 'containerImageOldPost';
buttonLikePost.classList = 'buttonLikePost';
buttonLikePost.alt = 'Imagen de un taco con manos';
buttonLikePost.title = 'Dale like';
buttonEditPost.classList = 'buttonEditPost';
buttonEditPost.alt = 'Imagen de un recetario';
buttonEditPost.title = 'Edita tu publicación';
buttonDelatePost.classList = 'buttonDelatePost';
buttonDelatePost.alt = 'Imagen de un cuaderno y un bote de basura';
buttonDelatePost.title = 'Eliminar publicación';
containerBackWall.classList = 'containerBackWall';
buttonBackWall.classList = 'buttonBackWall';
buttonBackWall.alt = 'Imagen de un letrero de cerrado';
buttonBackWall.title = 'Cerrar sesión';

imageLogo.src = './image/logotaco.png';
welcomeToWall.textContent = `¡Hola, Bienvenid@ ${userName.value}!`;
imageChef.src = './image/chef.png';
askToPost.textContent = 'Comparte tus recetas o recomendaciones';
inputPost.placeholder = 'Escribe aquí tus recomendaciones o recetas';
buttonPost.src = './image/libro-de-recetas.png';
errorMessagePost.textContent = '';
imageChefOldPost.src = './image/chef1.png';
userNameOldPost.textContent = `${userName.value}`;
buttonLikePost.src = './image/tacoLike1.png';
buttonEditPost.src = './image/libro-de-recetas-1.png';
buttonDelatePost.src = './image/borrarPost1.png';
buttonBackWall.src = './image/cerrado1.png';

export const Wall = () => {
  buttonBackWall.addEventListener('click', () => {
    closed(auth)
      .then(() => {
        onNavigate('/');
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
      });
  });

  

  buttonPost.addEventListener('click', () => {
    // let post = inputPost.value;
    // console.log(post);
    savePost(inputPost.value)
      .then(() => {
        inputPost.value = '';
      })
      .catch((error) => {
        console.log(error);
      });
  });

  headerWall.appendChild(imageLogo);
  containerWritePost.append(
    imageChef,
    askToPost,
    inputPost,
    buttonPost,
    errorMessagePost,
  );

  containerImageOldPost.append(buttonLikePost, buttonEditPost, buttonDelatePost);
  containerChefUserNamePost.append(imageChefOldPost, userNameOldPost);
  containerOldPost.append(containerChefUserNamePost, showOldPost, containerImageOldPost);
  mainWall.append(welcomeToWall, containerWritePost, containerOldPost);
  sectionWall.append(headerWall, mainWall, buttonBackWall);
  return sectionWall;
};
