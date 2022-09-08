
export function login() {
    // Container for main and footer
      const fatherOfAll = document.createElement('div');
      // Creates main
      const mainContainer = document.createElement('main');
      // Div Register IMG, TXT
      const registerDiv = document.createElement('div');
      registerDiv.setAttribute('class', 'registerDiv');
      // Img Confetti
      const registerImg = document.createElement('img');
      registerImg.setAttribute('class', 'confetti-img');
      registerImg.src = './img/confetti.jpg';
      // Create Account Text
      const titleCreateAccount = document.createElement('h2');
      titleCreateAccount.setAttribute('class', 'create-account');
      titleCreateAccount.innerHTML = 'Create Account';
      // Join Us Text
      const joinUsText = document.createElement('p');
      joinUsText.setAttribute('class', 'join-text');
      joinUsText.innerHTML = 'Join us and share your healthy lifestyle';
    return fatherOfAll;
}

