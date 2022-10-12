import {
  collection, onSnapshot, addDoc, getFirestore, deleteDoc, doc,
} from 'https://www.gstatic.com/firebasejs/9.9.4/firebase-firestore.js';

import {
  getAuth, onAuthStateChanged,
} from 'https://www.gstatic.com/firebasejs/9.9.4/firebase-auth.js';

import { app } from './config.js';

const auth = getAuth(app);

const db = getFirestore(app);
let uid = '';

onAuthStateChanged(auth, (user) => {
  if (user) {
    uid = user.uid;
    // console.log(uid);
    // ...
  } else {
  }
});

export const savePost = async (textPost) => {
  const docRef = await addDoc(collection(db, 'post'), {
    mensaje: textPost,
    uid,
  });
  // console.log('Document written with ID: ', docRef.id);
};
// firestore es una base de datos no relacional
//
export const getPost = (callback) => {
  onSnapshot(
    collection(db, 'post'),
    callback,
  );
};

export const deletePost = async (id) => {
  await deleteDoc(doc(db, 'post', id));
};
// todo lo del CRUD aquí

// export const getPost = (callback) => onSnapshot (collection(db,'post'), callback);
