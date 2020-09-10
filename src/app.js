const txtEmail = document.getElementById('txtEmail');
const txtPassword = document.getElementById('txtPassword');
const btnLogin = document.getElementById('btnLogin');
const btnSingUp = document.getElementById('btnSignUp');
const txtName = document.getElementById('name');
const txtUserName = document.getElementById('user-name');
const txtBirthday = document.getElementById('birthday');
const btnSaveProfile = document.getElementById('save-profile');
const nav = document.getElementById('top-nav');
const txtTitle = document.getElementById('input_text')
const txtPost = document.getElementById('txtPost')
const btnPost = document.getElementById('btn-post')

/*Inicializacion para enlazar el proyecto a firebase */
let config = {
  apiKey: "AIzaSyA-br4fjgN3TqUQgfE-Y2eGzfdajBuwa_Q",
  authDomain: "red-social-laboratoriamx.firebaseapp.com",
  databaseURL: "https://red-social-laboratoriamx.firebaseio.com",
  projectId: "red-social-laboratoriamx",
  storageBucket: "red-social-laboratoriamx.appspot.com",
  messagingSenderId: "727465925051"
 };
 firebase.initializeApp(config);
 /*nombre a la base de datos*/
 let db = firebase.firestore();
 /* observador*/
 function watcher() {
 firebase.auth().onAuthStateChanged(function (user) {
 if (user) {
  console.log('usuario activo');
  window.location.href = '#home';
  if(user.emailVerified == true) {
  loged(user);
  window.location.href = '#home2'
  content.classList.remove('hide');
  nav.classList.remove('hide');
  }
  if(user.emailVerified == false) {
    console.log('verifica tu correo')
  }
  var displayName = user.displayName;
  var email = user.email;
  var emailVerified = user.emailVerified;
  var photoURL = user.photoURL;
  var isAnonymous = user.isAnonymous;
  var uid = user.uid;
  localStorage.setItem('useruid' , uid)
  localStorage.setItem('email' , email)
  var providerData = user.providerData;
 } else {
  // navMenu.classList.add('hide');
  window.location.href = '#home';
  const content = document.getElementById('content')
  const navmenu = document.getElementById('navmenu')
  content.classList.add('hide');
  nav.classList.add('hide');
  console.log('no existe usuario activo');
 }
 });
 } watcher();

/*para crear usuario*/
btnSingUp.addEventListener('click', e => {
  const email = txtEmail.value;
  const pass = txtPassword.value;
  firebase.auth().createUserWithEmailAndPassword(email, pass)
.then(function () {
  verify()
  saveData()
  alert('En breve recibirás un correo electrónico para verificar tu cuenta')
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
   console.log('sending email');
  }).catch(function (error) {
  console.log(error);
  });
 }

/* boton para iniciar sesión*/
const txtEmail2 = document.getElementById('txtEmail2');
const textPassword2 = document.getElementById('txtPassword2');
const navMenu = document.getElementById('top-nav');
btnLogin.addEventListener('click', e => {
 const email2 = txtEmail2.value;
 const pass2 = textPassword2.value;
 firebase.auth().signInWithEmailAndPassword(email2, pass2).catch(function (error) {
 var errorCode = error.code;
 var errorMessage = error.message;
 //  console.log(errorCode);
 //  console.log(errorMessage);
 console.log('contraseña y/o correo invalido')
 document.getElementById("errorMessage").innerHTML = "Contraseña o correo inválidos";
   setTimeout(function(){
       document.getElementById("errorMessage").innerHTML = "";
   }, 2000);
 });
});

/* funcion para entrar a pagina principal*/
const container = document.getElementById('name-user');
let userNickname = localStorage.getItem('nickname');
const footer = document.getElementById('log-out-button');
function loged(user) {
 var user = user;
 if (user.emailVerified) {
   window.location.href = '#home2'
   container.innerHTML =
   `
   <div class="row name-user"><p> Hola ${userNickname}</p>
   `
   footer.innerHTML = `
   <button onClick="logOut()"  class= "logOutButton btn-small">Cerrar Sesión</button>
   `
 } interactividad();
}

/* Boton de cerrar sesión*/
const btnLogout = document.getElementById('btnLogout');
function logOut() {
 //pop up de confirmación
 firebase.auth().signOut()
 .then(function () {
   console.log('cerrando sesion')
   window.location.href = '#home'
 watcher()
 })
 .catch(function (error) {
  console.log(error)
 })
}

// /* /leer documento firestone para perfil de usuario**/
let uidOfUser = localStorage.getItem('useruid')
var table = document.getElementById('table2');
db.collection("users").doc(uidOfUser).onSnapshot(function(doc) {
 let userNickname = localStorage.setItem('nickname' , doc.data().user)
 table.innerHTML= "";
     table.innerHTML +=
     `
     <p id="user-nameProfile">Nombre de usuario: ${doc.data().user}</p>
     <p id="nameProfile">Nombre: ${doc.data().name}</p>
     <p id="birthdayProfile">Cumpleaños: ${doc.data().birthday}</p>
     <p id= "txtEmailProfile">Email: ${doc.data().email}</p>
     `
 });
  
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
     console.error("Error updating document: ", error);
   });
 })
}

/*oculta boton */
const btnMas = document.getElementById('btn-mas');
btnMas.addEventListener('click', () => {
 btnEdit.classList.add('mi-hide');
 btnPost.classList.remove('mi-hide');
})
/*validar formulario de post*/
function validarFormulario(){
 console.log('validando')
 if(txtTitle.value == "" || txtPost.value == ""){
   console.log('Campo de titulo vacio')
   txtTitle.classList.add('error')
   txtPost.classList.add('error')
   return false;
 }else {
   return true;
 }
}
txtTitle.addEventListener('keyup', (event) =>{
 if(txtTitle.classList.contains('error')){
   txtTitle.classList.remove('error')
 }
});
txtPost.addEventListener('keyup', (event) =>{
 if(txtPost.classList.contains('error')){
   txtPost.classList.remove('error')
 }
});

/*Guardar la informacion en la bd post PUBLICAR*/
// btnPost.addEventListener('click', saveDataInPostColection => {
  btnPost.addEventListener('click', (event) =>{
    event.preventDefault()
   if(validarFormulario() == false){
     // aqui no pasa la validacion
     console.log(' campo vacio')
     return;
   }else{
     // si pasa la validacion ejecuta esto
     const privacy = document.getElementById("select-privacy").value //valor del select publico1 privado2
     //console.log(privacy)
     var post = txtPost.value;
     var title = txtTitle.value;
     const authorUid = firebase.auth().currentUser;
     console.log(authorUid);
     if(privacy == 2){
       //condicional si es 1 el campo public será true y eso se imprimirá en el feed
         db.collection("posts").add({
         authoruid: authorUid.uid,
         nick: authorUid.email,
         title: title,
         date: "",
         post: post,
         public: true,
         like: 0
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
         public: false,
         like: 0
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
   }
  
  })

/*leer documento firestone*/
var showPost = document.getElementById('container-feed-news');
db.collection("posts").onSnapshot((querySnapshot) => {
   showPost.innerHTML= "";
   let uidOfUser = localStorage.getItem('useruid')
 querySnapshot.forEach(function(doc) {
   if(doc.data().public == true && uidOfUser == doc.data().authoruid) { //condicional busca los public y los que tienen el mismo iud para imprimirlos con permisos para editar y eliminar
     showPost.innerHTML += `
     <div class="card">
     <div class="card-content">
     <span class="card-title activator grey-text text-darken-4">${doc.data().title}<i class="material-icons right">more_horiz</i></span>
     <p>${doc.data().post}</p>
     <button id='${doc.id}' onclick="this.innerHTML = 'Buena Idea'" class="likeBtn" >like</button>
     </div>
     <div class="card-reveal">
     <span class="card-title grey-text text-darken-4"><i class="material-icons right">close</i></span>
     <a  onclick="edit('${doc.id}', '${doc.data().title}', '${doc.data().post}')"><i class="material-icons">create</i>Editar publicación</a><br>
     <br><a id="${doc.id}" class="modal-close mi-clase" onclick="removePost('${doc.id}')"><i class="material-icons">delete</i>Eliminar</a>
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
     <button id='${doc.id}' onclick="this.innerHTML = 'Buena Idea'" class="likeBtn" >like</button>
     </div>
     </div>`
   }
 });
});

/*Editar una publicaicon "GUARDAR"*/
const btnEdit = document.getElementById('btn-edit');
function edit(id, title, post) {
     btnPost.classList.add('mi-hide');
     btnEdit.classList.remove('mi-hide');
     window.location.replace('#list');
     document.getElementById('txtPost').value = post
     document.getElementById('input_text').value = title
 btnEdit.onclick = function () {
   if(validarFormulario() == false){
     // aqui no pasa la validacion
     console.log(' campo vacio')
     return;
   }else{
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

}

/*eliminar post*/
function removePost(id){
  let remove = confirm('¿Quieres eliminar esta publicación?') 
  if(remove == true) {
 db.collection("posts").doc(id).delete().then(function() {
  console.log("Document successfully deleted!");
 }).catch(function(error) {
  console.error("Error removing document: ", error);
 })
}
}

/*IMPRIMIR PUBLICACIONES PRIVADAS EN EL PERFIL DEL USUARIO*/
var personalWall = document.getElementById('personalWall');
db.collection("posts").onSnapshot((querySnapshot) => {
 personalWall.innerHTML= "";
 let uidOfUser = localStorage.getItem('useruid')
 querySnapshot.forEach(function(doc) {
   if(doc.data().public == false && uidOfUser == doc.data().authoruid) {
     personalWall.innerHTML += `
     <div class="card">
     <div class="card-content">
     <span class="card-title activator grey-text text-darken-4">${doc.data().title}<i class="material-icons right">more_horiz</i></span>
     <p>${doc.data().post}</p>
     </div>
     <div class="card-reveal">
     <span class="card-title grey-text text-darken-4"><i class="material-icons right">close</i></span>
     <a onclick="edit('${doc.id}', '${doc.data().title}', '${doc.data().post}')"><i class="material-icons">create</i>Editar publicación</a><br><br>
     <br><a id="${doc.id}" class="modal-close mi-clase" onclick="removePost('${doc.id}')"><i class="material-icons">delete</i>Eliminar</a>
     </div>
     </div>  `
     interactividad()
   }
 });
});