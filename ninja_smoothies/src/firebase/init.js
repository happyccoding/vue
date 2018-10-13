import firebase from 'firebase'
import firestore from 'firebase/firestore'

// Initialize Firebase
var config = {
  apiKey: "AIzaSyANtvbcRtpapgT2ROxqMRPl72PHr1O2sZA",
  authDomain: "udemy-react-smoothies.firebaseapp.com",
  databaseURL: "https://udemy-react-smoothies.firebaseio.com",
  projectId: "udemy-react-smoothies",
  storageBucket: "udemy-react-smoothies.appspot.com",
  messagingSenderId: "463072331490"
};
const firebaseApp = firebase.initializeApp(config);

firebaseApp.firestore().settings({ timestampsInSnapshots: true })

export default firebaseApp.firestore();
