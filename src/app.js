const txtEmail = document.getElementById('txtEmail');
const txtPassword = document.getElementById('txtPassword');
const btnLogin = document.getElementById('btnLogin');
const btnSingUp = document.getElementById('btnSignUp');
const txtName = document.getElementById('name');
const txtUserName = document.getElementById('user-name');
const txtBirthday = document.getElementById('birthday');
const btnSaveProfile = document.getElementById('save-profile');
/*Inicializacion para enlazar el proyecto a firebase */
var config = {
  apiKey: "AIzaSyA-br4fjgN3TqUQgfE-Y2eGzfdajBuwa_Q",
  authDomain: "red-social-laboratoriamx.firebaseapp.com",
  databaseURL: "https://red-social-laboratoriamx.firebaseio.com",
  projectId: "red-social-laboratoriamx",
  storageBucket: "red-social-laboratoriamx.appspot.com",
  messagingSenderId: "727465925051"
};
firebase.initializeApp(config);
/*nombre a la base de datos*/
var db = firebase.firestore();
/* observador*/
function watcher() {
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      console.log('usuario activo');
      console.log(user)
      loged(user);
      // if(user.emailVerified == true) {
      //   window.location.replace('main.html');
      //   console.log('main.html')
      // } 
      // if(user.emailVerified == false) {
      // console.log('verifica tu correo') 
      // }
      // User is signed in.
      var displayName = user.displayName;
      var email = user.email;
      console.log(user.emailVerified);
      var emailVerified = user.emailVerified;
      var photoURL = user.photoURL;
      var isAnonymous = user.isAnonymous;
      var uid = user.uid;
     localStorage.setItem('useruid' , uid)
      var providerData = user.providerData;
      // ...
    } else {
      // User is signed out.
      // ...
      console.log('no existe usuario activo');
      container.innerHTML = ``;
    }
  });
} watcher();
/*para crear usuario*/
btnSingUp.addEventListener('click', e => {
  const email = txtEmail.value;
  console.log(email)
  const pass = txtPassword.value;
  firebase.auth().createUserWithEmailAndPassword(email, pass)
    .then(function () {
      verify()
      saveData()
    })
    .catch(function (error) {
      var errorCode = error.code;
      var errorMessage = error.message;
    })
});
/*Guarda la informacion en la bd users*/
function saveData() {
  var email = txtEmail.value;
  var password = txtPassword.value;
  var name = txtName.value;
  var userName = txtUserName.value;
  var birthday = txtBirthday.value;
  const user = firebase.auth().currentUser;
  db.collection("users").doc(user.uid).set({
    email: email,
    password: password,
    name: name,
    user: userName,
    birthday: birthday,

    posts: []

  })
    .then(function (docRef) {
      console.log("Document written");
      txtEmail.value = "";
      txtPassword.value = "";
      txtUserName.value = "";
      txtBirthday.value = "";
    })
    .catch(function (error) {
      console.error("Error adding document: ", error);
    });
}
/* Verificacion de correo electronico*/
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
/* boton para iniciar sesión*/
const txtEmail2 = document.getElementById('txtEmail2');
const textPassword2 = document.getElementById('txtPassword2');

btnLogin.addEventListener('click', e => {
  const email2 = txtEmail2.value;
  const pass2 = textPassword2.value;
  console.log(email2, pass2);
  firebase.auth().signInWithEmailAndPassword(email2, pass2).catch(function (error) {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorCode);
    console.log(errorMessage);
    //inner contraseña o correo invalido********
  });
});

const container = document.getElementById('container-feed');
/* funcion para entar a pagina principal (feed)*/
function loged(user) {
  var user = user;
  if (user.emailVerified) {
     window.location.href = '#home2'
    // aqui va funcion para SPA
    container.innerHTML =
    `<div><h1> Hola ${user.email}</h1>
    <button onClick="logOut()"  class= "btn btn-action">Cerrar Sesión</button></div>`;
  }
}

/* Boton de cerrar sesión*/
const btnLogout = document.getElementById('btnLogout');
function logOut() {
  //pop up de confirmación
  firebase.auth().signOut()
    .then(function () {
      console.log('saliendo..')
      window.location.href = '#home'
    })
    .catch(function (error) {
      console.log(error)
    })
}

// /*leer documento firestone*/
// var table = document.getElementById('table2');
// db.collection("users").onSnapshot((querySnapshot) => {
//   table.innerHTML= "";
//   querySnapshot.forEach(function(doc) {
//       // doc.data() is never undefined for query doc snapshots
//       //obtiene datos de firestore y los pinta en tiempo real
//       table.innerHTML += 
//       `
//       <input id="nameProfile" placeholder= "Nombre completo" type="text" value="${doc.data().name}">
//       <input id="user-nameProfile" placeholder= "Nombre de usuario" type="text" value="${doc.data().user}">
//       <input id="birthdayProfile" placeholder= "Fecha de nacimiento" type="text" value="${doc.data().birthday}">
//       <input id= "txtEmailProfile" placeholder= "Correo electrónico" type="email" value="${doc.data().email}">
//       <button onclick="removeUsers('${doc.id}')">Eliminar</button>
//       <button onclick="editUsers('${doc.id}', '${doc.data().email}','${doc.data().name}', '${doc.data().user}', '${doc.data().birthday}')">Editar</button>
//       `
      
//   });
// });

/*función para borrar documentos*/ 
function removeUsers(id){ 
  db.collection("users").doc(id).delete().then(function() {
    console.log("Document successfully deleted!");
  }).catch(function(error) {
    console.error("Error removing document: ", error);
  });
}
/*función para editar perfil*/ 
const txtNameProfile = document.getElementById('nameProfile');
const txtUserNameProfile = document.getElementById('user-nameProfile');
const txtBirthdayProfile = document.getElementById('birthdayProfile');
const txtEmailProfile = document.getElementById('txtEmailProfile');
const txtPasswordProfile = document.getElementById('txtPasswordProfile');

function editUsers(id, email, name, user, birthday){
  txtEmail.value = email
  txtName.value =  name
  txtUserName.value = user
  txtBirthday.value = birthday   

  btnSaveProfile.addEventListener('click', function(){
    var washingtonRef = db.collection("users").doc(id);
    
    var email = txtEmail.value
    var name = txtName.value
    var user = txtUserName.value
    var birthday = txtBirthday.value
    // Set the "capital" field of the city 'DC'
    return washingtonRef.update({
      email: email,
      name: name,
      user: user,
      birthday: birthday
    })
    .then(function() {
        console.log("Document successfully updated!");
    })
    .catch(function(error) {
        // The document probably doesn't exist.
        console.error("Error updating document: ", error);
    });
  })
}

//Agregar post
/*Guarda la informacion en la bd post*/
const btnPost = document.getElementById('btn-post')
btnPost.addEventListener('click', saveDataInPostColection => {
  const txtPost = document.getElementById('txtPost')
  var post = txtPost.value;

  const authorUid = firebase.auth().currentUser;
console.log(authorUid);
  db.collection("posts").add({
    authoruid: authorUid.uid,
    nick: authorUid.email,
    title: "",
    date: "",     
    post: post
  })
    .then(function (docRef) {
      console.log("Document written with ID: ", docRef.id);
      txtPost.value = "";
    })
    .catch(function (error) {
      console.error("Error adding document: ", error);
    });
})



/*leer documento firestone*/
var showPost = document.getElementById('showPost');
db.collection("posts").onSnapshot((querySnapshot) => {
  showPost.innerHTML= "";
let uidOfUser = localStorage.getItem('useruid')
  querySnapshot.forEach(function(doc) {
    // doc.data() is never undefined for query doc snapshots
      //obtiene datos de firestore y los pinta en tiempo real
      showPost.innerHTML += `
      <div>
        <p>${doc.data().post}</p>
      </div>`  
      if(uidOfUser == doc.data().authoruid) {
        showPost.innerHTML += `
        <div>
        <button onclick="removePost('${doc.id}')">Eliminar</button>
        <button onclick="editPost('${doc.id}', '${doc.data().post}')">Editar</button>
      </div>`  
      }
    });
});

/*editar post*/
const btnEditPost = document.getElementById('save-post');
const txtPostEdit = document.getElementById('txtPostEdit');
function editPost(id, post){
  txtPostEdit.value = post
  console.log(txtPost.value)
  btnEditPost.addEventListener('click', function(){
    var postEdited = db.collection("posts").doc(id);
    var post = txtPostEdit.value

    return postEdited.update({
      post: post
    })
    .then(function() {
        console.log("Document successfully updated!");
    })
    .catch(function(error) {
        // The document probably doesn't exist.
        console.error("Error updating document: ", error);
    });
  })
}

/*elimianr post*/
function removePost(id){ 
  db.collection("posts").doc(id).delete().then(function() {
    console.log("Document successfully deleted!");
  }).catch(function(error) {
    console.error("Error removing document: ", error);
  });
}

