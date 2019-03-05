$(document).ready(function() {
    popup();

    /* Every time the window is scrolled ... */
    $(window).scroll( function(){

        /* Check the location of each desired element */
        $('.profileinfo').each( function(i){

            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){

                $(this).animate({'opacity':'1'},1500);

            }

        });

    });

    // Input Lock
    $('textarea').blur(function () {
        $('#hire textarea').each(function () {
            $this = $(this);
            if ( this.value != '' ) {
                $this.addClass('focused');
                $('textarea + label + span').css({'opacity': 1});
            }
            else {
                $this.removeClass('focused');
                $('textarea + label + span').css({'opacity': 0});
            }
        });
    });

    $('#hire .field:first-child input').blur(function () {
        $('#hire .field:first-child input').each(function () {
            $this = $(this);
            if ( this.value != '' ) {
                $this.addClass('focused');
                $('.field:first-child input + label + span').css({'opacity': 1});
            }
            else {
                $this.removeClass('focused');
                $('.field:first-child input + label + span').css({'opacity': 0});
            }
        });
    });

    $('#hire .field:nth-child(2) input').blur(function () {
        $('#hire .field:nth-child(2) input').each(function () {
            $this = $(this);
            if ( this.value != '' ) {
                $this.addClass('focused');
                $('.field:nth-child(2) input + label + span').css({'opacity': 1});
            }
            else {
                $this.removeClass('focused');
                $('.field:nth-child(2) input + label + span').css({'opacity': 0});
            }
        });
    });


});

function timer() {

    var dzisiaj = new Date();

    var rok = dzisiaj.getFullYear();

    document.getElementById("zegar").innerHTML = "&copy" + rok;

    setTimeout("timer()", 1000);

}

function popup() {

    var timer = 500;
    var start = setTimeout(function () {
        $('#popup').fadeIn(timer);
    },timer);

}

function closePopup() {
        $('#popup').fadeOut(500);
};