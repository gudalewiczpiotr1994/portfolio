$(document).ready(function () {
    setBindings();
    links();
})

// scroll to id
function  setBindings() {

// scroll nav color changing
    var scroll_start = 0;
    var startchange = $('.textcontent');
    var offset = startchange.offset();
    if (startchange.length){
        $(document).scroll(function() {
            scroll_start = $(this).scrollTop();
            if(scroll_start > offset.top) {
                $('.navbar').css('background-color', '#555').css('opacity', '.8');
            }
            else{
                $('.navbar').css('background-color', 'transparent');

            }
        });
    }
}

function links() {

    $(".link1").click(function() {
        // alert('git');
        $('html, body').animate({
            scrollTop: $("#page-top").offset().top
        }, 1000);
    });

    $(".link2").click(function() {
        // alert('git');
        $('html, body').animate({
            scrollTop: $(".about").offset().top
        }, 1000);
    });

    $(".link3").click(function() {
        // alert('git');
        $('html, body').animate({
            scrollTop: $("#checkme").offset().top
        }, 1000);
    });
}

function timer() {

    var dzisiaj = new Date();

    var rok = dzisiaj.getFullYear();

    document.getElementById("zegar").innerHTML = "&copy" + rok;

    setTimeout("timer()", 1000);

}




