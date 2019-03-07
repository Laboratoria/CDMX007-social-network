const btnLogout = document.getElementById('btnLogout');

var mainApp = {};
(function() {
    var firebase = app_firebase;
    var uid = null;
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        console.log(user);
        uid = user // User is signed in.
        var displayName = user.displayName;
        var email = user.email;
        var emailVerified = user.emailVerified;
        var photoURL = user.photoURL;
        var isAnonymous = user.isAnonymous;
        var uid = user.uid;
        var providerData = user.providerData;
        // ...
      } else {
          uid = null;
          window.location.replace('index.html');
          console.log('no existe usuario activo');
      }
    });
    btnLogout.addEventListener('click' , function logOut() {
        //pop up de confirmación
        firebase.auth().signOut()
        .then(function(){
            console.log('saliendo..')
        })
        .catch(function(error){
            console.log(error)
        })
    }),
    mainApp.logOut = logOut;
  })()