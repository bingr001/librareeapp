import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCLfVOZrWhfqNVSbzsmCzDOee-e63m9yo8",
    authDomain: "libraree-100db.firebaseapp.com",
    projectId: "libraree-100db",
    storageBucket: "libraree-100db.appspot.com",
    messagingSenderId: "26408342516",
    appId: "1:26408342516:web:a6eee54ad94760c8b55fa1",
    measurementId: "G-60NKEDFQB8"
  };

  try {
    firebase.initializeApp(firebaseConfig);
  } catch (err) {
    if (!/already exists/.test(err.message)) {
      console.error('Firebase initialization error', err.stack);
    }
  }const fire = firebase;
  export default fire;