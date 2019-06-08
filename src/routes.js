(function(window, document){
    library.getID('view').enroute()
    .route('/', './views/login.html', 'controlador', window.controlador.userLogin)
    .route('/registro', './views/registro.html', 'controlador', window.controlador.userRegister)
    .route('/muro', 'views/muro.html', 'controlador', window.controlador.timeLine)
 
 })(window, document);