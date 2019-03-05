/**
 * Created by Piotr on 2017-09-21.
 */

jQuery(function($)
    {
        //zresetuj scrolla
        $.scrollTo(0);

        $('#link1').click(function() { $.scrollTo($('#home'), 500); });
        $('#link2').click(function() { $.scrollTo($('#Profile'), 500); });
        $('#link3').click(function() { $.scrollTo($('#Skills'), 500); });
        $('#link4').click(function() { $.scrollTo($('#projects'), 500); });
        $('#link5').click(function() { $.scrollTo($('.contactform'), 500); });
        $('#link6').click(function() { $.scrollTo($('#contact'), 500); });




        $('.scrollup').click(function() { $.scrollTo($('body'), 1000); });
    }
);

//pokaż podczas przewijania
$(window).scroll(function ()

    {
        if($(this).scrollTop()>300) $('.scrollup').fadeIn();
        else $('.scrollup').fadeOut();

    }



);
