import {getFirestore, collection, addDoc/*, getDocs*/,onSnapshot } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-firestore.js"
import { app } from './config.js';

const db = getFirestore(app);

export const savePost = (post) => 
    addDoc(collection(db,'posts'), {post});

//export const getTasks = () => getDocs(collection(db,'tasks'));

export const onGetPosts = (callback) => onSnapshot(collection(db,'posts'), callback);