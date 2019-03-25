import firebase from 'firebase'
import firestore from 'firebase/firestore'

var config = {
    apiKey: "AIzaSyCbborMfCzZVyPMmUoZUBbj6z-cKGSYvVg",
    authDomain: "udemy-ninja-chat-e06dd.firebaseapp.com",
    databaseURL: "https://udemy-ninja-chat-e06dd.firebaseio.com",
    projectId: "udemy-ninja-chat-e06dd",
    storageBucket: "udemy-ninja-chat-e06dd.appspot.com",
    messagingSenderId: "294774413308"
};
const firebaseApp = firebase.initializeApp(config);
// firebaseApp.firestore().settings({ timestampInSnapshots: true })

export default firebaseApp.firestore()
