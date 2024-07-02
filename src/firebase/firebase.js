// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB8n9nJYFqQ6jYkMxeT6GvQB2qOo1ZYdG0",
  authDomain: "todo-app-6fdfc.firebaseapp.com",
  projectId: "todo-app-6fdfc",
  storageBucket: "todo-app-6fdfc.appspot.com",
  messagingSenderId: "248882612339",
  appId: "1:248882612339:web:690f6f22be2af93ad70206",
  measurementId: "G-J9P51YCXJM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
export { db };
