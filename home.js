import {  onAuthStateChanged , signOut } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";
import { auth } from "./config.js";




onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
      console.log(uid);
    } else {
    window.Location = 'index.html'
    }
  });

  const logout = document.querySelector('#logout-btn');

  logout.addEventListener('click' , ()=>{
    signOut(auth).then(() => {
    console.log('logout  suuccesfully');
    window.location = 'index.html'
    }).catch((error) => {
      console.log(error);
    });
  })