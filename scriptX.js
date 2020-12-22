$(document).ready(function(){

    $.validator.addMethod("valueNotEquals", function(value, element, arg){
        return arg !== value;
       }, "Value must not equal arg.")
 
    
    $('#accForm').validate({
        rules: {
           
            Id_Accidente: {
                required: true,
                digits: true,
                max: 10000,
                min: 1
            },                
                       
            accfecha: "required",
            acchora: "required",

            acclugar:  {
                required: true,
                minlength: 1,
                maxlength: 150
            },

            accorigen:  {
                required: true,
                minlength: 1,
                maxlength: 100,
            },


            cliente: "required",

            accconsecuencias: {
                minlength: 1,
                maxlength: 100,
            },
            
           
        },

        messages: {
            Id_Accidente: {
                required: "Este es un campo obligatorio.",
                minlength: "Este es un campo obligatorio.",
                maxlength: "Excede numero máximo de caracteres.",
            },

            accfecha: {
                required: "Este es un campo obligatorio.",
            },    
            
            acchora: {
                required: "Este es un campo obligatorio.",
            },    
           
            acclugar:  {
                required: "Este es un campo obligatorio.",
                minlength: "Este es un campo obligatorio.",
                maxlength: "Excede numero máximo de caracteres.",
            },

            accorigen:  {
                required: "Este es un campo obligatorio.",
                minlength: "Este es un campo obligatorio.",
                maxlength: "Excede numero máximo de caracteres.",
            },


            cliente: "Este es un campo obligatorio.",

            accconsecuencias: {
                maxlength: "Excede numero máximo de caracteres.",
            },

        }

    });


});