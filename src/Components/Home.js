import { signoutPage } from '../lib/Auth.js';
 
/* eslint-disable space-before-blocks */
export function home(){
  // Father container
  const fatherOfAll = document.createElement('div');
  // Create img for home view
  const homeImg = document.createElement('img');
  homeImg.src = '../img/confetti.jpg';
  homeImg.setAttribute('class', 'home-img');
  // Create text for home view
  const welcomeTxt = document.createElement('h2');
  welcomeTxt.textContent = 'Welcome';
  welcomeTxt.setAttribute('class', 'welcome-title');
  // Create logout icon
  const logOut = document.createElement('img');
  logOut.src = '../img/switch.png';
  logOut.setAttribute('class', 'log-out');
  fatherOfAll.append(homeImg, welcomeTxt, logOut);
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
