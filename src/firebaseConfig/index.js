import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAzqotOSQb8hZZxijxCc3G8kfnlPJYBNgk",
  authDomain: "react-todos-app-with-auth.firebaseapp.com",
  projectId: "react-todos-app-with-auth",
  storageBucket: "react-todos-app-with-auth.appspot.com",
  messagingSenderId: "354006754663",
  appId: "1:354006754663:web:ee70e6de4d69c750de3bc2",
  measurementId: "G-86Q13CVC1S",
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();
export default firebase;
