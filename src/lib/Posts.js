import {
  getFirestore, collection, addDoc,
  onSnapshot, query, orderBy, serverTimestamp, updateDoc, doc,
  arrayUnion, arrayRemove, deleteDoc,
} from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-firestore.js';
import { getAuth } from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-auth.js';
import { app } from './Config.js';

const db = getFirestore(app);
const q = query(collection(db, 'posts'), orderBy('time', 'desc'));
// Create Post
export const savePost = (post) => {
  const auth = getAuth();
  const user = auth.currentUser;
  return addDoc(collection(db, 'posts'), {
    post, uid: user.uid, email: user.email, time: serverTimestamp(), likes: [],
  });
};

export const onGetPosts = (callback) => onSnapshot(q, callback);
// Add likes
export const addLikes = async (idPost) => {
  const auth = getAuth();
  const user = auth.currentUser;
  const likesRef = doc(db, 'posts', idPost);

  await updateDoc(likesRef, {
    likes: arrayUnion(user.uid),
  });
};
// Remove likes
export const removeLikes = async (idPost) => {
  const auth = getAuth();
  const user = auth.currentUser;
  const likesRef = doc(db, 'posts', idPost);

  await updateDoc(likesRef, {
    likes: arrayRemove(user.uid),
  });
};
// Delete post
export const deletePost = async (idPost) => {
  await deleteDoc(doc(db, 'posts', idPost));
};
// Edit post
export const editPost = async (idPost, editText) => {
  const docRef = doc(db, 'posts', idPost);
  await updateDoc(docRef, {
    post: editText,
  });
};

