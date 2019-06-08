# Cuisine Divine

Cuisine Divine es una red social para estudiantes de Gastronomía, ubicados en la Ciudad de México, que estén interesados en la alta cocina. 
![Cuisine Divine](./src/images/CuisineDivine.png)

## Comenzando

Para hacer una copia de este proyecto, necesitas hacer fork y después clonarlo.
Este proyecto necesito Bootstrap para la parte del registro, así que, considera la instalación o los links del mismo.
Utilizamos firebase para la base de datos y otros servicios. Puedes crear tu propio proyecto en la consola de firebase y pegar en tu proyecto los requerimientos de inicialización.

## Construido con 

Cuisine Divine es un proyecto Single-page Application.
Utilizamos Bootstrap para la el formulario de registro.Todo lo demás esta diseñado con CSS, HTML5 y JavaScript vanilla.
Utilizamos Firebase para login, autentificación de usuarios y base de datos.
En el Single-page Application utilizamos el siguiente video como referencia para hacer este proyecto.
[Librería Single-page Application](https://youtu.be/aY7eNeJWcjU).

## Historias de usuario

En este proyecto tomamos en cuenta las siguientes historias de usuario :

* Yo como usuario, quiero poder loguearme con Facebook y con Google para agilizar el proceso.

* Yo como usuario, quiero poder acceder a mi cuenta a traves de correo y contraseña.

* Yo como usuario, quiero poder hacer publicaciones.

* Yo como usuario, quiero poder borrar y editar mis publicaciones.

* Yo como usuario, quiero poder dar Like a las publicaciones que me gusten de otros usuarios y mías.

Las cuales se completaron siempre pensando en los usuarios de Cuisine Divine.

## Experiencia de Usuario

Para conocer el proceso de diseño y pruebas de usuario visita el siguiente link: 
[Cuisine Divine](https://docs.google.com/document/d/1_9Q59hzfISf8It8oZPf3vOPP6TYuqCIUY26qmyv-8uo/edit?usp=sharing)

## Definición del producto
Una Red Social es un servicio online que gira en torno al usuario, que le permite compartir información, generar contenido y estar al tanto de las últimas novedades acerca de sus intereses sociales.

Apesar de que existes varios tipos de redes sociales, estas tienen varios elementos en común:

* Poner en contacto a las personas, de tal forma que, se facilite la conexión de forma rápida y sencilla.

* Permite la interacción entre todos los usuarios de la plataforma, de distintas maneras.Ya sea compartiendo contenido y/o facilitando contacos de interés para el otro usuario.

* Fomenta la posibilidad de que los usuarios que se contacten online acaben entablando un contacto real.

* Permite el contacto ilimitado entre los usuarios desde cualquier lugar.

Con base en esto creamos Cuisine Divine.
En nuestra investigación detectamos que:
* Los estudiantes de gastronomía no tenían un espacio donde recibir recomendaciones de utensilios de trabajo, ingredientes y todo esto a un bajo costo y de buena calidad.
* Los estudiantes de gastronomía necesitan seguirse preparando y no tienen un espacio confiable donde recibir información acerca de cursos ó becas académicas.

Esta investigación también nos arrojo que el los estudiantes de gastronomía que más necesidad tienen de este tipo de información son los estudiantes especializados en la alta cocina.

Es aquí donde hacemos nuestra propuesta de valor, ya que Cuisine Divine no solo es un espacio para compartir recetas, si no que además, pueden interactuar con otros estudiantes de alta cocina para saber donde comprar todos estos utensilios o ingredientes de la mejor calidad. También esta pensado en que se puedan compartir cursos o becas para seguirse perfeccionando.

Las principales funcionalidades de esta red social son:
* Un espacio donde interactuen con otros  estudiantes especilizados en la alta cocina.

* Login con Google y Facebook para un acceso más agíl y rápido.

* Acceso al muro de publicaciones, donde puede darle like a sus publicaciones favoritas, editar y borrar sus propias publicaciones.

Fuente : [3 Elementos básicos de una Red Social](https://www.eipe.es/blog/3-elementos-que-componen-red-social/)

## Especificaciones de Código

* Para este proyecto utilizamos HTML5.
En nuestro HTML no ocurre ningún evento DOM, todo ocurre a través de JavaScript.

* Esta hecho en vanilla JavaScript.
Solo tiene un archivo JS (main.js), que contiene toda la funcionalidad de la web app. Tenemos funciones que firebase nos proporcionó para hacer la parte de Autentificación, Login y llevar datos a nuestra base de datos del proyecto. En cuanto a la base de datos escogimos Cloud Firestore y nuestras publicaciones suceden en tiempo real. En cuanto a funcionalidad del muro, el usuario puede dar me gusta a otras publicaciones, editar y borrar sus propias publicaciones.

* Para nuestra single-page application utilizamos un index.html con un div vacio, y creamos más html para las vistas con el contenido a mostrar y nuestras rutas renderizan la vista que se va mostrar. Nuestro main.js es un objeto que contiene la funcionalidad de cada parte de las vistas, encerrada en objetos separados para que cuando se cargue la vista también cargue la funcionalidad y los elementos que necesita.

## Autores

Este proyecto fue hecho por las estudiantes:
* Analhí Guadarrama Medina
* Elenore Elisa Espinosa Nava
* Gabriela Castro Guzmán

## Agradecimientos 

Agradecemos a Laboratoria por hacer posible este proyecto. Agradecemos a todas nuestras compañeras que nos dieron apoyo en el proyecto, especialmente a Erandi y Ameyali que nos dieron sus consejos para poder implementar algunas funcionalidades. Un agradecimiento especial a Jonh Parra que nos ayudo en los problemas de código. Y a nuestro equipo, muchas gracias por hacer esto posible y dar lo mejor de sí para este proyecto. Gracias chicas, sin ustedes esto no sería posible.

# Creando una Red Social

## Preámbulo

Instagram, Snapchat, Twitter, Facebook, Twitch, Linkedin, etc. Las redes
sociales han invadido nuestras vidas. Las amamos y/u odiamos, y muchos no podemos vivir sin ellas.

Hay redes sociales de todo tipo y para todo tipo de intereses. Por ejemplo,
en una ronda de financiamiento con inversionistas, se presentó una red social
para químicos en la que los usuarios podían publicar artículos sobre sus
investigaciones, comentar en los artículos de sus colegas, y filtrar artículos
de acuerdo a determinadas etiquetas o su popularidad, lo más reciente, o lo
más comentado.

## Introducción

Una emprendedora nos ha encargado crear una red social. No nos da mucho detalle
sobre qué tipo de red social quiere, sólo nos dice que creemos la mejor que
podamos, y que luego la convenzamos de lanzarla al mercado. Nos da ciertos temas
en los que le gustaría invertir:

* Alimentación
* Feminismo
* Educación
* Salud
* Energías Renovables

## Objetivos de Aprendizaje

El objetivo principal de aprendizaje de este proyecto es construir una
[Single-page Application (SPA)](https://es.wikipedia.org/wiki/Single-page_application)
[_responsive_](https://github.com/Laboratoria/curricula-js/tree/master/topics/css/02-responsive)
 (con más de una vista / página) en la que podamos **leer y escribir datos.**

Dicho en palabras sencillas, aprenderás a:

* Aplicar y profundizar todo lo que aprendiste en el proyecto anterior.
* Entender las necesidades de los usuarios para los que crearás el producto y
  que ayudarás a resolver.
* Poner en juego tu creatividad para generar ideas que lleven a una solución
  original y valiosa del problema.
* Contar con el apoyo de tus compañeras, debes trabajar en equipo buscando
  _feedback_ constante.
* Definir como crear la estructura de tu propia data y de qué forma mostrarla en
  el producto.

## Consideraciones generales

Este proyecto se debe "resolver" en tríos.

La lógica del proyecto debe estar implementada completamente en JavaScript (ES6),
HTML y CSS :smiley:. Para este proyecto no está permitido utilizar
frameworks o librerías de JS.

Para comenzar tendrás que hacer un _fork_ y _clonar_ este
repositorio.

## Parte obligatoria

### General

En este proyecto, tú junto a tus compañeras de equipo deberán definir los
_tests_ que consideren necesarios; puedes guiarte de los proyectos
anteriores. Igualmente el proyecto cuenta con una estructura de carpetas
y archivos ya definida pero pueden modificarla de acuerdo a como desean
trabajar la estructura de su proyecto :smiley:.

### Definición del producto

En el `README.md` colocar cómo conociste el mercado de las redes sociales, cómo
descubriste las necesidades de los usuarios, cómo llegaste  la definición final
de tu producto. Si tienes fotos de entrevistas, cuestionarios y/o sketches
(bocetos) compártelos. Es importante que detalles:

* Cuáles son los elementos básicos que tiene una red social
* Quiénes son los principales usuarios de producto
* Cómo descubriste las necesidades de los usuarios
* Qué problema resuelve el producto para estos usuarios
* Cuáles son los objetivos de estos usuarios en relación con el producto
* Cuáles son las principales funcionalidades del producto y cuál es su prioridad
* Cómo verificaste que el producto les está resolviendo sus problemas
* Cómo te asegurarás que estos usuarios usen este producto

Para poder llegar a estas definiciones te recomendamos ver: entrevistas con
usuarios y tests de usabilidad.

### Historias de usuario

Una vez que entiendas las necesidades de tu usuario, escribe las Historias de
Usuario que representen todo lo que el usuario necesita hacer/ver. Asegúrate
de incluir una definición de terminado (definition o done) para cada una.

### Diseño de la Interfaz de Usuario (prototipo de baja fidelidad)

Debes definir cuál será el flujo que seguirá el usuario dentro de tu producto y
con eso deberás diseñar la Interfaz de Usuario (UI por sus siglas en inglés) de
esta red social que siga este flujo.
Este diseño debe representar la solución que se implementará finalmente en
código.

### Responsive

Debe verse bien en dispositivos de pantallas grandes
(computadoras/es, laptops, etc.) y pequeñas (tablets, celulares, etc.). Te
sugerimos seguir la técnica de `mobile first` (más detalles sobre esta técnica
al final).

### Pruebas unitarias (unit tests)

Los tests unitarios deben cubrir un mínimo del 70% de _statements_, _functions_,
_lines_, y _branches_.

### Implementación de la Interfaz de Usuario (UI y comportamiento de Interfaz de Usuario)

La idea para este producto es que el producto a desarrollar siga los
lineamientos propuestos en el diseño de la interfaz de usuario. Asegúrate a lo
largo de la implementación que los elementos propuestos están siendo
implementados correctamente.

La interfaz debe permitir lo siguiente:

#### Creación de cuenta de usuario e inicio de sesión

* Login con Firebase:
  - Para el login y las publicaciones en el muro puedes utilizar [Firebase](https://firebase.google.com/products/database/)
  - Autenticación con Facebook y/o Google y/o Email.
* Validaciones:
  - No pueden haber usuarios repetidos.
  - La cuenta de usuario debe ser un correo electrónico válido.
  - Lo que se escriba en el campo (_input_) de contraseña debe ser secreto.
* Comportamiento:
  - Al enviarse un formulario de registro o inicio de sesión, debe validarse.
  - En caso haya errores, el sistema debe mostrar mensajes de error para
    ayudar al usuario a corregirlos.
  - La aplicación solo permitirá el acceso a usuarios con cuentas válidas.
  - Al recargar la aplicación, se debe verificar si el usuario está
    logueado antes de mostrarle el contenido privado.
* Perspectiva de interfaz:

  ![Login](https://user-images.githubusercontent.com/9284690/40994765-c3cf9602-68c2-11e8-89ac-8254859b5ebb.png)

#### Muro/timeline de la red social

* Validaciones:
  - Al apretar el botón de publicar, debe validar que exista contenido en el input.
* Comportamiento:
  - Poder publicar un post.
  - Poder poner like a una publicación.
  - Llevar un conteo de los likes.
  - Poder eliminar un post específico.
  - Poder filtrar los posts sólo para mis amigos y para todo público.
  - Pedir confirmación antes de eliminar un post.
  - Al darle click en el botón editar, debe cambiar el texto por un input que
    permita editar el texto y cambiar el link por guardar.
  - Al darle guardar debe cambiar de vuelta a un texto normal pero con la
    información editada.
  - Al recargar la página debo de poder ver los textos editados
* Perspectiva de interfaz:

  ![Muro](https://user-images.githubusercontent.com/9284690/40994768-c52c3442-68c2-11e8-99a5-9e127e700dee.png)

#### Otras consideraciones

* La aplicación no debe dejar hacer publicaciones vacías de ningun tipo.
* El usuario debe poder agregar, editar y eliminar contenido de la red
  social.
* El usuario debe poder definir la privacidad de lo que pública.
* Al editar contenido, el contenido editado se verá automáticamente,
  inmediatamente después de guardar.
* Al recargar la página se deben poder ver los contenidos editados.

Personaliza estas guías con los colores y/o tipografías que creas convenientes.
Recuerda que al hacer estas adaptaciones deberás seguir los fundamentos de
_visual design_ como contraste, alineación, jerarquía, entre otros.

### Hacker edition

* Crear posts con imágenes
* Permite agregar amigos.
* Permite eliminar amigos.
* Permite compartir publicación (en twitter esto es retwittear, en facebook
  es compartir).
* Permite comentar o responder una publicación.
* Permite editar perfil.
* Permite ver perfil o resumen desde el _muro_ o lista de publicaciones.

### Consideraciones técnicas

El corazón de este proyecto incluye:

* Separar la manipulación del DOM de la lógica (Separación de responsabilidades).
* Contar con multiples vistas para esto tu aplicacion debera ser una
 [Single Page Application (SPA)](https://es.wikipedia.org/wiki/Single-page_application)
* Que el sitio sea responsive, ya dicho.
* Alterar y persistir datos. Los datos que agregues o modifiques deberán
  persistir a lo largo de la aplicación, te recomendamos que uses
  [Firebase](https://firebase.google.com/).

Además, podrías agregar algunas tareas nuevas de acuerdo a tus decisiones:

* Recuerda que no hay un setup de **tests** definido, dependerá de
  la estructura de tu proyecto también, pero algo que no debes de olvidar es
  pensar en éstas pruebas, incluso te podrían ayudar a definir la estructura y
  nomenclatura de tu lógica.

### Consideraciones UX

Desde el punto de vista de UX, deberás:

* Hacer al menos 2 o 3 entrevistas con usuarios.
* Hacer un  prototipo de baja fidelidad.
* Asegurarte de que la implementación en código siga los lineamientos del
  diseño.
* Hacer sesiones de testing con el producto en HTML.

### Consideraciones Ágil

Esta vez te recomendamos que los ítems de tu Backlog de Producto estén escritos
como [Historias de Usuario](http://jmbeas.es/guias/historias-de-usuario/).
Esta es una técnica muy simple que te ayudará a:

* Organizar el trabajo en función del valor que le aporta al usuario.
* Poder publicar partes completas y utilizables del producto al final del
  sprint.
* Que el equipo trabaje de manera multidisciplinaria de manera natural.

### Habilidades Blandas

Trabajar en equipo es un gran desafío porque coordinarse no es una tarea fácil,
y es más difícil entre tres que entre dos. Trata que tu equipo te entienda,
facilitando siempre el diálogo en dentro del squad.

Planifica enumerando las tareas y distribuyéndolas, considerando los
recursos, las habilidades, y el tiempo del que dispones. Planifica de manera
que te permita avanzar en los distintos aspectos del proyecto de forma paralela,
teniendo un tablero donde puedas ver en qué está trabajando cada compañera.

Entrega tu trabajo a tu equipo a tiempo y colabora con el objetivo
final del proyecto, lo que puede implicar ayudar a los demás miembros del equipo
con sus pendientes, con el fin de entregar una red social de calidad.

**La división del trabajo debe permitir que todo el equipo
practique el aprendizaje de todas las habilidades esperadas. No se dividan el
trabajo como en una fábrica**

Para conocer a los usuario para eso debes salir e investigar. Tienes que
ejercitar tus habilidades de comunicación y toma de decisiones.
Existen infinitas opciones, depende de ti el camino que escoges.
Para que tu red social responda a las necesidades de sus usuarios, probablemente
deberás adquirir nuevos conocimientos para implementar sus preferencias.

Esta vez, haz _code review_(feedback de tu código) con **otro squad**, para
que puedas mejorar el producto. Mientras más feedback reciban, mejor.

Esperamos que valores y escuches los comentarios y críticas de los demás,
rescatando aquellos aspectos que sirven para tu crecimiento. Entrega siempre
tu opinión de manera constructiva, fundamentada y coherente, con el propósito
de ayudar a tus compañeras. Estos comentarios los debes hacer de manera honesta,
empática e inmediata.

Finalmente, deberás presentar el proyecto que creaste, al usuario que escogiste
y las necesidades que lograste resolver en este proceso. Como siempre, sabemos
que presentar puede ser una tarea difícil, esperamos que tengas capacidad de
síntesis y articules tus ideas con claridad para que logres mostrar tu trabajo
y que los demás lo comprendan.

## Entrega

El proyecto será _entregado_ subiendo tu código a GitHub (`commit`/`push`) y la
interfaz será desplegada usando GitHub pages u otro servicio de hosting que
puedas haber encontrado en el camino.

## Evaluación

### Tech

| Habilidad |  |
|-----------|----------------|
| **JavaScript** | |
| Estilo | 
| Nomenclatura/semántica | 
| Funciones/modularidad | 
| Estructuras de datos | 
| Tests | 
| **HTML** | |
| Validación | 
| Estilo | 
| Semántica | 
| SEO | N/A
| **CSS** | |
| DRY | 
| Responsive | 
| **SCM** | |
| Git | 
| GitHub | 
| **CS** | 
| Lógica | 
| Arquitectura | 

### UX

| Habilidad | |
|-----------|----------------|
| User Centricity | 
| Visual Desing | 

### Habilidades Blandas

Para este proyecto esperamos que ya hayas alcanzado el nivel 3 en todas tus
habilidades blandas. Te aconsejamos revisar la rúbrica:

| Habilidad | |
|-----------|----------------|
| Planificación y organización | 
| Autoaprendizaje | 
| Solución de Problemas | 
| Dar y recibir feedback | 
| Adaptabilidad | 
| Trabajo en equipo (trabajo colaborativo y responsabilidad) | 
| Comunicación eficaz | 
| Presentaciones | 

***

## Pistas / Tips / Lecturas complementarias

### Mobile first

El concepto de [_mobile first_](https://www.mediaclick.es/blog/diseno-web-responsive-design-y-la-importancia-del-mobile-first/)
hace referencia a un proceso de diseño y desarrollo donde partimos de cómo se ve
y cómo funciona la aplicación en un dispositivo móvil primero, y más adelante se
ve como adaptar la aplicación a pantallas progresivamente grandes y
características específicas del entorno desktop. Esto es en contraposición al
modelo tradicional, donde primero se diseñaban los websites (o webapps) para
desktop y después se trataba de _arrugar_ el diseño para que entre en pantallas
más chicas. La clave acá es asegurarse de que desde el principio diseñan usando
la vista _responsive_ de las herramientas de desarrollador (developer tools) del
navegador. De esa forma, partimos de cómo se ve y comporta la aplicación en una
pantalla y entorno móvil.

### Múltiples vistas

En proyectos anteriores nuestras aplicaciones habían estado compuestas de una
sola _vista_ principal (una sóla _página_). En este proyecto se introduce la
necesidad de tener que dividir nuestra interfaz en varias _vistas_ o _páginas_
y ofrecer una manera de navegar entre estas vistas. Este problema se puede
afrontar de muchas maneras: con archivos HTML independientes (cada uno con su
URL) y links tradicionales, manteniendo estado en memoria y rederizando
condicionalmente (sin refrescar la página), [manipulando el historial del
navegador](https://developer.mozilla.org/es/docs/DOM/Manipulando_el_historial_del_navegador)
con [`window.history`](https://developer.mozilla.org/es/docs/Web/API/Window/history).
En este proyecto te invitamos a explorar opciones y decidir una opción
de implementación.

### Escritura de datos

En los proyectos anteriores hemos consumido (leído) datos, pero todavía no
habíamos escrito datos (salvar cambios, crear datos, borrar, ...). En este
proyecto tendrás que crear (salvar) nuevos datos, así como leer, actualizar y
modificar datos existentes. Estos datos se podrán guardar de forma remota
usando [Firebase](https://firebase.google.com/).

Otras:

* [Modulos: Export](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Sentencias/export)
* [Modulos: Import](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Sentencias/import)
* [Diseño web, responsive design y la importancia del mobile first - Media Click](https://www.mediaclick.es/blog/diseno-web-responsive-design-y-la-importancia-del-mobile-first/)
* [Mobile First: el enfoque actual del diseño web móvil - 1and1](https://www.1and1.es/digitalguide/paginas-web/diseno-web/mobile-first-la-nueva-tendencia-del-diseno-web/)
* [Mobile First - desarrolloweb.com](https://desarrolloweb.com/articulos/mobile-first-responsive.html)
* [Mobile First - ZURB](https://zurb.com/word/mobile-first)
* [Mobile First Is NOT Mobile Only - Nielsen Norman Group](https://www.nngroup.com/articles/mobile-first-not-mobile-only/)

***

## Checklist (no olvides llenarla)

### General

* [ ] Producto final sigue los lineamientos del diseño.

### `README.md`

* [x] Definición del producto
* [x] Resumen de entrevistas con usuarios.
* [x] Link/screenshots prototipo de baja fidelidad.
* [ ] Conclusiones de pruebas con el producto en HTML.

### Pruebas / tests

* [ ] Pruebas unitarios cubren un mínimo del 70% de statements, functions,
  lines, y branches.
* [ ] Pasa tests (y linters) (`npm test`).

### Creación de cuenta (sign up)

* [x] Permite crear cuenta.
* [ ] Valida email.
* [x] Valida password.
* [x] Muestra mensajes de error.

### Inicio de sesión (sign in)

* [x] Permite iniciar sesión.
* [x] Valida email.
* [x] Valida password.
* [x] Muestra mensajes de error.

### Muro (wall/feed)

* [x] Muestra _muro_, o lista de publicaciones.
* [x] Permite hacer nuevas publicaciones.
* [x] Permite eliminar publicaciones.
* [x] Pide confirmación antes de borrar publicación.
* [x] Permite editar publicación en el mismo lugar (in place).
* [ ] Permite filtrar publicaciones por público/privado.
* [x] Permite marcar publicaciones como _gustados_ (like, corazón, estrella,
  etc...).
* [x] Permite ver cuántas marcas, likes, estrellas, corazones o lo que se haya
  elegido, ha recibido una publicación.

### Hacker Edition

* [ ] Permite agregar amigos.
* [ ] Permite eliminar amigos.
* [ ] Permite compartir publicación (en twitter esto es retwittear, en facebook
  es compartir).
* [ ] Permite comentar o responder una publicación.
* [ ] Permite editar perfil.
* [ ] Permite ver perfil o resumen desde el _muro_ o lista de publicaciones.
* [ ] Permite ver cuántas marcas, likes, estrellas, corazones o lo que se haya
  elegido, ha recibido una publicación.
