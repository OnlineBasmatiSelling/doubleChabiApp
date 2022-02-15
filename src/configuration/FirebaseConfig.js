import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyCSU6oXmWTAgjt5jwFUdo27OkF75G7z4Wk",
  authDomain: "doublechabiapp.firebaseapp.com",
  projectId: "doublechabiapp",
  storageBucket: "doublechabiapp.appspot.com",
  messagingSenderId: "40469898061",
  appId: "1:40469898061:web:3a63c45d1835142e12cd04",
  measurementId: "G-YGL96LH6VD"
};
let secondaryAuth = {};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
    const secondApp = firebase.initializeApp(firebaseConfig, 'secondApp');
    secondaryAuth = secondApp.auth();
}

const db = firebase.firestore();
export { db, firebase, secondaryAuth };

