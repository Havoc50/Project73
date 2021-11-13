import * as firebase from "firebase";
require("@firebase/firestore");

  var firebaseConfig = {
    apiKey: "AIzaSyDAdc3bvw4ASHEQMWF3nn74PqS8u-fXUWg",
    authDomain: "let-s-ride-d75d9.firebaseapp.com",
    projectId: "let-s-ride-d75d9",
    storageBucket: "let-s-ride-d75d9.appspot.com",
    messagingSenderId: "1097040005516",
    appId: "1:1097040005516:web:a440da0fb463c61c08aea9"
  };
 
  firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
