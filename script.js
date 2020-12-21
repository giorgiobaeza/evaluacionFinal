

function RangoMesAnio(desde, hasta) {
    for (i = 0; i < hasta; i++)
        document.write("<option>" + parseInt(desde + i) + "</option>");
}

function fechaActual(){
    var fecha = new Date();
    var month = fecha.getUTCMonth() + 1;
    var day = fecha.getUTCDate();
    var year = fecha.getUTCFullYear();
    document.getElementById("fecha").value = day+"/"+month+"/"+year;
    document.getElementById("fecha").readOnly = true;
};

function ingresaDatos() {
    if ( monto.value >= 0 && monto.value <= 999999999 && monto.value != "") {
        document.getElementById('monto').className = 'validado'; 
        validacion1=1;               
    } else {
        document.getElementById('monto').className = 'error';
   }
   if ( mes.value >= 0 && mes.value <= 12 && mes.value != "") {
    document.getElementById('mes').className = 'validado'; 
    validacion2=1;               
} else {
    document.getElementById('mes').className = 'error';
}
   if ( anio.value >= 0 && anio.value <= 2050 && anio.value != "") {
    document.getElementById('anio').className = 'validado'; 
    validacion3=1;               
} else {
    document.getElementById('anio').className = 'error';

}
if ( rutcliente.value >= 0 && rutcliente.value <= 999999999 && rutcliente.value != "") {
    document.getElementById('rutcliente').className = 'validado'; 
    validacion4=1;               
} else {
    document.getElementById('rutcliente').className = 'error';
}
if ( validacion1 == 1 && validacion2 == 1 && validacion3 == 1 && validacion4 == 1) {
    alert("Los datos se han ingresado correctamente");
}
};

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


