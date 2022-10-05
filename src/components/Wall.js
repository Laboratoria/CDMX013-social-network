import { logOut } from '../firebase/auth.js';

export const Wall = () => {
  const div = document.createElement('div');
  const title = document.createElement('h2');
  const exit = document.createElement('button');
  div.classList.add('container-register');
  exit.classList = ('exit');

  title.textContent = 'Wall';
  title.classList = ('postalkr');
  // eslint-disable-next-line max-len
  div.append(title, exit);

  exit.addEventListener('click', () => {
    logOut();
  });

  return div;
};
