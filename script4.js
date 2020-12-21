$(document).ready(function(){

    $(document).ready(function () {

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

