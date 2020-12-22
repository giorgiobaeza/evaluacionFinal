$(document).ready(function(){

    $.validator.addMethod("valueNotEquals", function(value, element, arg){
        return arg !== value;
       }, "Value must not equal arg.")
 
    
    $('#accForm').validate({
        rules: {
           
            ID_Accidente: {
                required: true,
                digits: true,
                max: 10000,
                min: 1
            },                
                       
            fecha: "required",
            hora: "required",

            lugar:  {
                required: true,
                minlength: 1,
                maxlength: 150
            },

            origen:  {
                required: true,
                minlength: 1,
                maxlength: 100
            },


            cliente: {
                valueNotEquals: "default"
            },
         
            
            consecuencias: {
                minlength: 1,
                maxlength: 100
            },
            
           
        },

        messages: {
            ID_Accidente: {
                required: "Este es un campo obligatorio.",
                minlength: "Este es un campo obligatorio.",
                maxlength: "Excede numero máximo de caracteres."
            },

            fecha: {
                required: "Este es un campo obligatorio."
            },    
            
            hora: {
                required: "Este es un campo obligatorio."
            },    
           
            lugar:  {
                required: "Este es un campo obligatorio.",
                minlength: "Este es un campo obligatorio.",
                maxlength: "Excede numero máximo de caracteres."
            },

            origen:  {
                required: "Este es un campo obligatorio.",
                minlength: "Este es un campo obligatorio.",
                maxlength: "Excede numero máximo de caracteres."
            },


            cliente: "Este es un campo obligatorio.",

            consecuencias: {
                maxlength: "Excede numero máximo de caracteres."
            },

        }

    });


});