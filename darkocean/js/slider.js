$(document).ready(function () {
    changeImage();
    accordion();
});

function hideaAll() {

    $('.slide').animate({
        'opacity': '0'
    }, 500)
}



function changeImage() {

    var change = function () {
        $("#slider li").each(function (i) {
            $(this).delay(1000 * i).animate({'opacity': '1'}, 500);
            hideaAll();
        });
    };

    var refreshInterval = setInterval(change(),20000);
    clearInterval(refreshInterval);

}




function accordion() {
    var acc = document.getElementsByClassName("accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function () {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        });
    }
}


// console.log(imageGallery);