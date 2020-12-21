$(document).ready(function(){

    //validaciones para formularios
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
$(document).ready(function(){
    //plugin gráficos para archivo reportes.html 

        var datos = {
            labels: ["La Granja", "La Florida", "Puente Alto", "Santiago", "Renca", "Maipú", "Recoleta"],
            datasets: [{
                    label: "Cantidad",
                    backgroundColor: "rgb(0, 255, 0, 0.5)",
                    data: [30, 20, 32, 22, 17, 26, 19]
                },

            ]
        };

        var canvas = document.getElementById('myChart').getContext("2d");
        window.bar = new Chart(canvas, {
            type: "bar",
            data: datos,
            options: {
                elements: {
                    rectangle: {
                        boderWidth: 1,
                        boderColor: "rgb(0,255,0)",
                        borderSkipped: "bottom"
                    }
                },
                responsive: true,
                title: {
                    display: true,
                    text: "Cantidad de Clientes por Comuna"
                }
            }
        });

        var datos = {
            labels: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre",
                "Octubre", "Noviembre", "Diciembre"
            ],
            datasets: [{
                    label: "Cantidad de accidentes",
                    backgroundColor: "rgba(0, 255, 255)",
                    data: [12, 20, 32, 22, 14, 15, 20, 15, 9, 5, 14, 21]
                },

                {
                    label: "Cantidad de Visitas",
                    backgroundColor: "rgba(204, 0, 15)",
                    data: [10, 5, 22, 14, 17, 26, 19, 21, 31, 20, 12, 9]
                },

            ]
        };

        var canvas = document.getElementById('myChartII').getContext("2d");
        window.bar = new Chart(canvas, {
            type: "line",
            data: datos,
            options: {
                elements: {
                    line: {
                        borderWidth: 8,
                        fill: false,
                        boderColor: "rgb(255,0,0)",
                        borderSkipped: "bottom"
                    },
                    point: {
                        radius: 6,
                        borderWidth: 4,
                        backgroundColor: 'white',
                        hoverRadius: 8,
                        hoverBorderWidth: 4,
                    },

                    responsive: true,
                    title: {
                        display: true,
                        text: "Segundo Gráfico líneas  y puntos"

                        
                    }
                }
            }
        });
 

    var datos = {
            labels: ["% Cumplidos", "% NO Cumplidos", "% Cumplidos con Observaciones"],
            datasets: [{
                    label: "Porcentajes Chequeos",
                    backgroundColor: [
                    "rgb(102, 255, 51 , 0.5)",
                    "rgb(0, 153, 153 , 0.5)",
                    "rgb(0, 0, 255 , 0.5)"],
                    data: [30, 20, 32]
                },

            ]
        };

        var canvas = document.getElementById('myChartIII').getContext("2d");
        window.bar = new Chart(canvas, {
            type: "pie",
            data: datos,
            options: {
                elements: {
                    rectangle: {
                        boderWidth: 1,
                        boderColor: "rgb(0,255,0)",
                        borderSkipped: "bottom"
                    }
                },
                responsive: true,
                title: {
                    display: true,
                    text: "Cantidad de Clientes por Comuna"
                }
            }
        });
});
$(document).ready(function(){
    //cambio de clases para archivo listadoasesorias.html
    var $lis1 = $('#lista1');

        $('#btnact1').click( function() {
            $lis1.toggleClass('actdis');
        }
    );
    var $lis2 = $('#lista2');

        $('#btnact2').click( function() {
            $lis2.toggleClass('actdis');
        }
    );
    var $lis3 = $('#lista3');

        $('#btnact3').click( function() {
            $lis3.toggleClass('actdis');
        }
    );

    var $td = $('td');

    $('#btnestilo1').on('click', function() {
            $td.addClass('estilo1').removeClass('estilo2 estilo3');
        }
    );
    $('#btnestilo2').on('click', function() {
        $td.addClass('estilo2').removeClass('estilo1 estilo3');
    }
    );
    $('#btnestilo3').on('click', function() {
        $td.addClass('estilo3').removeClass('estilo1 estilo2');
    }
    );

       

});

//funciones para listadopago.html
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

