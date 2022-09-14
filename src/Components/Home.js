import { signoutPage } from '../lib/Auth.js';
 
/* eslint-disable space-before-blocks */
export function home(){
      // Father container
      const fatherOfAll = document.createElement('div');
      // Header
      const headerFeed = document.createElement('header');
      headerFeed.setAttribute('class','header-feed');
      //IMG LOGO GYM
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
      //IMG background
      const background = document.createElement('img');
      background.setAttribute('class', 'background-feed');
      background.src = '../img/background.jpg';
      //Create Div feed tittle and icon
      const helloDiv = document.createElement('div');
      helloDiv.setAttribute('class','hello-div');
        // Create text for home view
        const welcomeTxt = document.createElement('h2');
        welcomeTxt.textContent = 'Hello';
        welcomeTxt.setAttribute('class', 'feed-title');
        //IMG icon
      const iconGym = document.createElement('img');
      iconGym.setAttribute('class', 'icon-feed');
      iconGym.src = '../img/icon.png';
      helloDiv.append(welcomeTxt,iconGym);
        // Text
        const questionText = document.createElement('p');
        questionText.setAttribute('class', 'question-feed');
        questionText.textContent = 'What´s going on?'
        mainContainer.append(background, helloDiv, questionText);
        fatherOfAll.append(headerFeed,mainContainer);
      
    // evento click cerrar sesion
    logOut.addEventListener('click', () => {
    
      signoutPage().then(() => {
        // Sign-out successful.
        console.log('si cerro');
      }).catch((error) => {
        // An error happened.
      });
      
  });
    return fatherOfAll;
  }

