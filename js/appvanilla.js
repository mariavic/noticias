var misNoticias = (function() {

  // entorno privado

  // Creamos un array para guardar las noticias
  var noticias = [];

  function agregarNoticia() {


    // Constructor Noticia
    function Noticia() {
      this.titulo = "";
      this.cuerpo = "";
      this.imagen = "";
    }

    // Creamos un objeto Noticia asignado a una variable
    var noticia = new Noticia();

    // Agregamos titulo y cuerpo
    noticia.titulo = document.getElementById('titulo1').value;
    noticia.cuerpo = document.getElementById('cuerpo2').value;
    noticia.imagen = document.getElementById('imagen2').value;
    console.log(noticia.titulo);
    console.log(noticia.cuerpo);
    console.log(noticia.imagen);

    // Si el usuario cargo algo hago esto, caso contrario..
    if (noticia.titulo && noticia.cuerpo && noticia.imagen !== null) {
      noticias.push(noticia);
      var containerEstado = document.getElementById("estado");
      noticiaExitosa = document.createElement("h3");
      noticiaExitosa.className += "green";
      noticiaExitosa.innerHTML = "Se ha cargado la noticia con éxito";
      containerEstado.appendChild(noticiaExitosa);
    } else {
      var containerEstado = document.getElementById("estado");
      noticiaExitosa = document.createElement("h3");
      noticiaExitosa.innerHTML = "No se ha podido cargar la noticia, intente nuevamente";
      containerEstado.appendChild(noticiaExitosa);
    }
  }

  function mostrarNoticia() {

    // Agarramos el container de noticias (fijate que metodo usamos)
    if (noticias.length > 0) {


      // capturo el elemento con ID "noticias" (fijate en el HTML)
      var containerNoticias = document.getElementById("noticias");


      // Creamos un par de variables para el titulo y parrafo
      var tituloConFormato;
      var parrafoConFormato;
      var imagenConFormato;
      var noticiaExitosa;


      // Iteramos sobre el array de noticias
      for (var i = 0; i < noticias.length; i++) {

        // Creamos los elementos y los asignamos
        tituloConFormato = document.createElement("h2");
        parrafoConFormato = document.createElement("p");
        imagenConFormato = document.createElement("img");


        // Agrego el contenido del titulo y noticias
        tituloConFormato.innerHTML = noticias[i].titulo;
        parrafoConFormato.innerHTML = noticias[i].cuerpo;
        imagenConFormato.src = noticias[i].imagen;

        // Los agrego al DOM
        containerNoticias.appendChild(tituloConFormato);
        containerNoticias.appendChild(parrafoConFormato);
        containerNoticias.appendChild(imagenConFormato);
      }

      // Vaciamos el array al finalizar (proba que pasa si sacas esto)
      noticias = [];

      // Como la carga de noticias salio bien, devolvemos "true"
      return true;

    } else {
      // Si no hay nada en el array noticias devolvemos "false"
      var containerEstado = document.getElementById("estado");
      noticiaNo = document.createElement("h3");
      noticiaNo.innerHTML = "No hay noticias para mostrar.";
      containerEstado.appendChild(noticiaNo);
    }

  }


  // entorno publico
  var botonAgregar = document.getElementById('agregarNota');
  botonAgregar.onclick = agregarNoticia;  
  var botonMostrar = document.getElementById('mostrarNota').onclick = mostrarNoticia;

})();

console.log("Carga de JS realizada con exito!");