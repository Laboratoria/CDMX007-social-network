 window.controlador = {

   firebase: firebase.initializeApp(config),

   registro: () => {
     const register = document.getElementById('register');


     register.addEventListener('click', () => {
       const mailUser = document.getElementById('mail').value;
       const passwordUser = document.getElementById('password').value;
       const nameUser = document.getElementById('name').value;
       const lastNameUser = document.getElementById('last-name').value;
       const specialityUser = document.getElementById('speciality').value;
       const genderUser = document.getElementById('gender').value;
       const passwordConfirmation = document.getElementById('password-confirmation').value
       const mailId = localStorage.setItem("mail", mailUser);
       const auth = firebase.auth();
       var db = firebase.firestore();
       const settings = {
         timestampsInSnapshots: true
       };
       db.settings(settings);


       if (passwordUser === passwordConfirmation) {
         auth.createUserWithEmailAndPassword(mailUser, passwordUser);
       } else if (passwordUser != passwordConfirmation) {
         alert("La contraseña debe de ser igual");
       };



       if (mailUser != '' && nameUser != '' && passwordUser != '' && passwordConfirmation != '' && lastNameUser != '' && passwordUser === passwordConfirmation) {
         db.collection('users').add({
             first: nameUser,
             last: lastNameUser,
             gender: genderUser,
             speciality: specialityUser,
             mail: mailUser
           })
           .then(function (docRef) {
             localStorage.setItem('UID', docRef.id);
             console.log('Document written with ID: ', docRef.id);
           })
           .catch(function (error) {
             console.error('Error adding document: ', error);
           });
       } else {
         alert("Todos los campos son obligatorios");
         //location.replace("#/registro");
       }

       const verify = () => {
         var user = firebase.auth().currentUser;
         user.sendEmailVerification().then(function () {
           // Email sent.
           if (user.emailVerified === true)
             console.log('Send an email')
           location.hash = '/muro'
         }).catch(function (error) {
           // An error happened.
           console.log(error);
         });
       }
       verify(mailUser);



       db.collection("users").get().then((querySnapshot) => {
         querySnapshot.forEach((doc) => {
           const mailStorage = localStorage.getItem('UID');
           if (doc.id == mailStorage) {
             let nameNull = doc.data().first;
             let lastNull = doc.data().last;
             localStorage.setItem("lastNull", lastNull);
             localStorage.setItem("nameNull", nameNull);
           }
         });
       });
     });

   },

   iniciarSesion: () => {
     const login = document.getElementById('button-login');
     const logoGoogle = document.getElementById('logo-google');
     const logoFacebok = document.getElementById('logo-fb');
     const mailLogin = document.getElementById('mail-login');
     const passLogin = document.getElementById('password-login');


     login.addEventListener('click', () => {
       console.log(location.hash)
       const mailUser = mailLogin.value;
       const passwordUser = passLogin.value;
       const auth = firebase.auth();
       auth.signInWithEmailAndPassword(mailUser, passwordUser);

     });

     logoGoogle.addEventListener('click', () => {
       const baseProvider = new firebase.auth.GoogleAuthProvider()
       firebase.auth().signInWithRedirect(baseProvider)
         .catch(e => console.log(e.message));

     });

     logoFacebok.addEventListener('click', () => {
       const provider = new firebase.auth.FacebookAuthProvider();
       firebase.auth().signInWithRedirect(provider).then(function (result) {
         if (result.credential) {
           // This gives you a Facebook Access Token. You can use it to access the Facebook API.
           var token = result.credential.accessToken;
           // ...
         }
         // The signed-in user info.
         var user = result.user;
       }).catch(function (error) {
         // Handle Errors here.
         var errorCode = error.code;
         var errorMessage = error.message;
         // The email of the user's account used.
         var email = error.email;
         // The firebase.auth.AuthCredential type that was used.
         var credential = error.credential;
         // ...
       });
     });

     //muro
     firebase.auth().onAuthStateChanged(firebaseUser => {
       if (firebaseUser) {
         console.log(firebaseUser)
         console.log(firebaseUser + 'hay usuario')
         location.hash = '/muro';
       } else {
         console.log('no hay usuario')
         //location.hash = '/login';
       }
     })
   },

   cerrarSesion: () => {
     const perfil = document.getElementById('perfil');
     const data = document.getElementById('data-user');
     const logOut = document.getElementById('log-out');
     const publication = document.getElementById("publication");
     const post = document.getElementById("post");
     const newPost = document.getElementById('new-post');
     const perfilUsuario = document.getElementById("perfil-usuario");
     var db = firebase.firestore();
     const settings = {
       timestampsInSnapshots: true
     };
     db.settings(settings);

     var user = firebase.auth().currentUser;
     if (user != null) {
       user.providerData.forEach(function (profile) {
         const photo = profile.photoURL;
         const name = profile.displayName;

         localStorage.setItem("photo", photo);
         localStorage.setItem("name", name);
         localStorage.setItem("usuario", JSON.stringify(user));

       });
     };

     const photoData = localStorage.getItem("photo");
     const nameData = localStorage.getItem("name");
     if (photoData == "null" && nameData == 'null') {
       let localName = localStorage.getItem("nameNull");
       let localLast = localStorage.getItem("lastNull");

       perfilUsuario.innerHTML = `<img id="mini-photo" src="./images/usuario_chef.jpg"> ${localName} ${localLast}`
     } else {
       perfilUsuario.innerHTML = `<img id="mini-photo"src="${photoData}">  ${nameData}`
     }


     const printAll = () => {

       db.collection("wall").onSnapshot((querySnapshot) => {
         newPost.innerHTML = '';

         querySnapshot.forEach((doc) => {

           let idPublication = doc.id;
          //  let dataWall = `<div id="user-post">
          //   <img id="user-photo" src="${doc.data().photoWall}">
          //   <p>${doc.data().nameWall}</p>
          //   <p>${doc.data().wall}</p>
          //  </div>`
          //  newPost.insertAdjacentHTML('beforeend', dataWall);

           let userUID = JSON.parse(localStorage.getItem("usuario"));
           // const buttons = document.getElementById("buttons");
           if (doc.data().idUsusario === userUID.uid) {
            let dataWall = `<div id="user-post">
            <img id="user-photo" src="${doc.data().photoWall}">
            <p>${doc.data().nameWall}</p>
            <p>${doc.data().wall}</p>
            <button class="delete" id="${idPublication}"></button> 
            <button class="edit" id="${idPublication}"></button>
           </div>`
           newPost.insertAdjacentHTML('beforeend', dataWall);
           } else {
            let dataWall = `<div id="user-post">
            <img id="user-photo" src="${doc.data().photoWall}">
            <p>${doc.data().nameWall}</p>
            <p>${doc.data().wall}</p>
           </div>`
           newPost.insertAdjacentHTML('beforeend', dataWall);
           }
         });

         const deletePost = document.getElementsByClassName('delete');
         for (let i = 0; i < deletePost.length; i++) {
           deletePost[i].addEventListener('click', () => {
             const buttonDelete = deletePost[i].id
             db.collection("wall").doc(buttonDelete).delete().then(function () {
               console.log("Document successfully deleted!");
             }).catch(function (error) {
               console.error("Error removing document: ", error);
             });
           })

         }

         const editPost = document.getElementsByClassName('edit');
         for (let i = 0; i < editPost.length; i++) {
           editPost[i].addEventListener('click', () => {
             console.log("holi");
             // 1. Obtener los datos del post (id)
             const buttonEdit = editPost[i].id
             console.log("buttonEdit", buttonEdit)
             // 2. Invocar función de Firestore para actualizar el documento y
             // pasarle de parámetros el id del post
             const postRef = db.collection("wall").doc(buttonEdit)
             console.log("postRef: ", postRef)
             console.log("publication: ", publication.value)
             postRef.update({
                 wall: publication.value
               })
               // 3. Pasar un console.log("Documento actualizado")
               .then(() => {
                 console.log("Documento actualizado")
               })
           })
         }



       })
     };
     printAll();






     post.addEventListener('click', () => {
       const publication2 = publication.value;
       let photoData = localStorage.getItem("photo");
       let nameData = localStorage.getItem("name");
       let userUID = localStorage.getItem("UID");
       console.log("Este es el uid", userUID)



       let usuario = JSON.parse(localStorage.getItem('usuario'));
       if (photoData == 'null' && nameData == "null") {
         let newName = localStorage.getItem("nameNull");
         let newLast = localStorage.getItem("lastNull");
         photoData = ("./images/usuario_chef.jpg");
         nameData = `${newName} ${newLast}`;
       }
       db.collection('wall').add({
           photoWall: photoData,
           nameWall: nameData,
           wall: publication2,
           UID: userUID,
           idUsusario: usuario.uid
         })
         .then(function (docRef) {
           console.log('Document written with ID: ', docRef.id);
         })
         .catch(function (error) {
           console.error('Error adding document: ', error);
         })

       printAll();
     })

     perfil.addEventListener('click', () => {
       var db = firebase.firestore();

       db.collection("users").get().then((querySnapshot) => {
         querySnapshot.forEach((doc) => {
           const mailStorage = localStorage.getItem('UID');
           if (doc.id == mailStorage) {
             console.log(doc.data())
             let dataUser = `<div><p>${doc.data().first}</p>
            <p>${doc.data().last}</p>
            <p>${doc.data().speciality}</p>
            <p>${doc.data().gender}</p>
            <p><${doc.data().mail}/p></div>`
             data.insertAdjacentHTML('beforeend', dataUser)
           }
         });
       });
       var user = firebase.auth().currentUser;
       if (user != null) {
         user.providerData.forEach(function (profile) {
           data.innerHTML = '';
           if (profile.photoURL == null) {
             data.innerHTML = `<img src="./images/usuario_chef.jpg">`
           } else {
             let profileUSer = `<div>
      <img src="${profile.photoURL}">
      <p>${profile.displayName}</p>
      <p>${profile.email}</p>;
      </div>`
             data.insertAdjacentHTML('beforeend', profileUSer);
           }
         });
       }
     });

     logOut.addEventListener('click', () => {
       console.log('djsfh')
       firebase.auth().signOut();
       console.log("Usuario fuera");
       location.hash = '/login';
     })


   },



 }