import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAEmFSfWJJtbwE2SB0uhXz2QKUJF3qT31I",
  authDomain: "webapp-97646.firebaseapp.com",
  databaseURL: "https://webapp-97646-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "webapp-97646",
  storageBucket: "webapp-97646.appspot.com",
  messagingSenderId: "253448088023",
  appId: "1:253448088023:web:8ce88ab8a3fe8b09654392",
  measurementId: "G-P23GZEHBDH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth()
const db = getFirestore()


// html elements
const loginForm = document.getElementById('loginForm')

console.log(loginForm)
loginForm.addEventListener('submit', (e)=>{
  e.preventDefault()
  signInWithEmailAndPassword(auth, e.target.email.value, e.target.password.value)
  .then((cred)=>{
    return cred.user.getIdToken()
  }).then((token)=>{
document.cookie = `Bearer ${token}`
window.location.href = '/profile'
  })
  .catch((err)=>{
    if(err)throw err
  })
})
