import {
  getFirestore, collection, addDoc/* , getDocs */, onSnapshot, query, orderBy, serverTimestamp
} from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-firestore.js';
import { app } from './config.js';

const db = getFirestore(app);
const q = query(collection(db, 'posts'), orderBy('time',"desc"));

export const savePost = (post, name, email) => addDoc(collection(db, 'posts'), { post, name, email, time : serverTimestamp()});

export const onGetPosts = (callback) => onSnapshot(q, callback);

