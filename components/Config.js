import { initializeApp } from "firebase/app";
import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyD_BH98i8BkdhxUn_xQO6ZGU7XYJWPLkO4",
  authDomain: "football-b58a5.firebaseapp.com",
  projectId: "football-b58a5",
  storageBucket: "football-b58a5.appspot.com",
  messagingSenderId: "492336545948",
  appId: "1:492336545948:web:a76aae4a3db54aaccfad59"
}

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

export {firebase}
