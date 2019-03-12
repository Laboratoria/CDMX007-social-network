// id de divs a los que se les va a cambiar la clase para que le diga al usuario si es válida su información
// const divOfName = document.getElementById('input-name').value;
// console.log(divOfName);
// const divOfLastName = document.getElementById('input-last-name');
// const divOfNickName = document.getElementById('input-nick-name');
// const divOfState = document.getElementById('input-state');
// const divOfPreferences = document.getElementById('input-preferences');

// Función para detectar si los inputs del form están vacíos
// let mainApp = {};
// let data = {};
// (() => {
//   const firebase = appFireBase;
//   let uid = null;
//   firebase.auth().onAuthStateChanged((user) => {
//     if (user) {
//       // Usuario está registrado
//       uid = user.uid;
//     } else {
//       //redirecciona a la pagina para login
//       uid = null;
//       window.location.replace("../html/login.html")
//     }
//   });

//   const logOut = () => {
//     firebase.auth().signOut();
//   }

//   const messageHandler = (err) => {
//     if (!!err) {
//       console.log(err)
//     } else {
//       console.log("success");
//     }
//   }

//   const fnCreate = () => {
//     const inputName = document.getElementById('validationServer01').value;
//     const inputLastName = document.getElementById('validationServer02').value;
//     const inputAge = document.getElementById('validationServer05').value;
//     const inputNickName = document.getElementById('validationServerUsername').value;
//     const inputState = document.getElementById('validationServer03').value;
//     const inputPreferences = document.getElementById('validationServer04').value;
//     const path = 'users/' + uid;
//     data = {
//       name: inputName,
//       lastname: inputLastName,
//       age: inputAge,
//       nickName: inputNickName,
//       state: inputState,
//       preferences: inputPreferences,
//       posts: []
//     }
//     console.log(path);
//     appFireBase.databaseApi.create(path, data, messageHandler);
//     return data;
//   }

//   const fnRead = () => {

//   }

//   const fnUpdate = () => {

//   }

//   const fnDelete = () => {

//   }

//   mainApp.Create = fnCreate;
//   mainApp.Read = fnRead;
//   mainApp.Update = fnUpdate;
//   mainApp.Delete = fnDelete;

//   const sendButton = document.getElementById('send');
//   const profile = document.getElementById("profile");
//   const userInformation = document.getElementById("user-information");
//   sendButton.addEventListener('click', (e) => {
//     event.preventDefault(e);
//     fnCreate();
//     profile.style.display = "block";
//     userInformation.style.display = "none";
//   })
//   mainApp.logOut = logOut;
// })();


// Aquí deberíamos hacer las funciones del DOM, y pasar todo lo anterior al main.js

//evento click en el modal:
const postButton = document.getElementById('post-btn');
const postCard = document.getElementById('post-card');
postButton.addEventListener('click', () => {
  //agrarrar el valor del textarea del modal para ponerlo en la tarjeta de la publicación :D
  const messageText = document.getElementById('message-text');
  messageText.innerHTML = '';
  const posting = document.getElementById('posting');
  posting.insertAdjacentHTML('beforeend', `<div class="card text-white bg-dark mb-3" style="max-width: 18rem;">
  <div class="card-header">${data.nickName}</div>
  <div class="card-body">
    <p id="post-card" class="card-text">${messageText.value}</p>
  </div>
</div>`);
  
})
