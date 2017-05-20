$(document).ready(function() {



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
      noticia.titulo = $('#titulo1').val();
      noticia.cuerpo = $('#cuerpo2').val();
      noticia.imagen = $('#imagen2').val();
      

      console.log(noticia.titulo);
      console.log(noticia.cuerpo);
      console.log(noticia.imagen);

      // Si el usuario cargo algo hago esto, caso contrario..
      if ( (noticia.titulo && noticia.cuerpo && noticia.imagen) !== null) {
        noticias.push(noticia);
        console.log("hola");


        var containerEstado = $("#estado");
        noticiaExitosa = document.createElement("h3");
        noticiaExitosa.className += "green";
        noticiaExitosa.innerHTML = "Se ha cargado la noticia con éxito";
        containerEstado.append(noticiaExitosa);
      } else {
        var containerEstado = $("#estado");
        noticiaExitosa = document.createElement("h3");
        noticiaExitosa.innerHTML = "No se ha podido cargar la noticia, intente nuevamente";
        containerEstado.append(noticiaExitosa);
      }
    }

    function mostrarNoticia() {

      // Agarramos el container de noticias (fijate que metodo usamos)
      if (noticias.length > 0) {


        // capturo el elemento con ID "noticias" (fijate en el HTML)
        var containerNoticias = $("#noticias");


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
          containerNoticias.append(tituloConFormato);
          containerNoticias.append(parrafoConFormato);
          containerNoticias.append(imagenConFormato);
        }

        // Vaciamos el array al finalizar (proba que pasa si sacas esto)
        noticias = [];

        // Como la carga de noticias salio bien, devolvemos "true"
        return true;

      } else {
        // Si no hay nada en el array noticias devolvemos "false"
        var containerEstado = $("#estado");
        noticiaNo = $("h3");
        noticiaNo.innerHTML = "No hay noticias para mostrar.";
        containerEstado.append(noticiaNo);
      }

    }


    
    var botonAgregar = $('#agregarNota').on('click', function() {
      agregarNoticia();
      // console.log('agrego');
    });
    var botonMostrar = $('#mostrarNota').on('click', function() {
      mostrarNoticia();
      // console.log("Fired");
    });


    // entorno publico
    return {
      agregar: function() {
        // hacer algo
        if (agregarNoticia()) {
          return "Carga de noticias exitosa.";
        } else {
          return "No se ha cargado nada.";
        }

      },
      mostrar: function() {
        if (mostrarNoticia()) {
          return "Cargando noticias al DOM..";
        } else {
          return "No se ha agregado ninguna noticia, cargue una antes.";
        }

      }
    };

  })();

  console.log("Carga de JS realizada con exito!");

});