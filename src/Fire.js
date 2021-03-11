import firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyD7FdEou-ejcFfzQXo2MqWgpXFBfBuKbOc",
  authDomain: "curcon-46811.firebaseapp.com",
  projectId: "curcon-46811",
  storageBucket: "curcon-46811.appspot.com",
  messagingSenderId: "1010904937703",
  appId: "1:1010904937703:web:70951ffd40a71bf6aa9e42",
  measurementId: "G-793TG7J60E"
};

const fire = firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const provider = new firebase.auth.GoogleAuthProvider();
export default fire;
  //firebase.analytics();