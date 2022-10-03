// Import the functions you need from the SDKs you need
// eslint-disable-next-line import/no-unresolved
import { getAuth, createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.9.4/firebase-auth.js';
import { firebaseApp } from './config.js';


// Initialize Firebase
const auth = getAuth(firebaseApp);

// eslint-disable-next-line max-len
export const creatAnAccount = (email, password) => createUserWithEmailAndPassword(auth, email, password);
 

