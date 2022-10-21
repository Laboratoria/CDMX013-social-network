// eslint-disable-next-line import/no-unresolved
import {
  getFirestore,
  deleteDoc,
  doc,
  serverTimestamp,
  addDoc,
  collection,
  query,
  getDocs,
  updateDoc,
  getDoc,
  onSnapshot,
  limit,
  orderBy,
// eslint-disable-next-line import/no-unresolved
} from 'https://www.gstatic.com/firebasejs/9.12.1/firebase-firestore.js';
import { app } from './config.js';

// inicializar firestore
const db = getFirestore(app); // conexión a la base de datos

export const postDocument = async (inputPost, user) => {
  try {
    const docRef = await addDoc(collection(db, 'postDocument'), {
      post: inputPost,
      time: serverTimestamp(),
      name: user.displayName,
      likes: [],
      userID: user.uid,
      email: user.email,
    });
    console.log('Document written with ID: ', docRef.id);
  } catch (error) {
    console.error('Error adding document: ', error);
  }
 //  console.log(postDocument);
};

const q = query(collection(db, 'postDocument'), orderBy('time', 'desc'), limit(10));
export const postOnWall = (callback) => onSnapshot(q, callback);

// export const deletePost = async (id) => {
//   await deleteDoc(doc(db, 'postDocument', id));
// };
export const deletePost = (id) => deleteDoc(doc(db, 'postDocument', id));

export const getPost = (id) => getDoc(doc(db, 'postDocument', id));

export const updatePost = (id, newFields) => updateDoc(doc(db, 'postDocument', id), { post: newFields });