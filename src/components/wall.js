export const Wall = () => {
  const div = document.createElement('div');
  const title = document.createElement('h2');

  div.classList.add('container-register');

  title.textContent = 'Wall';
  title.classList = ('postalkr');

  // eslint-disable-next-line max-len
  div.append(title);

  return div;
};
