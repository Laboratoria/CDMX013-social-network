// eslint-disable-next-line import/no-unresolved
// eslint-disable-next-line import/no-unresolved
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
// eslint-disable-next-line import/no-unresolved
} from 'https://www.gstatic.com/firebasejs/9.12.1/firebase-auth.js';
import { onNavigate } from '../main.js';
import { app } from './config.js';

// Initialize Firebase
export const auth = getAuth(app);

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
    console.log('no inicié sesión', error);
    // ...
  });

export const closed = () => (signOut(auth));

export const getUserState = () => onAuthStateChanged(auth, (user) => {
  if (user !== null) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const name = user.displayName;
    const email = user.email;
    const userID = user.uid;
    // ...
  } else {
    // User is signed out
    // ...
  }
});
