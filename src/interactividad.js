const interactividad = () => {
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems);
 
    var elems = document.querySelectorAll('.dropdown-trigger');
    var instances = M.Dropdown.init(elems);
    console.log('botón init')
 }
    interactividad()
 
   document.addEventListener('DOMContentLoaded', function() {
       var elems = document.querySelectorAll('.modal');
       var instances = M.Modal.init(elems);
     });