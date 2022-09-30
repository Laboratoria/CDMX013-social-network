import { newUser } from '../lib/Auth.js';
import { onNavigate } from '../main.js';

export const createUser = (inputmailValue, inputpasswordValue) => {
  newUser(inputmailValue, inputpasswordValue)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      onNavigate('/home');
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
};
