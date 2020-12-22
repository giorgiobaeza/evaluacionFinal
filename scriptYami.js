$(document).ready(function () {
    //validaciones para formulario Administra Asistentes
    $.validator.addMethod("valueNotEquals", function (value, element, arg) {
        return arg !== value;
    }, "Value must not equal arg.")

    $('#formNuevoAsist').validate({
        rules: {
            ident: {
                required: true,
                number: true,
                max: 10000
            },
            nombre: {
                required: true,
                maxlength: 100
            },

            edad: {
                required: true,
                number: true,
                max: 150

            },
            email: {
                required: true,
                email: true
            },
            telefono: {
                required: true,
                minlength: 12

            },
            cap: {
                valueNotEquals: "default"
            }
        },

        messages: {
            ident: {
                required: "Este es un campo obligatorio.",
                max: "Identificador mayor a 0 y menor a 10000."
            },
            nombre: {
                required: "Este es un campo obligatorio.",
                maxlength: "Nombre debe ser mayor a 0 y menor a 100 caracteres"
            },

            edad: {
                required: "Este es un campo obligatorio.",
                max: "Ingresar un número mayor a 0 y menor a 150"
            },
            email: {
                required: "Este es un campo obligatorio.",
                email: "El formato del correo es este: abdsdfc@abc.cl"
            },

            telefono: {
                required: "Este es un campo obligatorio.",
                minlength: "Ingrese número de teléfono válido",
            },
            cap: {
                valueNotEquals: "Seleccione una opción"
            },

        }
    });


});
