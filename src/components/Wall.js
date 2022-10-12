import { logOut } from '../firebase/auth.js';
import { MakePost } from './MakePost.js';
import { getPost, deletePost } from '../firebase/post.js';

export const Wall = () => {
  const div = document.createElement('div');
  const title = document.createElement('h2');
  const exit = document.createElement('button');
  const containerPosts = document.createElement('div');
  const welcome = document.createElement('Bienvenido');

  div.classList.add('container-register');
  exit.classList = 'exit';

  welcome.textContent = 'Bienvenido';
  welcome.classList = 'welcome';

  title.textContent = 'Postalk';
  title.classList = ('postalkr');
  // eslint-disable-next-line max-len
  div.append(title, exit, MakePost(), containerPosts, welcome);

  exit.addEventListener('click', () => {
    logOut();
  });

  getPost((recorre) => {
    containerPosts.innerHTML = '';
    recorre.forEach((doc) => {
      console.log(doc.id, '=>', doc.data());
      const post = doc.data();
      const contenidoPost = document.createElement('p');
      contenidoPost.textContent = post.mensaje;
      contenidoPost.classList = 'contenidoPost';
      containerPosts.classList = 'cajadecontenido'; // div
      post.classList = 'post';
      console.log(post);

      const buttonDelete = document.createElement('button');
      buttonDelete.textContent = 'Borrar';
      buttonDelete.classList = 'buttonDelete';
      buttonDelete.addEventListener('click', async () => {
        await deletePost(doc.id);
      });
      containerPosts.append(contenidoPost, buttonDelete);
    });
  });

  // funcion que recibe el snapshot ( como argumento una funcion que s encargue de tomar snapshot y utilizarla )
  return div;
};

// como pintar comentario 2 vias: hacer un nuevo elemento y eso vincularlo con la funcion, hacer un nuevo div
// hacer una condicional para que asocie el usuario con el mensaje y que aparezca arriba (fecha, manera ordenada)
//
