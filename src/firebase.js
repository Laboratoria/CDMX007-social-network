let app_firebase = {};
(function() {
var config = {
  apiKey: "AIzaSyA-br4fjgN3TqUQgfE-Y2eGzfdajBuwa_Q",
  authDomain: "red-social-laboratoriamx.firebaseapp.com",
  databaseURL: "https://red-social-laboratoriamx.firebaseio.com",
  projectId: "red-social-laboratoriamx",
  storageBucket: "red-social-laboratoriamx.appspot.com",
  messagingSenderId: "727465925051"
};
firebase.initializeApp(config);
app_firebase = firebase;
})()


/*
// manejador de eventos para loguearse
document.getElementById('buttonGoogle').addEventListener('click', function() {
  authGoogle();
})

function authGoogle(){
    var provider = new firebase.auth.GoogleAuthProvider();
    authentication(provider);
}

 function authentication(provider){
    firebase.auth().signInWithPopup(provider).then(function(result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        // ...
      }).catch(function(error) {
        console.log(error)
        // Handle Errors here.
        var errorCode = error.code;
        console.log(errorCode);
        var errorMessage = error.message;
        console.log(errorMessage);
        // The email of the user's account used.
        var email = error.email;
        console.log(email);
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        console.log(credential);
        // ...
      });
 }

*/

