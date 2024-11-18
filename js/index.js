$(document).ready(function() {
    $('#myTable').DataTable({
        language: {
            search: "Buscar:", // Cambia el texto de "Search:"
            lengthMenu: "Mostrar _MENU_ entradas", // Cambia el texto del menú de longitud
            info: "Mostrando _START_ a _END_ de _TOTAL_ entradas", // Cambia el texto de información
            paginate: {
                first: "Primero", // Cambia el texto de "First"
                last: "Último", // Cambia el texto de "Last"
                next: "Siguiente", // Cambia el texto de "Next"
                previous: "Anterior" // Cambia el texto de "Previous"
            }
        }
    });
});

