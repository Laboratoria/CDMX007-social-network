/*var firebase = require("firebase/app");
require("firebase/auth");
require("firebase/firestore");*/
function signIn(){
    const emailSignIn=  document.getElementById("emailSignIn").value;
    const passwordSignIn= document.getElementById("passwordSignIn").value;

    firebase.auth().createUserWithEmailAndPassword(emailSignIn, passwordSignIn)
    .then (function(){
        verification()
    })

    .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        
        // ...
      });
}

function logIn(){
    const emailLogIn= document.getElementById("emailLogIn").value;
    const passwordLogIn= document.getElementById("passwordLogIn").value;

    firebase.auth().signInWithEmailAndPassword(emailLogIn, passwordLogIn)
    .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
        // ...
      });
}

    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            console.log("existe usuario activo")
           // aparece(user);
          // User is signed in.
          var displayName = user.displayName;
          var email = user.email;
          console.log("*******");
          console.log(user.emailVerified)
          console.log("*******");
          var emailVerified = user.emailVerified;
          var photoURL = user.photoURL;
          var isAnonymous = user.isAnonymous;
          var uid = user.uid;
          var providerData = user.providerData;
          console.log(user);
          // ...
        } else {
          // User is signed out.
          console.log("no existe usuario activo")
          // ...
        }
      });
     
      firebase.auth().signInWithPopup(provider).then(function(result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        // ...
      }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });


      /*function aparece(user){
          const user = user;
          const contenido = document.getElementById("content");
          if(user.emailVerified){
          contenido.innerHTML=`
          <button onclick="cerrar()">Cerrar sesión</button>`;
          }
        }*/


       /* firebase.auth().signOut()
        .then(function(){
            console.log("saliendo...")

        })
        .catch(function(error){
         console.log(error)
        })*/


      function verification(){
        var user = firebase.auth().currentUser;

        user.sendEmailVerification().then(function() {
          // Email sent.
          console.log("Enviando correo")
        }).catch(function(error) {
          // An error happened.
          console.log(error);
        });
      }




//var db = firebase.firestore();

