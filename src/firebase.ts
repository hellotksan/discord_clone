// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore/lite";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAtlkK7DFAG23nBvQBZubTHK_UxMZzbbxk",
  authDomain: "discordclone-3cb12.firebaseapp.com",
  projectId: "discordclone-3cb12",
  storageBucket: "discordclone-3cb12.appspot.com",
  messagingSenderId: "629591950605",
  appId: "1:629591950605:web:6ecf6bf08b2ca31fad9c44",
  measurementId: "G-GWJH0WJHKW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(app);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, db };
