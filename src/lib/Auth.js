/* eslint-disable no-shadow */
/* eslint-disable no-undef */
/* eslint-disable import/no-unresolved */
/* eslint-disable max-len */
import {
  getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithRedirect,
  getRedirectResult, GithubAuthProvider, signOut, updateProfile,
} from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-auth.js';
import { app } from './config.js';

const auth = getAuth(app);
export const user = auth.currentUser;
/* if (user !== null) {
  // The user object has basic properties such as display name, email, etc.

  console.log(user.displayName);
}

//export const displayName = user.displayName; */

// CREATE USER WITH EMAIL AND PASSWORD
export const newUser = (inputmailValue, inputpasswordValue) => createUserWithEmailAndPassword(auth, inputmailValue, inputpasswordValue);
// LOGIN WITH EMAIL AND PASSWORD
export const loginUser = (inputmailValue, inputpasswordValue) => signInWithEmailAndPassword(auth, inputmailValue, inputpasswordValue);
// LOGIN WITH GOOGLE
export const providerGoogle = new GoogleAuthProvider();
export const singIn = (providerGoogle) => signInWithRedirect(auth, providerGoogle);
export const resultRedirect = () => getRedirectResult(auth);
export const credential = (result) => provider.credentialFromResult(result);
// LOGIN WITH GITHUB
export const providerGithub = new GithubAuthProvider();
export const signInWithGithub = (providerGithub) => signInWithRedirect(auth, providerGithub);
// SIGNOUT
export const signoutPage = () => signOut(auth);
// ADD USER NAME
export const updateInfo = (name) => updateProfile(auth.currentUser, {
  displayName: name,
}).then(() => {
  // Profile updated!
  // ...
  console.log('name updated');
}).catch((error) => {
  // An error occurred
  // ...
  console.log('no name');
});
