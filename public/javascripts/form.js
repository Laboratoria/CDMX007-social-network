//CONSTANTES
const db          = firebase.database(); //metodo que contiene los metodos para utilizar real time
const rootRef     = firebase.database().ref(); //ref es un metodo que nos premite dirigirnos a algun lugar en especifico
const postButton  = document.getElementById('post');
const wall        = document.getElementById('wall');
const newPost     = document.getElementById('message-text');
const userMyName  = document.getElementById('user-name')
const burgerBtn   = document.getElementById('burger');

const inputFantasticName  = document.getElementById('validationServerUsername');
const inputPreferences    = document.getElementById('validationServer04');
const inputAge            = document.getElementById("validationServer05");
const inputState          = document.getElementById("validationServer03");


let usersData = {};
let userId = null;

//INIT//
fetch('https://tejiendo-en-azul.firebaseio.com/users.json').then(
  response => {
    return response.json();
  }).then(data => {
  usersData = data;
  return usersData;
}).then((usersData) => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      userId = user.uid
    }
  })
})

// FUNCIONES//

//SPA
const app = {
  pages: [],
  show: new Event('show'),
  init: () => {
    app.pages = document.querySelectorAll('.page'); //identifica las secciones que tienen la clase page
    app.pages.forEach((pg) => {
      pg.addEventListener('show', app.pageShown);
    })
    document.querySelectorAll('.nav-link').forEach((link) => {
      link.addEventListener('click', app.nav);
    })
    history.replaceState({}, 'Login', '#login');
    window.addEventListener('popstate', app.poppin);
  },
  nav: (ev) => {
    ev.preventDefault(); //quita el evento que te lleva al inicio de la página (href="#")
    let currentPage = ev.target.getAttribute('data-target');
    document.querySelector('.active').classList.remove('active');
    document.getElementById(currentPage).classList.add('active');
    //recuerda la página a la que se mueve, y le agrega # a la url de la página donde está posicionado
    history.pushState({}, currentPage, `#${currentPage}`)
  },
  poppin: (ev) => {
    let hash = location.hash.replace('#', '');
    document.querySelector('.active').classList.remove('active');
    document.getElementById(hash).classList.add('active');
  }
}
document.addEventListener('DOMContentLoaded', app.init);

//Validación de input edad solo acepta números 
const validationAge = (number) => {
  if (isNaN(number.age.value) == true || /^[1-9]\d$/.test(number.age.value) == false) {
    alert('Edad debe ser un número');
    correcto = false;
  }
}

//EVENTOS 

//NUEVOS POST
postButton.addEventListener('click', (event) => {
  firebase.auth().onAuthStateChanged((user) => {
    const newPostData = {
      message: newPost.value
    }

    const postDataWithUser = {
      userId: usersData[user.uid].name,
    }

    const newPostKey = rootRef.child('post').push().key;

    db.ref('users' + '/' + userId + '/post/' + newPostKey).update(newPostData);
    db.ref(`wall/${newPostKey}`).update(postDataWithUser);
  })
  event.preventDefault();
  location.reload();
})

// Nombre de usuario
userMyName.innerHTML = displayName;
db.ref('users/').on('value', (snapshot) => {
  const allUsers = snapshot.val(); //retorna el objeto de usuarios de base de datos
  wall.innerHTML = '';
  for (usersId in allUsers) {
    const usersNickName    = usersData[usersId].nickName; //obtenemos los nicknames de todos los usuarios
    const usersPosts       = usersData[usersId].post; //obtenemos los posts de cada usuario
    let usersPicture       = usersData[usersId].photoUser;
    const usersName        = usersData[usersId].name;
    const usersPreferences = usersData[usersId].preferences;
    for (eachPost in usersPosts) {
      if (usersPosts.hasOwnProperty(eachPost)) {
        const element = usersPosts[eachPost];
        wall.insertAdjacentHTML('afterend', `<div class="card text-white bg-dark mb-3" style="max-width: 18rem;">
        <figure><img src = "${usersPicture}" alt = "Imagen de usuario" width = "30%" height = "auto" class = "img-thumbnail"></figure>
        <div class="card-header">${usersNickName}</div>
        <div class="card-body">
        <p id="post-card" class="card-text">${element.message}</p>
        </div> 
        <div id="${usersId}" ><div id="${eachPost}" class = "trash-btn"><i class="far fa-trash-alt"></i></div>
        </div>
        </div>`)
        //identifica al usuario activo, y compara su id con los id de la base de datos
        if (firebase.auth().currentUser.uid !== usersId) {
          //siempre que el id no coincida con el de usuario activo, va a quitar el ícono de basurita
          // por lo tanto usuario solo tendrá acceso a borrar sus publicaciones
          document.getElementById(usersId).style.display = 'none';
        }
      }
      //sección perfil usuario
      //Primera parte 
      if (firebase.auth().currentUser.uid === usersId) {
        document.getElementById('user-photo').innerHTML = `
        <img src = " ${photoURL} "  class="img-thumbnail" alt = "Imagen de usuario" width = "100%" height = "auto">`;
        document.getElementById('user-name').innerHTML = usersName;
        //Segunda parte
        document.getElementById('nick-name').innerHTML =
          `<br>${usersNickName}</br>`;
        //Tercera parte
        document.getElementById('preferences').innerHTML =
          `<br>${usersPreferences}</br>`;
      }
    }
  }

  //Evento borrar publicación
  const deleteElement = document.getElementsByClassName('trash-btn');
  for (let i = 0; i < deleteElement.length; i++) {
    deleteElement[i].addEventListener('click', (ev) => {
      ///Alert para confirmar que el usuario quiere cancelar la publicación
      const option = confirm("Estás seguro de que quieres eliminar tu publicación");
      if (option == true) {
        alert('Mensaje eliminado')
        const postId = ev.currentTarget.id;
        fnDelete(uid, postId);
        location.reload();
      } else {
        alert('Cancelado');
      }

    })

    ///// Función para borrar publicaciones /////
    const fnDelete = (uid, postId) => {
      db.ref('users/').on('value', (snapshot) => {
        console.log('mensaje borrado')

        firebase.auth().onAuthStateChanged((user) => {
          if (!!user) {
            const allUsers = snapshot.val(); //retorna el objeto de usuarios de base de datos
            for (usersId in allUsers) {
              if (usersId === uid) {
                const usersPosts = usersData[usersId].post;
                for (eachPost in usersPosts) {
                  if (eachPost === postId) {
                    db.ref('users' + '/' + userId + '/post/' + eachPost).set(null);
                  }
                }
              }
            }
          }
        })
      })
    }
  }
})

////Menú hamburguesa////
burgerBtn.addEventListener('click', () => {
  let bars = document.getElementById("header-buttons");
  if (bars.style.display === "block") {
    bars.style.display = "none";
  } else {
    bars.style.display = "block";
  }
})

// /// Funcion para validar input nombrefantastico
// const validateFantasticName = (string) => {
//   if (string.value === '') {
//     // alert('Por favor escribe u n nombre de usuario')
//   }
// }

// validateFantasticName(inputFantasticName);


// //input de ciudad o estado
// const validationState = (string) => {
//   if (string.value === '') {
//     alert("Te falta decirnos de dónde eres")
//   }
// }
