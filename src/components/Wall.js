import { logOut } from '../firebase/auth.js';
import { MakePost } from './MakePost.js';
import { getPost } from '../firebase/post.js';

export const Wall = () => {
  const div = document.createElement('div');
  const title = document.createElement('h2');
  const exit = document.createElement('button');
  const containerPosts = document.createElement('div');
  div.classList.add('container-register');
  exit.classList = 'exit';

  getPost((recorre) => {
    containerPosts.innerHTML = "";
    recorre.forEach((doc) => {
      console.log(doc.id, '=>', doc.data());
      const post = doc.data();
      const contenidoPost = document.createElement('p');
      contenidoPost.textContent = post.mensaje;
      contenidoPost.classList = 'text'
      console.log(post);

      containerPosts.append(contenidoPost);
    });
  });

  title.textContent = 'Wall';
  title.classList = ('postalkr');
  // eslint-disable-next-line max-len
  div.append(title, exit, MakePost(), containerPosts);

  exit.addEventListener('click', () => {
    logOut();
  });

  // funcion que recibe el snapshot ( como argumento una funcion que s encargue de tomar snapshot y utilizarla )
  return div;
};

// como pintar comentario 2 vias: hacer un nuevo elemento y eso vincularlo con la funcion, hacer un nuevo div
// hacer una condicional para que asocie el usuario con el mensaje y que aparezca arriba (fecha, manera ordenada)
//
