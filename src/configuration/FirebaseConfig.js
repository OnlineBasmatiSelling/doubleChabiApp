import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: ""
};
let secondaryAuth = {};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
    const secondApp = firebase.initializeApp(firebaseConfig, 'secondApp');
    secondaryAuth = secondApp.auth();
}

const db = firebase.firestore();
export { db, firebase, secondaryAuth };

