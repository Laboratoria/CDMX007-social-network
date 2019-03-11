const btnLogout = document.getElementById('btnLogout');
const secc1 = document.getElementById('"secc1"')

var mainApp = {};
(function () {
    var firebase = app_firebase;
    var uid = null;
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            localStorage.setItem('user', JSON.stringify(user))
            console.log(JSON.parse(localStorage.getItem('user')))
            //Funcion de imprimir la data. 
            //Current User en una variable 
            var user = firebase.auth().currentUser;
            //Disparar la funcion de pintado DOM: Tomar la seccion donde escribir la data que quiero y ponerla. 
            //Pintar con user.email
            
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

// comentario
    btnLogout.addEventListener('click', function logOut() {
            //pop up de confirmación
            firebase.auth().signOut()
                .then(function () {
                    console.log('saliendo..')
                })
                .catch(function (error) {
                    console.log(error)
                })
        }),
        mainApp.logOut
})()