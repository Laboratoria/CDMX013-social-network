/* eslint-disable import/no-unresolved */
/* eslint-disable max-len */
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-auth.js';
import { app } from './config.js';

const auth = getAuth(app);

export const newUser = (inputmailValue, inputpasswordValue) => createUserWithEmailAndPassword(auth, inputmailValue, inputpasswordValue);
export const loginUser = (inputmailValue, inputpasswordValue) => signInWithEmailAndPassword(auth, inputmailValue, inputpasswordValue);
