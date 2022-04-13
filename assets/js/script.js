$(document).ready(function () {

    // alerta "enviar mensaje"
    $('#enviarmensaje').click(function () {
        alert('El mensaje fue enviado correctamente ✈️');
    });

});

//tooltip js para realizar la animación
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
});