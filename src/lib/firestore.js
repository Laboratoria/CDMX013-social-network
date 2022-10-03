
//************************* REVISAR LO DE ABAJO ES UNA COPIA DE AUTH NO ESTA BIEN

// Import the functions you need from the SDKs you need
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.9.4/firebase-app.js';
import { getAuth, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/9.9.4/firebase-auth.js';
import { getFirestore } from 'https://www.gstatic.com/firebasejs/9.9.4/firebase-firestore.js';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCUlTyDsJ3_FePNZxlaCaFoH1EOHaI68ac",
  authDomain: "red-social-f550f.firebaseapp.com",
  projectId: "red-social-f550f",
  storageBucket: "red-social-f550f.appspot.com",
  messagingSenderId: "87662621372",
  appId: "1:87662621372:web:9d837aa93e5a8eaabb16b9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

const dataBase = getFirestore(app);