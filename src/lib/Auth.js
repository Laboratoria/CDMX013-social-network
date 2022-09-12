/* eslint-disable no-shadow */
/* eslint-disable no-undef */
/* eslint-disable import/no-unresolved */
/* eslint-disable max-len */
import {
  getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithRedirect, getRedirectResult, GithubAuthProvider,
} from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-auth.js';
import { app } from './config.js';

const auth = getAuth(app);
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
