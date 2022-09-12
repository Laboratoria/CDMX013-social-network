import { welcome } from './Components/Welcome.js';
import { register } from './Components/Register.js';
import { home } from './Components/Home.js';
import { login } from './Components/Login.js';
import { getAuth, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-auth.js';

// welcome();
// register();
const root = document.querySelector('#root');

const routes = {
  '/': welcome,
  '/register': register,
  '/login':login,
  '/home': home,
};

export const onNavigate = (pathname) => {
  window.history.pushState(
    {},
    pathname,
    window.location.origin + pathname,
  );
  root.removeChild(root.firstChild);
  root.appendChild(routes[pathname]());
};
 
const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (user) {
    onNavigate('/home');
  } else {
    onNavigate('/');
  }
});

const component = routes[window.location.pathname];
root.appendChild(component());
