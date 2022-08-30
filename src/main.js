import { welcome } from './Components/Welcome.js';
// import { register } from './Components/Register.js';

welcome();
// register();

const root = document.querySelector('#root');

const routes = {
  '/': welcome,
  // '/register': register,
};

const onNavigate = (pathname) => {
  window.history.pushState(
    {},
    pathname,
    window.location.origin + pathname,
  );
  root.appendChild(routes[pathname]());
};

const component = routes[window.location.pathname];
root.appendChild(component());
