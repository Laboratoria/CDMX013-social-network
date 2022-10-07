import { savePost } from '../firebase/post.js';

export const MakePost = () => {
  const div = document.createElement('div');
  const input = document.createElement('input');
  const buttonComent = document.createElement('button');
  // crear un boton
  // agregar un evento al boton
  // ejercuart la funcion de guardar post

  buttonComent.classList = ('buttonComent');
  savePost();

  buttonComent.addEventListener('click', () => {
    savePost();
  });

  div.append(input, buttonComent);
  return div;
};
