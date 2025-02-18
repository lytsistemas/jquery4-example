// scripts.js
$(document).ready(function () {
    // Animar texto del párrafo
    $('#animar-texto').click(function () {
        $('p').animate({
            fontSize: '1.5em',
            opacity: 0.5
        }, 1000).animate({
            fontSize: '1em',
            opacity: 1
        }, 1000);
    });

    // Añadir botones dinámicamente
    $('#añadir-boton').click(function () {
        const nuevoBoton = $('<button class="nuevo-boton">Nuevo botón</button>');
        $('#contenedor-botones').append(nuevoBoton);

        // Agregar evento al nuevo botón
        nuevoBoton.click(function () {
            alert('¡Haz hecho clic en un nuevo botón!');
        });
    });
});
