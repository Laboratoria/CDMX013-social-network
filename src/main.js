import { getAuth, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/9.9.4/firebase-auth.js';
import { Welcome } from './components/Welcome.js';
import { Login } from './components/Login.js';
import { Register } from './components/Register.js';

import { Wall } from './components/wall.js';


const auth = getAuth();


const root = document.getElementById('root');
const routes = {
  '/': Welcome,
  '/login': Login,
  '/register': Register,
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

const component = routes[window.location.pathname];

window.onpopstate = () => {
  root.removeChild(root.firstChild);
  root.append(component());
};

onAuthStateChanged(auth, (user) => {
  if (user) {
    onNavigate('/wall');
  } else {
    onNavigate('/');
  }
});

root.appendChild(component());
