$(document).ready(function(){

    $.validator.addMethod("valueNotEquals", function(value, element, arg){
        return arg !== value;
       }, "Value must not equal arg.")

    $('#commentForm').validate({
        rules: {
            run: {
                required: true,
                maxlength: 9
            },
            nombre: "required",
            apellido: "required",
            telefono: {
                required: true,
                maxlength: 9
            },
            afp: "required",
            sissalud: {
                valueNotEquals: "default"
            },
            direc: "required",
            comuna: "required",
            edad: {
                required: true,
                maxlength: 2
            },
        },
        messages: {
            run: {
                required: "Este es un campo obligatorio.",
                maxlength: "Excede numero máximo de caracteres."
            },
            nombre: "Este es un campo obligatorio.",
            apellido: "Este es un campo obligatorio.",
            telefono: {
                required: "Este es un campo obligatorio.",
                maxlength: "Excede numero máximo de caracteres."
            },
            afp: "Este es un campo obligatorio.",
            sissalud: {
                valueNotEquals: "Seleccione una opción"
            },
            direc: "Este es un campo obligatorio.",
            comuna: "Este es un campo obligatorio.",
            edad: {
                required: "Este es un campo obligatorio.",
                maxlength: "Excede numero máximo de caracteres."
            },
        }
    });


});

