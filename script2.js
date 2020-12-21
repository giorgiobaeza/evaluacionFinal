$(document).ready(function(){

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