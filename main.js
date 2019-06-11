$( function() {
    var handle = $( ".custom-handle" );
    var handle2 = $( ".custom-handle-2" );
    $( ".slider" ).slider({
        min: 0,
        max: 250,
        value: 125,
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
    var frm = $('.CalcReturn');
    frm.submit(function (e) {
        $.ajax({
            type: frm.attr('method'),
            url: frm.attr('action'),
            data: frm.serialize(),
            success: function (data) {
                function formatNumber(num) {
                    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
                }
                var employees = parseInt($('input[name=employees]').val());
                var followers = parseInt($('input[name=followers]').val());
                var reach = ((employees*1000)+followers);
                var package
                var clicks
                var roi
                if(employees <= 5){
                    package = 120
                }
                else if(employees >= 6 && employees <= 10){
                    package = 199
                }
                else if(employees >= 11 && employees <= 20){
                    package = 350
                }
                else if(employees >= 21 && employees <= 49){
                    package = 599
                }
                else if(employees >= 50 && employees <= 100){
                    package = 899
                }
                else if(employees >= 101 && employees <= 249){
                    package = 1250
                }
                else if(employees >= 250){
                    package = 2250
                }
                clicks = (reach/100)*2;
                roi = ((clicks - package)/package) * 100
                $('#calcReach').html(formatNumber(reach));
                $('#calcROI').html(Math.round(roi));
                $('#calcPSC').html(formatNumber(clicks * 12));
            }
        });
        e.preventDefault();
    });
  });
