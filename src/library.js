(function(window, document) {
    var start = function () {
        var element = null; 
        var marco = null;
        var routes = {};
        var controladores = {};
        var ctrlActual = null;
        var library = {
            getID: function(id) {
                element = document.getElementById(id); 
                return this; 
            },
            control: function(name, ctrl){
                controladores[name] = {'controlador': ctrl}
            },
            enroute: function(){
                marco = element; 
                return this;
            },
            route: function(ruta, plantilla, controlador, carga){
                routes[ruta] = {
                    'plantilla': plantilla,
                    'controlador': controlador, 
                    'carga': carga
                }
                return this; 
            },
            routeManager: function(){
                var hash = window.location.hash.substring(1) || '/';
                destiny = routes[hash]; 
                xhr = new XMLHttpRequest(); 
                if (destiny && destiny.plantilla){
                    if (destiny.controlador){
                        ctrlActual = controladores[destiny.controlador] ;
                    }
                    xhr.addEventListener('load', function(){
                        marco.innerHTML = this.responseText; 
                        setTimeout(function(){
                            if (typeof(destiny.carga)==='function'){
                                destiny.carga(); 
                            }
                        }, 2000)
                       
                    }, false); 
                    xhr.open('get', destiny.plantilla, true); 
                    xhr.send(null); 
                } else {
                    window.location.hash = '#/'
                }
            }
        }; 
        return library; 
    }
    if(typeof window.library === 'undefined'){
        window.library = window._ = start(); 
        window.addEventListener('load', library.routeManager, false)
        window.addEventListener('hashchange', library.routeManager, false)
    } else {
        console.log('Se esta llamando la libreria nuevamente'); 
    }
})(window, document); 

