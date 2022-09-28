/* eslint-disable max-len */
import { getAuth, createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-auth.js';
import { app } from './config.js';

const auth = getAuth();

export const guardarUssuario = (email, password) => createUserWithEmailAndPassword(auth, email, password);
