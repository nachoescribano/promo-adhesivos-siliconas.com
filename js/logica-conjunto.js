

function classAlturaMinimaPantala(nombreClase){
    var alturaPantalla = window.innerHeight;
    var elementos = document.getElementsByClassName(nombreClase);

    for(var i=0; i < elementos.length; i++ )
    {
        elementos[i].style.minHeight = alturaPantalla + "px";
    }

}

function igualadorDeAlturas(className){
    var elementosIgualar=document.getElementsByClassName(className);
    var listaAlturas = [];

    //Obtener entero de pixeles de todos los
    for (var i = 0; i < elementosIgualar.length; i++) {
    /*Esta linea sirve para resetear los valores antes de calcularlos de nuevo.
    En  caso contrario al ser invocado por onresize las alturas
    serían las fijadas anteriormente, nunca cambiarían y no podrían readaptarse
    al variar espacio de la ventana.
     */
    elementosIgualar[i].style.height = "";
    listaAlturas[i] = parseInt(window.getComputedStyle(elementosIgualar[i], null).getPropertyValue("height"), 10);
    }

    //Ordenar de manera descendente
    listaAlturas.sort(function(a, b){return b-a});
    //Obtener la altura del elemento más alto
    const heightHeighiestElement = listaAlturas[0];

    //Igual todos elementos con la altura más alta
    for (var i = 0; i < elementosIgualar.length; i++) {
    elementosIgualar[i].style.height = heightHeighiestElement+'px';
    }

}