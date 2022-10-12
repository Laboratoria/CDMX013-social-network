import { savePost } from '../firebase/post.js';

export const MakePost = () => {
  const div = document.createElement('div');
  const boxtext = document.createElement('input');
  const buttonComent = document.createElement('button');

  buttonComent.textContent = 'Comentar';
  boxtext.classList = 'boxtext';
  // crear un boton
  // agregar un evento al boton
  // ejercuart la funcion de guardar post

  buttonComent.classList = ('buttonComent');
  // savePost();

  buttonComent.addEventListener('click', () => {
    savePost(boxtext.value);
  });

  div.append(boxtext, buttonComent);
  return div;
};
