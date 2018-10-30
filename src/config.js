import * as firebase from "firebase";

var config = {
  apiKey: "AIzaSyC9Dr8OphcJHUne6eioM_oKJO6c4iGGxTU",
  authDomain: "photowall-c8d81.firebaseapp.com",
  databaseURL: "https://photowall-c8d81.firebaseio.com",
  projectId: "photowall-c8d81",
  storageBucket: "photowall-c8d81.appspot.com",
  messagingSenderId: "989196218226"
};

firebase.initializeApp(config);
const database = firebase.database();

export { database };
