import 'firebase/firestore'
import 'firebase/auth'
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { GoogleAuthProvider } from 'firebase/auth';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyArm8x9TbvfgV-J2lpjzxazN8zcmWgAj6w",
  authDomain: "journal-app-first.firebaseapp.com",
  projectId: "journal-app-first",
  storageBucket: "journal-app-first.appspot.com",
  messagingSenderId: "876922609310",
  appId: "1:876922609310:web:f7772542a37cf1b2baa58f"
};

// Initialize Firebase
initializeApp(firebaseConfig);
// initializeApp(firebaseConfig);

// referencia a la base de datos que voy a utilizar para grabar
const db = getFirestore()

//creo auth provider, es lo mismo para google, twitter, facebook etc
const googleAuthProvider = new GoogleAuthProvider()



  export {
      db,
      googleAuthProvider,    
  }