import { getAuth, signInWithPopup, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";
import { auth } from "./config.js";




// const google = document.querySelector("#google.btn");





// google.addEventListener('click' , ()=>{
//     signInWithPopup(auth, provider)
//     .then((result) => {
//       // This gives you a Google Access Token. You can use it to access the Google API.
//       const credential = GoogleAuthProvider.credentialFromResult(result);
//       const token = credential.accessToken;
     
//       const user = result.user;
//       console.log('login google');
//     }).catch((error) => {
     
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       // The email of the user's account used.
//       const email = error.customData.email;
//       const credential = GoogleAuthProvider.credentialFromError(error);
//       console.log(error);
//     });
// })


