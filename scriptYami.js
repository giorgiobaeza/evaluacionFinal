$(document).ready(function () {

    $.validator.addMethod("valueNotEquals", function (value, element, arg) {
        return arg !== value;
    }, "Value must not equal arg.")
    $('#commentForm').validate({
        rules: {
            ident: {
                required: {
                    depends: function (elem) {
                        return $("#ident").val() < 10000
                    }
                },
                number: true,
                min: 0
            }
        },
        nombre: {
            required: true,
            maxlength: 100
        },

        edad: {
            required: {
                depends: function (elem) {
                    return $("#ident").val() < 150
                }
            },
            number: true,
            min: 1
        },
        email: {
            required: true,
            email: true
        },
        telefono: {
            required: true,
            maxlength: 9
        },
        cap: "required",
        cap: {
            valueNotEquals: "default"
        },

        messages: {
            ident: {
                required: "Este es un campo obligatorio.",
                number: "Identificador mayor a 0 y menor a 10000."
            },
            nombre: {
                required: "Este es un campo obligatorio.",
                maxlength: "Nombre debe ser mayor a 0 y menor a 100 caracteres"
            },

            edad: {
                required: "Este es un campo obligatorio.",
                number: "Ingresar un número mayor a 0 y menor a 150"
            },
            email: {
                email: "El formato del correo es este: abc@domain.tld"
            },

            telefono: {
                required: "Este es un campo obligatorio.",
                maxlength: "Formato telefono es: +569XXXXXXXX"
            },
            cap: "Este es un campo obligatorio.",
            cap: {
                valueNotEquals: "Seleccione una opción"
            },
        }
    });


});