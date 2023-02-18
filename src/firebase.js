// import * as firebase from "firebase";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { initializeApp } from "firebase/app";

// google account > mas*******ter@gmail.com
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA0zYUib_DFpQv4XQzUGC1oQ73I6kR3FSc",
  authDomain: "bdbazar-6bed4.firebaseapp.com",
  databaseURL: "https://bdbazar-6bed4-default-rtdb.firebaseio.com",
  projectId: "bdbazar-6bed4",
  storageBucket: "bdbazar-6bed4.appspot.com",
  messagingSenderId: "478875940193",
  appId: "1:478875940193:web:10928b9be2656398c98120"
};
// Initialize Firebase
// firebase.initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig);

// export
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
