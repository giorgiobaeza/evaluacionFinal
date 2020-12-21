var $td = $('td');

$('#btnestilo1').on('click', function() {
        $td.toggleClass('estilo1');
    }
);
$('#btnestilo2').on('click', function() {
    $td.toggleClass('estilo2');
}
);
$('#btnestilo3').on('click', function() {
    $td.toggleClass('estilo3');
}
);



$('#btnact1').click( () => {
        $('#lista1').append('<li>Mejoras</li><li>Mejoras</li>');
    }
);

