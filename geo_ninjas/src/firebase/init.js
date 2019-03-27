import firebase from 'firebase'
import firestore from 'firebase/firestore'

// Initialize Firebase
var config = {
  apiKey: "AIzaSyC7KPGN0SILOReCtHk_IkbdTe4tIkFtBCU",
  authDomain: "udemy-geo-ninjas-ea233.firebaseapp.com",
  databaseURL: "https://udemy-geo-ninjas-ea233.firebaseio.com",
  projectId: "udemy-geo-ninjas-ea233",
  storageBucket: "udemy-geo-ninjas-ea233.appspot.com",
  messagingSenderId: "513892038615"
};

const firebaseApp = firebase.initializeApp(config);

export default firebaseApp.firestore()
