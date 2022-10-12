// eslint-disable-next-line import/no-unresolved
// eslint-disable-next-line import/no-unresolved
// import { getFirestore } from 'https://www.gstatic.com/firebasejs/9.9.4/firebase-firestore.js';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
// eslint-disable-next-line import/no-unresolved
} from 'https://www.gstatic.com/firebasejs/9.9.4/firebase-auth.js';
import { onNavigate } from '../main.js';
import {app} from './config.js';
// Initialize Firebase
export const auth = getAuth();

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




