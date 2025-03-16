// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC9osJfMMutsNL5UWefwELx91hk_DbrdWk",
  authDomain: "friendsfirst-df874.firebaseapp.com",
  projectId: "friendsfirst-df874",
  storageBucket: "friendsfirst-df874.firebasestorage.app",
  messagingSenderId: "893161163165",
  appId: "1:893161163165:web:449136db1e76a083090774",
  measurementId: "G-WYE76BRNWJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };

