$(document).ready(function() {
    // Inicialización de DataTable
    var table = $('#myTable').DataTable({
        language: {
            search: "Buscar:", // Cambia el texto de "Search:"
            lengthMenu: "Mostrar _MENU_ entradas", // Cambia el texto del menú de longitud
            info: "Mostrando _START_ a _END_ de _TOTAL_ entradas" // Cambia el texto de información
        },
        paging: false, // Desactiva la paginación
        columnDefs: [
            { targets: 3, visible: false } // Aquí se oculta la cuarta columna (índice 3)
        ]
    });

    // Evento para detectar el clic en cualquier celda de la tabla
    $('#myTable tbody').on('click', 'td', function() {
        var row = $(this).closest('tr'); // Seleccionamos la fila
        var btn = $(this).find('.modif'); // Buscamos el botón dentro de la celda (se puede ajustar si el botón está fuera)

        // Si el botón no está dentro de la celda, lo buscamos en otra parte (por ejemplo en la fila)
        if (btn.length === 0) {
            btn = row.find('.modif');
        }

        // Ajustamos la posición del botón
        var position = $(this).offset(); // Obtener la posición de la celda
        btn.css({
            top: position.top,
            left: position.left + $(this).width() + 10 // Colocar el botón a la derecha de la celda
        });

        // Mostrar el botón
        btn.addClass('show-btn');
    });

    // Evento para ocultar el botón cuando se haga clic fuera de la tabla
    $(document).on('click', function(e) {
        var btn = $('.modif');
        if (!$(e.target).closest('#myTable').length) {
            btn.removeClass('show-btn'); // Ocultar el botón si se hace clic fuera
        }
    });

    // Acción del botón (aquí puedes agregar cualquier funcionalidad)
    $(document).on('click', '.modif', function() {
        alert("¡Modificar tabla!");
        // Aquí puedes añadir lo que quieras hacer con la tabla, como abrir un formulario o modificar datos
    });

});
  