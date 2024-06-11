import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';
const firebaseConfig = {
  apiKey: "AIzaSyBQsWWuGNBX1StH6AQC2180IMbPSNLOs-E",
  authDomain: "droidbot-official.firebaseapp.com",
  projectId: "droidbot-official",
  storageBucket: "droidbot-official.appspot.com",
  messagingSenderId: "690042156468",
  appId: "1:690042156468:web:a4a381ec6f3bd365bbeee1",
  measurementId: "G-82033Q9R9C"
};

firebase.initializeApp(firebaseConfig);

export default firebase;