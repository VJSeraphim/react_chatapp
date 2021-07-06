import firebase from "firebase/app"
import "firebase/auth"

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyBoRRRxCUOM_YZvb--109BB0BAsu4JtT8E",
    authDomain: "chatapp-79704.firebaseapp.com",
    projectId: "chatapp-79704",
    storageBucket: "chatapp-79704.appspot.com",
    messagingSenderId: "824840669133",
    appId: "1:824840669133:web:dafda8e21eb2ee9db22684"
  }).auth()