// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-analytics.js";
import 
{ 
  getDatabase,
  ref,
  set,
  push, 
} 
from "https://www.gstatic.com/firebasejs/9.14.0/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBGYzWsBkrttEEd3SrFVayObFhjngVJFYY",
  authDomain: "fmproject-6436d.firebaseapp.com",
  databaseURL: "https://fmproject-6436d-default-rtdb.firebaseio.com",
  projectId: "fmproject-6436d",
  storageBucket: "fmproject-6436d.appspot.com",
  messagingSenderId: "425180447807",
  appId: "1:425180447807:web:e87c41e4ed65262f7f248a",
  measurementId: "G-KF47N057FZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase();


var fullName = document.getElementById('fullName');
var email = document.getElementById('email');
var text = document.getElementById('text');

window.sendData = function () {
  var obj = {
    name: fullName.value,
    email: email.value,
    text: text.value,
  }
  console.log(obj);
  const keyref = ref(database,'obj/');
  obj.id = push(keyref).key;
  console.log(obj.id)

  const taskref = ref(database,`obj/${obj.id}/`);
  set( taskref, obj);
}