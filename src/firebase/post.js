import { collection, addDoc, getFirestore } from 'https://www.gstatic.com/firebasejs/9.9.4/firebase-firestore.js';
import { app } from './config.js';

const db = getFirestore(app);

export const savePost = async () => {
  const docRef = await addDoc(collection(db, 'post'), {
    mensaje: 'Hola hoy desayune quesadilla',
  });
  console.log('Document written with ID: ', docRef.id);
};
// firestore es una base de datos no relacional
//
