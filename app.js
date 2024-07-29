import { signInWithEmailAndPassword  } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";
import { auth } from "./config.js";




const form = document.querySelector('form')
const email = document.querySelector('#email')
const pasword = document.querySelector('#pasword')




form.addEventListener('submit' , (event) =>{
    event.preventDefault();
signInWithEmailAndPassword(auth, email.value, pasword.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
  console.log(user);
  window.location = 'home.html'
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage);
  });
    });




