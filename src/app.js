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
    //  console.log(user)
     loged(user);
     window.location.href = '#home2'
     content.classList.remove('hide');
     if(user.emailVerified == true) {
      //  window.location.replace('main.html');
      //  console.log('main.html')

     }
     if(user.emailVerified == false) {
    //  console.log('verifica tu correo')
     }
     // User is signed in.
     var displayName = user.displayName;
     var email = user.email;
    //  console.log(user.emailVerified);
     var emailVerified = user.emailVerified;
     var photoURL = user.photoURL;
     var isAnonymous = user.isAnonymous;
     var uid = user.uid;
    localStorage.setItem('useruid' , uid)
     var providerData = user.providerData;
     // ...
   } else {
     // navMenu.classList.add('hide');
     window.location.href = '#home';
     const content = document.getElementById('content')
     const navmenu = document.getElementById('navmenu')
     content.classList.add('hide');
     // //     // User is signed out.
     // ...
     console.log('no existe usuario activo');
     //container.innerHTML = ``;
   }
 });
} watcher();
 
 
/*para crear usuario*/
btnSingUp.addEventListener('click', e => {
 const email = txtEmail.value;
//  console.log(email)
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
    //  console.log("Document written");
     txtEmail.value = "";
     txtPassword.value = "";
     txtUserName.value = "";
     txtBirthday.value = "";
   })
   .catch(function (error) {
    //  console.error("Error adding document: ", error);
   });
}
/* Verificacion de correo electronico*/
function verify() {
 var user = firebase.auth().currentUser;
 user.sendEmailVerification().then(function () {
   // Email sent.
  //  console.log('sending email');
 }).catch(function (error) {
   // An error happened.
  //  console.log(error);
 });
}
/* boton para iniciar sesión*/
const txtEmail2 = document.getElementById('txtEmail2');
const textPassword2 = document.getElementById('txtPassword2');
const navMenu = document.getElementById('top-nav');
btnLogin.addEventListener('click', e => {

 const email2 = txtEmail2.value;
 const pass2 = textPassword2.value;
//  console.log(email2, pass2);

 firebase.auth().signInWithEmailAndPassword(email2, pass2).catch(function (error) {
   var errorCode = error.code;
   var errorMessage = error.message;
  //  console.log(errorCode);
  //  console.log(errorMessage);
   //inner contraseña o correo invalido********
 });
});

const container = document.getElementById('container-feed');
// const nav2 = document.getElementById('top-nav2');
/* funcion para entar a pagina principal (feed)*/
function loged(user) {
 var user = user;
 if (user.emailVerified) {
    window.location.href = '#home2'
   // aqui va funcion para SPA
//    nav2.innerHTML = ` <div class="row">
//    <nav id="top-nav " onClick="nav()" class="top-nav ">
//        <ul>
//            <li id="icon-logo" class="logo col l9">SproutThink</li>
//            <li class="menu col s4 m4 l1" data-target="home2"><span
//                        data-target="home2" class="nav-link img_nav home active2" id=""></span></li>
//            <li class="menu col s4 m4 l1" data-target="list"><a href="#" data-target="list" class="nav-link"><span
//                        data-target="list" class="nav-link img_nav msg" id=""></span></a></li>
//            <li class="menu col s4  m4 l1" data-target="detail"><span
//                        data-target="detail" class="nav-link img_nav profile" id="profile"></span></li>
//        </ul>
//    </nav>
// </div>`
   container.innerHTML =
   `
   <div class="row user-email"><p> Hola ${user.email}</p>
   <button onClick="logOut()"  class= "btn btn-action">Cerrar Sesión</button></div>`;
 }
}

/* Boton de cerrar sesión*/
const btnLogout = document.getElementById('btnLogout');
function logOut() {
 //pop up de confirmación
 firebase.auth().signOut()
   .then(function () {
    //  console.log('saliendo..')
     window.location.href = '#home'
   })
   .catch(function (error) {
    //  console.log(error)
   })
}

// function nav() {
//  //pop up de confirmación
//  firebase.auth().signOut()
//    .then(function () {
//      console.log('saliendo..')
    
//    })
//    .catch(function (error) {
//      console.log(error)
//    })
// }

// /******************* */leer documento firestone***********/
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
  //  console.log("Document successfully deleted!");
 }).catch(function(error) {
  //  console.error("Error removing document: ", error);
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
      //  console.log("Document successfully updated!");
   })
   .catch(function(error) {
       // The document probably doesn't exist.
      //  console.error("Error updating document: ", error);
   });
 })
}



//  const btnDeletePost = document.getElementById(doc.id);
//  function removePost(id){
  // const btnDeletePost = document.getElementById('delete-post');
  // btnDeletePost.addEventListener('click' , function() {
    //   console.log(btnDeletePost.id)
    //  db.collection("posts").doc(id).delete().then(function() {
      //    console.log("Document successfully deleted!");
//  }).catch(function(error) {
//    console.error("Error removing document: ", error);
//  })
// })
// }

// const buttons = document.getElementsByClassName('mi-clase')
// console.log(buttons)





/*Guarda la informacion en la bd post*/
 const btnPost = document.getElementById('btn-post')
 btnPost.addEventListener('click', saveDataInPostColection => {
   const privacy = document.getElementById("select-privacy").value //valor del select publico1 privado2
   console.log(privacy)
  const txtPost = document.getElementById('txtPost')
  const txtTitle = document.getElementById('input_text')
  var post = txtPost.value;
  var title = txtTitle.value;
  const authorUid = firebase.auth().currentUser;
 console.log(authorUid);
 if(privacy == 1 ){ //condicional si es 1 el campo public será true y eso se imprimirá en el feed
  db.collection("posts").add({
    authoruid: authorUid.uid,
    nick: authorUid.email,
    title: title,
    date: "",    
    post: post,
    public: true
  })
    .then(function (docRef) {
      console.log("Document written with ID: ", docRef.id);
      txtPost.value = "";
      txtTitle.value = "";
      privacy.value = "";
      window.location.replace('#home2');
    })
    .catch(function (error) {
      console.error("Error adding document: ", error);
    });
  } else { //si no es true el campo public es false
    db.collection("posts").add({
      authoruid: authorUid.uid,
      nick: authorUid.email,
      title: title,
      date: "",    
      post: post,
      public: false
    })
      .then(function (docRef) {
        console.log("Document written with ID: ", docRef.id);
        txtPost.value = "";
        txtTitle.value = "";
        privacy.value = "";
        window.location.replace('#detail');
      })
      .catch(function (error) {
        console.error("Error adding document: ", error);
      });
  }
  })


/*leer documento firestone*/
var showPost = document.getElementById('container-feed-news');
db.collection("posts").onSnapshot((querySnapshot) => {
showPost.innerHTML= "";
let uidOfUser = localStorage.getItem('useruid')
querySnapshot.forEach(function(doc) {
  // doc.data() is never undefined for query doc snapshots
    //obtiene datos de firestore y los pinta en tiempo real
    if(doc.data().public == true && uidOfUser == doc.data().authoruid) { //condicional busca los public y los que tienen el mismo iud para imprimirlos con permisos para editar y eliminar
      // console.log(doc.id)
      showPost.innerHTML += `
      <div class="card">
      <div class="card-content">
        <span class="card-title activator grey-text text-darken-4">${doc.data().title}<i class="material-icons right">more_vert</i></span>
        <p>${doc.data().post}</p>
      </div>
      <div class="card-reveal">
      <span class="card-title grey-text text-darken-4"><i class="material-icons right">close</i></span>
      <a onclick="edit('${doc.id}', '${doc.data().title}', '${doc.data().post}')">Editar</a>
     <a id="${doc.id}" class="modal-close mi-clase" onclick="removePost('${doc.id}')">Aceptar</a>
      </div>
    </div>
     `
    interactividad()
    // removePost(doc.id)
} else if (doc.data().public == true) { //otro condiconal para solo imprimir los publicos sin permisos
    showPost.innerHTML += `
    <div class="card">
    <div class="card-content">
      <span class="card-title activator grey-text text-darken-4">${doc.data().title}</span>
      <p>${doc.data().post}</p>
    </div>
  </div>`
 }
});
});




function edit(id, title, post) {
  window.location.replace('#list');
document.getElementById('txtPost').value = post
document.getElementById('input_text').value = title
let btnEdit = document.getElementById('btn-edit')

  btnEdit.onclick = function () {
      var updatePost = db.collection('posts').doc(id);
      var newTitle = document.getElementById('input_text').value;
      var newPost = document.getElementById('txtPost').value;
      return updatePost.update({
          title: newTitle,
          post: newPost,
      }).then(function () {
          console.log('Registro actualizado correctamente');
          document.getElementById('txtPost').value = '',
              document.getElementById('input_text').value = '',
              window.location.replace('#home2')
      }).catch(function (error) {
          var errorCode = error.code;
          var errorMessage = error.message;
          alert('Error de codigo:\n ' + errorCode + ' Mensaje de Error:\n ' + errorMessage);
      })
  }
}

/*eliminar post*/
function removePost(id){
  confirm('¿Quieres eliminar esta publicación?')
 db.collection("posts").doc(id).delete().then(function() {
   console.log("Document successfully deleted!");
 }).catch(function(error) {
   console.error("Error removing document: ", error);
 })
 }

 //IMPRIMIR PUBLICACIONES PRIVADAS EN EL PERFIL DEL USUARIO//

var personalWall = document.getElementById('personalWall');
db.collection("posts").onSnapshot((querySnapshot) => {
personalWall.innerHTML= "";
let uidOfUser = localStorage.getItem('useruid')
querySnapshot.forEach(function(doc) {

  // doc.data() is never undefined for query doc snapshots
    //obtiene datos de firestore y los pinta en tiempo real
    if(doc.data().public == false && uidOfUser == doc.data().authoruid) {
      // console.log(doc.id)
      personalWall.innerHTML += `
      <div class="card">
      <div class="card-content">
        <span class="card-title activator grey-text text-darken-4">${doc.data().title}<i class="material-icons right">more_vert</i></span>
        <p>${doc.data().post}</p>
      </div>
      <div class="card-reveal">
      <span class="card-title grey-text text-darken-4"><i class="material-icons right">close</i></span>
      <a onclick="edit('${doc.id}', '${doc.data().title}', '${doc.data().post}')">Editar</a>
     <a id="${doc.id}" class="modal-close mi-clase" onclick="removePost('${doc.id}')">Aceptar</a>
      </div>
    </div>
     `
    interactividad()
    // removePost(doc.id)
}
});
});
