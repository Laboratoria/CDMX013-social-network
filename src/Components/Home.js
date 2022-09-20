import { signoutPage } from '../lib/Auth.js';
import { savePost, onGetPosts } from '../lib/Store.js';
import { getAuth,onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-auth.js';
/* eslint-disable space-before-blocks */
export function home(){
  // Father container
  const fatherOfAll = document.createElement('div');
  fatherOfAll.setAttribute('class', 'fatherOfAll-feed');
  const background = document.createElement('img');
  background.setAttribute('class', 'background-feed');
  background.src = '../img/background.jpg';
  // Header
  const headerFeed = document.createElement('header');
  headerFeed.setAttribute('class', 'header-feed');
  // IMG LOGO GYM
  const logoGym = document.createElement('img');
  logoGym.setAttribute('class', 'logogym-feed');
  logoGym.src = '../img/logo.png';
  // Create logout icon
  const logOut = document.createElement('img');
  logOut.src = '../img/power-off.png';
  logOut.setAttribute('class', 'log-out');
  headerFeed.append(logoGym, logOut);
  // Creates main
  const mainContainer = document.createElement('main');
  mainContainer.setAttribute('class', 'main-feed');
  /* // IMG background */

  // container Hello
  const containerHello = document.createElement('div');
  containerHello.setAttribute('class', 'containerhello-div');
  // Create Div feed tittle and icon
  const helloDiv = document.createElement('div');
  helloDiv.setAttribute('class', 'hello-div');
  // Create text for home view
  const welcomeTxt = document.createElement('div');
  welcomeTxt.textContent = 'Hello';
  welcomeTxt.setAttribute('class', 'feed-title');
  // IMG icon
  const iconGym = document.createElement('img');
  iconGym.setAttribute('class', 'icon-feed');
  iconGym.src = '../img/icon.png';
  // Text
  const questionText = document.createElement('div');
  questionText.setAttribute('class', 'question-feed');
  questionText.textContent = 'What´s going on?';
  helloDiv.append(welcomeTxt, iconGym);
  containerHello.append(helloDiv, questionText);
  // feed Container
  const feedContainer = document.createElement('div');
  feedContainer.setAttribute('id', 'feed');

  // Div new Post
  const postDiv = document.createElement('div');
  postDiv.setAttribute('class', 'post-input');
  // Div input
  const inputDiv = document.createElement('div');
  inputDiv.setAttribute('class', 'input-feed');
  // Img input
  const inputImg = document.createElement('img');
  inputImg.src = '../img/user-img.png';
  inputImg.setAttribute('class', 'userimg-feed');
  // input
  const createPost = document.createElement('input');
  createPost.setAttribute('type', 'text');
  createPost.setAttribute('placeholder', 'Ask to your partner...');
  createPost.setAttribute('class', 'newpost-feed');
  createPost.setAttribute('id', 'inputpost-feed');
  // icon
  const writeIcon = document.createElement('img');
  writeIcon.src = '../img/write-icon.png';
  writeIcon.setAttribute('class', 'writeicon-feed');
  inputDiv.append(inputImg, createPost, writeIcon);
  // Container button
  const containerButton = document.createElement('div');
  containerButton.setAttribute('class', 'containerbutton-feed');
  // Container divs post
  const containerDivs = document.createElement('div');
  containerDivs.setAttribute('class', 'container-posts');
  // share button
  const shareButton = document.createElement('button');
  shareButton.setAttribute('class', 'sharebutton-feed');
  shareButton.textContent = 'share';

  let allPost = [];
  let userName;
  let userEmail;
  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      userName = auth.currentUser.displayName;
      auth.currentUser.providerData.forEach((profile) => {
        userName = profile.displayName;
        userEmail = profile.email;
      });
      console.log(userName, userEmail);
    } else {
      console.log('not working');
    }
  });

  onGetPosts((querySnapshot) => {
    allPost = [];
    // containerDivs.remove();
    querySnapshot.forEach((doc) => {
      const post = doc.data();
      allPost.push(post);
    });

    let child = containerDivs.lastElementChild;
    while (child) {
      containerDivs.removeChild(child);
      child = containerDivs.lastElementChild;
    }

    allPost.forEach((post) => {
      const postContainer = document.createElement('div');
      postContainer.setAttribute('class', 'post-feed');
      postContainer.textContent = post.post;
      containerDivs.appendChild(postContainer);
    });
  });

  console.log(allPost);
  feedContainer.append(postDiv,containerDivs);
  containerButton.appendChild(shareButton);
  postDiv.append(inputDiv, containerButton);
  mainContainer.append(containerHello, feedContainer);
  fatherOfAll.append(background, headerFeed, mainContainer);

  logOut.addEventListener('click', () => {
    signoutPage().then(() => {
      // Sign-out successful.
      console.log('si cerro');
    }).catch((error) => {
      // An error happened.
    });
  });

  shareButton.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('enviado');
    const inputPostValue = document.querySelector('#inputpost-feed').value;
    console.log(inputPostValue);
    savePost(inputPostValue);
    const newValue = document.querySelector('#inputpost-feed');
    newValue.value = '';
    //Aqui tenemos que lograr que el post que se guarde se relacione con el userName
    console.log('userName', userName);
  });

  
  return fatherOfAll;
}
