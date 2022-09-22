import {
  getFirestore, collection, addDoc/* , getDocs */, onSnapshot, query, orderBy, serverTimestamp,
} from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-firestore.js';
import { getAuth } from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-auth.js';
import { app } from './config.js';

const db = getFirestore(app);
const q = query(collection(db, 'posts'), orderBy('time', 'desc'));

export const savePost = (post) => {
  const auth = getAuth();
  const user = auth.currentUser;
  return addDoc(collection(db, 'posts'), {
    post, uid: user.uid, email: user.email, time: serverTimestamp(), likes: [],
  });
};

export const onGetPosts = (callback) => onSnapshot(q, callback);
