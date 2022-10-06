// Import the functions you need from the SDKs you need
// eslint-disable-next-line import/no-unresolved
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
// eslint-disable-next-line import/no-unresolved
} from 'https://www.gstatic.com/firebasejs/9.9.4/firebase-auth.js';
import { firebaseApp } from './config.js';
import { onNavigate } from '../main.js';

// Initialize Firebase
const auth = getAuth(firebaseApp);

// eslint-disable-next-line max-len
export const creatAnAccount = (email, password) => createUserWithEmailAndPassword(auth, email, password);

export const signEmailPass = (email, password) => signInWithEmailAndPassword(auth, email, password);

const provider = new GoogleAuthProvider();
export const signWithGoogle = () => signInWithPopup(auth, provider)
  .then((result) => {
    console.log('inicié sesión');
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    onNavigate('/wall');
    // ...
  }).catch((error) => {
    console.log(error);
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
