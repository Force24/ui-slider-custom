$( function() {
    var handle = $( ".custom-handle" );
    var handle2 = $( ".custom-handle-2" );
    $( ".slider" ).slider({
        min: 0,
        max: 100,
        value: 50,
        animate:"slow",
        create: function() {
            handle.text( $( this ).slider( "value" ) );
        },
        slide: function( event, ui ) {
            handle.text( ui.value );
            $('input[name=employees]').val(ui.value);
        }
    });
    $( ".slider-2" ).slider({
        min: 0,
        max: 50000,
        step: 100,
        value: 25000,
        animate:"slow",
        create: function() {
            handle2.text( "25k" );
        },
        slide: function( event, ui ) {
            handle2.text( ui.value / 1000 + "k" );
            $('input[name=followers]').val(ui.value);
        }
    });
  } );