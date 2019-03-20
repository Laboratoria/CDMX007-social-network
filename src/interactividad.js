const interactividad = () => {
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems);
 
    var elems = document.querySelectorAll('.dropdown-trigger');
    var instances = M.Dropdown.init(elems);
    console.log('botón init')
 }
    interactividad()
 
//    document.addEventListener('DOMContentLoaded', function() {
//        var elems = document.querySelectorAll('.modal');
//        var instances = M.Modal.init(elems);
//      });
// const icono = document.querySelector('.home2');
    // icono.addEventListener('click', () => {
    // icono.classList.add('active');
    // });
    // const icono2 = document.querySelector('.msg');
    // icono2.addEventListener('click', () => {
    // icono2.classList.add('active');
    // });


    // <ul id='dropdown-${doc.id}' class='dropdown-content'>
    //   <li><a class="modal-trigger" data-target="idModal" onclick="editPost('${doc.id}', '${doc.data().post}')">Editar</a>