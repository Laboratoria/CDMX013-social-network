import { onNavigate } from '../main.js';
// import { userName } from './Register.js';
import { closed, auth } from '../lib/auth.js';
// eslint-disable-next-line import/named
import {
  postDocument, postOnWall, deletePost, getPost, updatePost,
} from '../lib/store.js';
// eslint-disable-next-line import/order, import/no-unresolved
import { getAuth, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/9.12.1/firebase-auth.js';

export const Wall = () => {
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
  buttonPost.alt = 'Imagen de un recetario';
  buttonPost.title = 'Publicar';
  errorMessagePost.classList = 'errorMessagePost';
  containerOldPost.classList = 'containerOldPost';
  containerBackWall.classList = 'containerBackWall';
  buttonBackWall.classList = 'buttonBackWall';
  buttonBackWall.alt = 'Imagen de un letrero de cerrado';
  buttonBackWall.title = 'Cerrar sesión';
  imageLogo.src = './image/logotaco.png';
  welcomeToWall.textContent = `¡Hola, Bienvenid@! ${auth.currentUser.displayName}`;
  imageChef.src = './image/chef.png';
  askToPost.textContent = 'Comparte tus recetas o recomendaciones';
  inputPost.placeholder = 'Escribe aquí tus recomendaciones o recetas';
  buttonPost.src = './image/libro-de-recetas.png';
  errorMessagePost.textContent = '';
  buttonBackWall.src = './image/cerrado1.png';

  const user = auth.currentUser;
  // userNameOldPost = user.displayName;
  // console.log(userNameOldPost);
  // console.log(user);
  onAuthStateChanged(getAuth(), () => {
    if (user) {
      const name = user.displayName;
      const email = user.email;
      const userID = user.uid;
    }
    if (user === null) {
      onNavigate('/');
      console.log('no hay usuarios activos');
    }
  });

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
    postDocument(inputPost.value, user)
      .then(() => {
        inputPost.value = '';
      })
      .catch((error) => {
        console.log(error);
      });
  });

  // lee de la base de datos, los posts = []
  postOnWall((querySnapshot) => {
    console.log('ejecucion de post on wall');

    containerOldPost.innerHTML = '';
    // querysnap es una lista de todos mis posts
    querySnapshot.forEach((doc) => {
      // const post = doc.data();
      console.log(doc.id);

      const postContainer = document.createElement('div');
      postContainer.classList = 'postContainer';

      const docId = document.createAttribute('data-id');
      docId.value = doc.id;
      postContainer.setAttributeNode(docId);

      // primer bloque del post
      const containerChefUserNamePost = document.createElement('section');
      containerChefUserNamePost.classList = 'containerChefUserNamePost';

      // imagen que va en el primer bloque del post
      const imageChefOldPost = document.createElement('img');
      imageChefOldPost.classList = 'imageChefOldPost';
      imageChefOldPost.alt = 'Imagen de un chef';
      imageChefOldPost.title = 'Usuario';
      imageChefOldPost.src = './image/chef1.png';

      // segundo blolque que va en el post
      const userNameOldPost = document.createElement('p');
      userNameOldPost.classList = 'userNameOldPost';
      userNameOldPost.textContent = `${auth.currentUser.displayName}`;

      // texto del post
      const showOldPost = document.createElement('textarea');
      showOldPost.classList = 'showOldPost';
      showOldPost.textContent = doc.data().post;

      // bloque de like, edit, borrar
      const buttonLikePost = document.createElement('img');
      buttonLikePost.classList = 'buttonLikePost';
      buttonLikePost.alt = 'Imagen de un taco con manos';
      buttonLikePost.title = 'Dale like';
      buttonLikePost.src = './image/tacoLike1.png';

      const buttonEditPost = document.createElement('img');
      buttonEditPost.classList = 'buttonEditPost';
      buttonEditPost.alt = 'Imagen de un recetario';
      buttonEditPost.title = 'Edita tu publicación';
      buttonEditPost.src = './image/libro-de-recetas-1.png';

      // const buttonEditPosts = document.querySelectorAll('.buttonEditPost');
      // buttonEditPosts.forEach((btn) => {
      //   btn.addEventListener('click', async (e) => {
      //     const doc = await getPost(e.target.dataset.id);
      //     console.log(doc);
      //     // const post = doc.data();

      //     // modalEditContainer.showModal();
      //     showOldPost.value = doc.data().post;
      //     // editStatus = true;

      //     // cancelEditButton.addEventListener('click', () => {
      //     //   modalEditContainer.close();
      //     // });
      //     // acceptEditButton.addEventListener('click', () => {
      //     //   editStatus = true;
      //     const newInput = showOldPost.value;
      //     console.log(doc.id);
      //     updatePost(doc.id, newInput);
      //     // modalEditContainer.close();
      //     // editStatus = false;
      //   });
      // });

      const buttonDeletePost = document.createElement('img');
      buttonDeletePost.classList = 'buttonDeletePost';
      buttonDeletePost.alt = 'Imagen de un cuaderno y un bote de basura';
      buttonDeletePost.title = 'Eliminar publicación';
      buttonDeletePost.src = './image/borrarPost1.png';

      // console.log(auth.currentUser.uid, user.uid);
      // if (auth.currentUser.uid === user.uid) {
      buttonDeletePost.addEventListener('click', async () => {
        await deletePost(doc.id);
      });
      // };

      const containerImageOldPost = document.createElement('section');
      containerImageOldPost.classList = 'containerImageOldPost';
      containerImageOldPost.append(buttonLikePost, buttonEditPost, buttonDeletePost);

      containerChefUserNamePost.append(imageChefOldPost, userNameOldPost);
      postContainer.append(containerChefUserNamePost, showOldPost, containerImageOldPost);
      containerOldPost.appendChild(postContainer);

      console.log(postContainer);
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

  mainWall.append(welcomeToWall, containerWritePost, containerOldPost);

  sectionWall.append(headerWall, mainWall, buttonBackWall);
  return sectionWall;
};
