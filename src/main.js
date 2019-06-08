
window.controlador = {

  firebase: firebase.initializeApp(config),

  userRegister: () => {
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
             location.hash = '/muro';
           })
           .catch(function (error) {
             console.error('Error adding document: ', error);
           });
       } else {
         alert("Todos los campos son obligatorios");
         //location.replace("#/registro");
       };

      //  const verify = () => {
      //    var user = firebase.auth().currentUser;
      //    user.sendEmailVerification().then(function () {
      //      // Email sent.
      //      if (user.emailVerified === true)
      //        console.log('Send an email')
      //      location.hash = '/muro'
      //    }).catch(function (error) {
      //      // An error happened.
      //      console.log(error);
    
      //    });
      //  }
      //  verify(mailUser);

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

  userLogin: () => {
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
      auth.signInWithEmailAndPassword(mailUser, passwordUser)
        .catch(function (error) {

          var errorMessage = error.message;
          // ...

          alert(errorMessage)
        });

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

  timeLine: () => {
    const userProfile = document.getElementById('user-profile');
    const data = document.getElementById('data-user');
    const logOut = document.getElementById('log-out');
    const publication = document.getElementById("publication");
    const post = document.getElementById("post");
    const newPost = document.getElementById('new-post');
    const timeLine = document.getElementById('time-line');
    const secondProfile = document.getElementById("second-profile");
    const postUser = document.getElementById('post-user');
    const auth = firebase.auth();
    var db = firebase.firestore();
    //var storage = firebase.app().storage("red-social-dolce.appspot.com");
    //var storage = customApp.storage("red-social-dolce.appspot.com");

    const settings = {
      timestampsInSnapshots: true
    };
    db.settings(settings);

    timeLine.addEventListener('click', () => {
      data.innerHTML = '';
      postUser.innerHTML = '';
      printAll();
    });

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

      secondProfile.innerHTML = `<img id="mini-photo" src="./images/usuario_chef.jpg"> ${localName} ${localLast}`
    } else {
      secondProfile.innerHTML = `<img id="mini-photo"src="${photoData}">  ${nameData}`
    }

    const printAll = () => {

      db.collection("wall").orderBy('date', 'desc').onSnapshot((querySnapshot) => {
        newPost.innerHTML = '';
        querySnapshot.forEach((doc) => {
          let idPublication = doc.id;
          let userUID = JSON.parse(localStorage.getItem("usuario"));
          if (doc.data().idUsusario === userUID.uid) {
            let dataWall = `<div id="user-post">
            <img id="user-photo" src="${doc.data().photoWall}">
            <p>${doc.data().nameWall}</p>
            <textarea id="txt-${idPublication}" class ="post-edited" disabled = "true">${doc.data().wall}</textarea>
            <p id="save-${idPublication}"> </p>
            <div class="buttons-content">  
            <button class="delete" id="${idPublication}"></button> 
            <button class="edit" id="${idPublication}"></button>
            <button data-like=${doc.data().like} class="like" id="${idPublication}">${doc.data().like}</button>
            </div>
           </div>`
            newPost.insertAdjacentHTML('beforeend', dataWall);
          } else {
            let dataWall = `<div id="user-post">
            <img id="user-photo" src="${doc.data().photoWall}">
            <p>${doc.data().nameWall}</p>
            <p>${doc.data().wall}</p>
            <div class="buttons-content"> 
            <button data-like=${doc.data().like} class="like" id="${idPublication}">${doc.data().like}</button>
            </div>
           </div>`
            newPost.insertAdjacentHTML('beforeend', dataWall);
          }
        });
        const deletePost = document.getElementsByClassName('delete');
        for (let i = 0; i < deletePost.length; i++) {
          deletePost[i].addEventListener('click', () => {
            const buttonDelete = deletePost[i].id
            const confirmation = confirm("¿Estas seguro que quieres borrar este post?");
            if (confirmation == true) {
              db.collection("wall").doc(buttonDelete).delete().then(function () {
                console.log("Document successfully deleted!");
              }).catch(function (error) {
                console.error("Error removing document: ", error);
              });
            }
          })
        }
        const edit = document.getElementsByClassName('edit');
        for (let i = 0; i < edit.length; i++) {
          const id = edit[i].id;
          edit[i].addEventListener("click", () => {
            document.getElementById('txt-' + id).disabled = false;
            const save = document.getElementById('save-' + id);
            save.innerHTML = `<button id='save-button'>Guardar</button>`;

            save.addEventListener('click', () => {
              const newValue = document.getElementById('txt-' + id).value;
              if (newValue != '') {
                const postRef = db.collection("wall").doc(id)
                postRef.update({
                  wall: newValue
                })
                  .then(() => {
                    console.log("Documento actualizado");
                    save.innerHTML = '';
                    document.getElementById('txt-' + id).disabled = true;

                  })
              } else {
                alert('Tu post no puede estar vacio');
              }
            })
          })

        }

        const buttonLike = document.getElementsByClassName("like");
        for (let i = 0; i < buttonLike.length; i++) {
          buttonLike[i].addEventListener("click", (e) => {

            let idLike = buttonLike[i].id;
            let getLike = parseInt(e.target.dataset.like);
            getLike++;
            console.log(getLike);


            const postRef = db.collection("wall").doc(idLike)
            postRef.update({
              like: getLike
            })
              .then(() => {
                console.log("Documento actualizado");
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
      if (publication.value != '') {
        db.collection('wall').add({
          photoWall: photoData,
          nameWall: nameData,
          wall: publication2,
          UID: userUID,
          idUsusario: usuario.uid,
          like: 0,
          date: firebase.firestore.FieldValue.serverTimestamp(),
        })
          .then(function (docRef) {
            publication.value = '';
            console.log('Document written with ID: ', docRef.id);
          })
          .catch(function (error) {
            console.error('Error adding document: ', error);
          })

        printAll();
      } else {
        alert("Tu post no puede estar vacio");
      }

    })

    userProfile.addEventListener('click', () => {
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
        data.innerHTML = '';
        user.providerData.forEach(function (profile) {
          postUser.innerHTML = '';
          if (profile.photoURL == null) {
            data.innerHTML = `<img class="profile-photo" src="./images/usuario_chef.jpg">`
          } else {
            data.innerHTML = '';
            let profileUSer = `<div id="profile-user">
              <img class="profile-photo" src="${profile.photoURL}">
              <p>${profile.displayName}</p>
              <p>${profile.email}</p>
              </div>`
            data.insertAdjacentHTML('beforeend', profileUSer);

          };
        });
      };
      db.collection("wall").orderBy('date', 'desc').onSnapshot((querySnapshot) => {
        postUser.innerHTML = '';
        querySnapshot.forEach((doc) => {
          let idPublication = doc.id;
          let userUID = JSON.parse(localStorage.getItem("usuario"));
          if (doc.data().idUsusario === userUID.uid) {
            let dataWall = `<div id="user-post">
           <img id="user-photo" src="${doc.data().photoWall}">
           <p>${doc.data().nameWall}</p>
           <textarea id="txt-${idPublication}"class ="post-edited" disabled = "true" >${doc.data().wall}</textarea>`
            postUser.insertAdjacentHTML('beforeend', dataWall)
          }
        })
      })

     });

     logOut.addEventListener('click', () => {
       firebase.auth().signOut();
       console.log("Usuario fuera");
       location.hash = '/login';
     })


   },


}