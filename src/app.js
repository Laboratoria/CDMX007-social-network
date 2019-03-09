
/*var config = {
  apiKey: "AIzaSyA-br4fjgN3TqUQgfE-Y2eGzfdajBuwa_Q",
  authDomain: "red-social-laboratoriamx.firebaseapp.com",
  databaseURL: "https://red-social-laboratoriamx.firebaseio.com",
  projectId: "red-social-laboratoriamx",
  storageBucket: "red-social-laboratoriamx.appspot.com",
  messagingSenderId: "727465925051"
};
firebase.initializeApp(config);

/*(function(){
// Initialize Firebase
var config = {
  apiKey: "AIzaSyA-br4fjgN3TqUQgfE-Y2eGzfdajBuwa_Q",
  authDomain: "red-social-laboratoriamx.firebaseapp.com",
  databaseURL: "https://red-social-laboratoriamx.firebaseio.com",
  projectId: "red-social-laboratoriamx",
  storageBucket: "red-social-laboratoriamx.appspot.com",
  messagingSenderId: "727465925051"
};
firebase.initializeApp(config);
const txtEmail = document.getElementById('txtEmail');
const txtPassword = document.getElementById('txtPassword');
const btnLogin = document.getElementById('btnLogin');
const btnSingUp = document.getElementById('btnSignUp');
const btnLogout = document.getElementById('btnLogout');

btnLogin.addEventListener('click', e => {
const email = txtEmail.value;
const pass = txtPassword.value;
const auth = firebase.auth();
const promise = auth.signInWithEmailAndPassword(email,pass);
promise.catch(e => console.log(e.message));
});

btnSingUp.addEventListener('click', e => {
const email = txtEmail.value;
const pass = txtPassword.value;
const auth = firebase.auth();
const promise = auth.createUserWithEmailAndPassword(email,pass);
promise
.catch(e => console.log(e.message));
});

btnLogout.addEventListener('click' , e => {
  firebase.auth().signOut();
})

firebase.auth().onAuthStateChanged(firebaseUser => {
  if(firebaseUser) {
    console.log(firebaseUser);
    btnLogout.classList.remove('hide');
  } else {
    console.log('not logged in');
    btnLogout.classList.add('hide');
  }
})



}());*/




const txtEmail = document.getElementById('txtEmail');
const txtPassword = document.getElementById('txtPassword');
const btnLogin = document.getElementById('btnLogin');
const btnSingUp = document.getElementById('btnSignUp');


btnSingUp.addEventListener('click', e => {
  const email = txtEmail.value;
  console.log(email)
  const pass = txtPassword.value;
  firebase.auth().createUserWithEmailAndPassword(email, pass)
  .then(function() {
    verify() 
  })
  .catch(function(error) {
    var errorCode = error.code;
    var errorMessage = error.message;
  })
  });

  function verify() {
    var user = firebase.auth().currentUser;
  
  user.sendEmailVerification().then(function() {
    // Email sent.
    console.log('sending email');
  }).catch(function(error) {
    // An error happened.
    console.log(error);
  });
  }

const txtEmail2 = document.getElementById('txtEmail2');
const textPassword2 = document.getElementById('txtPassword2');

  btnLogin.addEventListener('click', e => {
    const email2 = txtEmail2.value;
    const pass2 = textPassword2.value;
    console.log(email2, pass2);
    firebase.auth().signInWithEmailAndPassword(email2, pass2).catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);

      //inner watchercontraseña o correo invalido
    });
  });

function watcher() {
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      if(user.emailVerified == true) {
        window.location.replace('main.html');
        console.log('main.html')
      } 
      if(user.emailVerified == false) {
      console.log('verifica tu correo') 
      }
      // User is signed in.
      var displayName = user.displayName;
      var email = user.email;
      console.log(user.emailVerified);
      var emailVerified = user.emailVerified;
      var photoURL = user.photoURL;
      var isAnonymous = user.isAnonymous;
      var uid = user.uid;
      var providerData = user.providerData;
      // ...
    } else {
      // User is signed out.
      // ...
      console.log('no existe usuario activo');
    }
  });
}watcher();

// funcion para entar a pagina principal (main.html)
/*
function loged(){
  window.location.replace('main.html');
  console.log(document.getElementById('btnLogout')) 

  }*/

//Carrusel
  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(elems);
  });

//Modal1
  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems);
  });

