const txtEmail = document.getElementById('email-login');
const txtPassword = document.getElementById('password-login');
const btnLogin = document.getElementById('btnLogin');
const btnSingUp = document.getElementById('btnSignUp');


btnSingUp.addEventListener('click', e => {
  const email = txtEmail.value;
  console.log(email)
  const pass = txtPassword.value;
  firebase.auth().createUserWithEmailAndPassword(email, pass)
    .then(function () {
      verify()
    })
    .catch(function (error) {
      var errorCode = error.code;
      var errorMessage = error.message;
    })
});

function verify() {
  var user = firebase.auth().currentUser;

  user.sendEmailVerification().then(function () {
    // Email sent.
    console.log('sending email');
  }).catch(function (error) {
    // An error happened.
    console.log(error);
  });
}

const txtEmail2 = document.getElementById('email-register');
const textPassword2 = document.getElementById('password-register');

btnLogin.addEventListener('click', e => {
  const email2 = txtEmail2.value;
  const pass2 = textPassword2.value;
  console.log(email2, pass2);
  firebase.auth().signInWithEmailAndPassword(email2, pass2).catch(function (error) {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorCode);
    console.log(errorMessage);

    //inner watchercontraseña o correo invalido
  });
});

function watcher() {
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      if (user.emailVerified == true) {
        window.location.replace('main.html');
        console.log('main.html')
      }
      if (user.emailVerified == false) {
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
}
watcher();

// funcion para entar a pagina principal (main.html)
/*
function loged(){
  window.location.replace('main.html');
  console.log(document.getElementById('btnLogout')) 

  }*/

//Carrusel
document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('.carousel');
  var instances = M.Carousel.init(elems);
});

//Modal1
document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('.modal');
  var instances = M.Modal.init(elems);
});

//Boton enviar desde el modal

const bttnLogout = document.getElementById("bttn-logout")
bttnLogout.addEventListener('click', function logOut() {
    //pop up de confirmación
    firebase.auth().signOut()
      .then(function () {
        console.log('saliendo..')
      })
      .catch(function (error) {
        console.log(error)
      })
  }),
  index.logOut
()