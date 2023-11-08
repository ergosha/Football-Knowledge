import { initializeApp } from "firebase/app";
import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'

const firebaseConfig = {
  //add the correct configurations
}

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

export {firebase}