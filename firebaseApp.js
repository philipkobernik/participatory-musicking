import firebase from 'firebase/app';
import 'firebase/database';

var firebaseConfig = {
  apiKey: "AIzaSyAPghyRHP98ZOsubANdbXE_uNFWLGqiiWM",
  authDomain: "max-8-crowd.firebaseapp.com",
  databaseURL: "https://max-8-crowd.firebaseio.com",
  projectId: "max-8-crowd",
  storageBucket: "max-8-crowd.appspot.com",
  messagingSenderId: "245966990775",
  appId: "1:245966990775:web:bfa500a1c4176c04674c32"
};
// Initialize Firebase
var db;
if(firebase.apps.length < 1) {
  db = firebase.initializeApp(firebaseConfig).database();
} else {
  db = firebase.database();
}

export default db;
