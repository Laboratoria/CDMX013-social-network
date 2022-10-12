// eslint-disable-next-line import/no-unresolved
import { addDoc, collection, getFirestore } from 'https://www.gstatic.com/firebasejs/9.9.4/firebase-firestore.js';
import { app } from './config.js';

// inicializar firestore
const db = getFirestore(app);

export const savePost = async (inputPost) => {
  try {
    const docRef = await addDoc(collection(db, 'post'), {
      comentario: inputPost,
    });
    console.log('Document written with ID: ', docRef.id);
  } catch (error) {
    console.error('Error adding document: ', error);
  }
};
