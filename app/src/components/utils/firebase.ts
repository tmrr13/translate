import firebase from 'firebase/compat';
import "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAs4hijh-vZ-uuorQEYOTOy2z5AWOX0pRw",
  authDomain: "notepad-assistant-211ed.firebaseapp.com",
  projectId: "notepad-assistant-211ed",
  storageBucket: "notepad-assistant-211ed.appspot.com",
  messagingSenderId: "654072982173",
  appId: "1:654072982173:web:9c2cba378db148d620c274",
  measurementId: "G-4V7Z12H9PQ"
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();

export default firebase;
