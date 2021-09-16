import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCqz5e4gpy4TOClgXfe5jemPNJRTPFMy8g",
  authDomain: "nazgulcoderhouse.firebaseapp.com",
  projectId: "nazgulcoderhouse",
  storageBucket: "nazgulcoderhouse.appspot.com",
  messagingSenderId: "475054185508",
  appId: "1:475054185508:web:914d1e309c53d54a344cb1"
};

const fb = firebase.initializeApp(firebaseConfig);

export const db = fb.firestore();