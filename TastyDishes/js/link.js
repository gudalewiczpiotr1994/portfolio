$(document).ready(function () {
    links()
});

function links() {

    $(".link1").click(function () {
        // alert('git');
        $('html, body').animate({
            scrollTop: $("#aboutUs").offset().top
        }, 1000);
    });

    $(".link2").click(function () {
        // alert('git');
        $('html, body').animate({
            scrollTop: $("#Menu").offset().top
        }, 1000);
    });

    $(".link3").click(function () {
        // alert('git');
        $('html, body').animate({
            scrollTop: $("#services").offset().top
        }, 1000);
    });



    $(".link4").click(function () {
        // alert('git');
        $('html, body').animate({
            scrollTop: $("#contact").offset().top
        }, 1000);
    });


}