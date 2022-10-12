/* eslint-disable max-len */
import {
  getAuth, signOut, signInWithEmailAndPassword, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider,
} from 'https://www.gstatic.com/firebasejs/9.9.4/firebase-auth.js';
import { onNavigate } from '../main.js';
import { app } from './config.js';

const auth = getAuth(app);

export const guardarUssuario = (email, password) => createUserWithEmailAndPassword(auth, email, password);

export const providerGoogle = new GoogleAuthProvider();

export const loginGoogle = () => {
  signInWithPopup(auth, providerGoogle)

    .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      console.log(user.email);
    // ...
    }).catch((error) => {
    // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;

      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
    });
};

// retorno implicito sin llaves {}

// .then promesa .catch manejo de excepciones

export const signWithEmailPassword = (email, password) => signInWithEmailAndPassword(auth, email, password);

export const logOut = () => {
  const auth = getAuth();
  signOut(auth).then(() => {
    onNavigate('/');
  }).catch((error) => {
  // An error happened.
  });
};
