import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp =firebase.initializeApp({
    apiKey: "AIzaSyDVC1iwYDlQROMJDyc1M6mNbeCitLckSuw",
    authDomain: "todo-app-cp-68167.firebaseapp.com",
    projectId: "todo-app-cp-68167",
    storageBucket: "todo-app-cp-68167.appspot.com",
    messagingSenderId: "228309402280",
    appId: "1:228309402280:web:e5f6f8de41028e98de389d",
    measurementId: "G-L928CJ9MCL"
  });

  const db=firebaseApp.firestore();

  export default db;
