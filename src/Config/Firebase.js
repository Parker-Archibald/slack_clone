import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCIbppSrfHh--FVEtHV6nHCIKm5C1775yM",
    authDomain: "slackclone-40f8f.firebaseapp.com",
    projectId: "slackclone-40f8f",
    storageBucket: "slackclone-40f8f.appspot.com",
    messagingSenderId: "936067232927",
    appId: "1:936067232927:web:bf141716ce2394e8235eaa",
    measurementId: "G-9M9ZTQCMXN"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider};
  export default db;