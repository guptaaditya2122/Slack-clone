// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyD2FbyCwHqERVw4sBrVirBna1lDojuR8jc",
    authDomain: "slack-clone-1ec96.firebaseapp.com",
    projectId: "slack-clone-1ec96",
    storageBucket: "slack-clone-1ec96.appspot.com",
    messagingSenderId: "1009093542640",
    appId: "1:1009093542640:web:d6a558f9d6ae0d1caeb835",
    measurementId: "G-X09ELCD160"
  };

  const firebaseApp =firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth =firebase.auth();
  const provider =new firebase.auth.GoogleAuthProvider();

  export {db , auth, provider};