
export function login() {
    // Container for main and footer
      const fatherOfAll = document.createElement('div');
      // Creates main
      const mainContainer = document.createElement('main');
      // Div Login IMG, TXT
      const loginDiv = document.createElement('div');
      loginDiv.setAttribute('class', 'loginDiv');
      // Img Confetti
      const loginImg = document.createElement('img');
      loginImg.setAttribute('class', 'confetti-img');
      loginImg.src = './img/confetti.jpg';
      // Login Text
      const titleLogin = document.createElement('h2');
      titleLogin.setAttribute('class', 'login-title');
      titleLogin.innerHTML = 'Login';
      // Welcome Text
      const welcomeText = document.createElement('p');
      welcomeText.setAttribute('class', 'welcome-text');
      welcomeText.innerHTML = 'Welcome! Please enter your details';
     
      loginDiv.append(loginImg,titleLogin,welcomeText);

      const formContainer= document.createElement('div');
      formContainer.setAttribute('class', 'login-container');
      // Login Form
      const loginForm = document.createElement('form');
      loginForm.setAttribute('class', 'form-login');
      // Mail
      const labelMail = document.createElement('label');
      labelMail.setAttribute('for', 'mail');
      labelMail.textContent = 'Mail';
      const inputMail = document.createElement('input');
      inputMail.setAttribute('type', 'email');
      inputMail.setAttribute('id', 'mail');
      inputMail.setAttribute('required', 'required');
      // Password
      const labelPassword= document.createElement('label');
      labelPassword.setAttribute('class','passLogin');
      labelPassword.setAttribute('for', 'password');
      labelPassword.textContent = 'Password';
      const inputPassword = document.createElement('input');
      inputPassword.setAttribute('type', 'text');
      inputPassword.setAttribute('id', 'password');
      inputPassword.setAttribute('required', 'required');
      // aler msg
      const alertMsg = document.createElement('p');
      alertMsg.textContent = 'Password must have 6 characters length';
      alertMsg.setAttribute('id', 'alert-msg');
      // Login btn
      const btnLogin = document.createElement('button');
      btnLogin.textContent = 'Login';
      btnLogin.setAttribute('class', 'login');
      btnLogin.setAttribute('type', 'submit');
      btnLogin.setAttribute('value', 'submit');

      // Footer
      const loginFooter = document.createElement('footer');
      const footerText = document.createElement('p');
      footerText.setAttribute('class', 'footer-text');
      footerText.textContent = 'Or login with...';
      //logo google IMG
      const  logoGoogle= document.createElement('img');
      logoGoogle.setAttribute('class', 'login-google');
      //loginGoogle.src = './img/confetti.jpg';

      //logo twitter IMG
      const  logoTwitter= document.createElement('img');
      logoTwitter.setAttribute('class', 'login-Twitter');
      //logiTwitter.src = './img/confetti.jpg';

      // Insert footer text
     loginFooter.append(footerText, logoGoogle,logoTwitter );
     // Insert form elements
     // eslint-disable-next-line max-len
     loginForm.append( labelMail, inputMail, labelPassword, inputPassword, alertMsg,  btnLogin );
     formContainer.append(loginForm);
     // Insert everything to main
     mainContainer.append(loginDiv, formContainer);
     // Inser to div father of all
     fatherOfAll.append(mainContainer, loginFooter);
     

    return fatherOfAll;
}

