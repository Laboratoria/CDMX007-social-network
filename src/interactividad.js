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
inter_es = {
    cancel: 'Cancelar',
    clear: 'Limpiar',
    done:    'Ok',
    previousMonth:    '‹',
    nextMonth:    '›',
    months:    [
        'Enero',
        'Febrero',
        'Marzo',
        'Abril',
        'Mayo',
        'Junio',
        'Julio',
        'Agosto',
        'Septiembre',
        'Octubre',
        'Noviembre',
        'Diciembre'
    ],
    monthsShort:    [
        'Ene',
        'Feb',
        'Mar',
        'Abr',
        'May',
        'Jun',
        'Jul',
        'Ago',
        'Sep',
        'Oct',
        'Nov',
        'Dic'
    ],
    weekdays:    [
        'Domingo',
        'Lunes',
        'Martes',
        'Miércoles',
        'Jueves',
        'Viernes',
        'Sábado'
    ],
    weekdaysShort:    [
        'Dom',
        'Lun',
        'Mar',
        'Mié',
        'Jue',
        'Vie',
        'Sáb'
    ],
    weekdaysAbbrev:    ['D', 'L', 'M', 'M', 'J', 'V', 'S']
};
var options = {
    i18n: inter_es,
};
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.datepicker');
    var instances = M.Datepicker.init(elems, options);
  });

  /*Cambio de iconos en el nav*/
  let elementsArray = document.querySelectorAll(".img_nav");
  elementsArray.forEach(function(elem) {
      elem.addEventListener("click", ()=> {
        elementsArray.forEach(function(elemento) {
          elemento.classList.remove('active2');
        });
         elem.classList.add('active2');
      });
  });

  /* ocultar menu el desktop */
//   const navMenu = document.getElementById('top-nav');
//   navMenu.addEventListener('click', () => {
//     navMenu.classList.add('hide');
//   });

   