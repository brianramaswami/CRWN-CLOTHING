import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAcsWxPjcjB_4qfzlYGECJYYR10YeZskc0",
    authDomain: "crwn-db-41626.firebaseapp.com",
    databaseURL: "https://crwn-db-41626.firebaseio.com",
    projectId: "crwn-db-41626",
    storageBucket: "crwn-db-41626.appspot.com",
    messagingSenderId: "891578986005",
    appId: "1:891578986005:web:209d6a3efb7ecb2e76681c",
    measurementId: "G-DRZK2NGEBK"
  };
  
  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();
  
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);
  
  export default firebase;