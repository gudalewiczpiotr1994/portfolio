$(document).ready(() => {
    showMainContent();
    links();
    scrollEvents();

    for (let image = 0; image <= imagesTab.length; image++) {
        changeSkillsBackground(image);
    }
    validate();

});

//images from the skill section
let imagesTab = [
    '<img src="../images/skills/background/1.jpg">',
    '<img src="../images/skills/background/2.jpg">',
    '<img src="../images/skills/background/3.jpg">',
    '<img src="../images/skills/background/4.jpg">',
    '<img src="../images/skills/background/5.jpg">',
    '<img src="../images/skills/background/6.jpg">',
    '<img src="../images/skills/background/7.jpg">',
    '<img src="../images/skills/background/8.jpg">',
    '<img src="../images/skills/background/9.jpg">',
];

/* Displaying animation of main page after reload the page */
const showMainContent = () => {
    let timerAnimation = 1000;
    let timerNavi = 750;
    let timerNameSurname = 500;
    let timerSocialMedia = 2500;
    setTimeout(() => {
        $('#mainNavbar')
            .animate({
                top: "0",
                opacity: 1
            }, timerNavi)
            .queue(() => {
                $('.start-content-information h1').fadeIn(1500).dequeue();
                let triggerMainText = setTimeout(() => {
                    let string = "Front-end Developer z wizją na Twoje zlecenie";
                    let dest = $('#fadeIn');
                    let c = 0;
                    let i = setInterval(() => {
                        if (c >= string.length) {
                            clearInterval(i);
                            dest.text(string);
                        } else {
                            $('<span>').text(string[c]).appendTo(dest).hide().fadeIn(1000, "linear");
                            c += 1;
                        }
                    }, 50);
                }, timerNameSurname);
                let triggerSocialMedias = setTimeout(() => {
                    $(".social-tmb").each(function (i) {
                        $(this).delay(500 * i).animate({
                            opacity: 1
                        }, 500);
                    })
                }, timerSocialMedia)
            })
    }, timerAnimation);
}

/* Scroll to the section with proggresive bar's dots.
Display progressive bar depends on heigh of the page */
const scrollEvents = () => {

    const aboutSection = $('#about');
    const skillsSection = $('#skills');
    const portfolioSection = $('#portfolio');
    const contactSection = $('#contact');

    let widthPercentage = 0;

    //dots
    const aboutDot = $('#aboutDot');
    const skillsDot = $('#skillsDot');
    const portrolioDot = $('#portfolioDot');
    const contactDot = $('#contactDot');

    //progresiveBar
    const progressiveBar = $('.progressiveBar');

    //aboutMe
    const showLinesAboutMe = $('.aboutMe .underline, .aboutMe .topline');
    //Skills
    const showLinesSkills = $('.skillsContainer .underline');
    //portfolio
    let showLinesPortfolio = $('.portrolioContainer h2');
    $(window).scroll(() => {
        //windowPosition
        let windowBotPosition = $(window).outerHeight();
        let windowHeight = $(document).outerHeight() - windowBotPosition;
        let scrollPos = $(document).scrollTop();

        //section position

        let aboutSectionPos = aboutSection.position();
        let percentageAboutDotPos = aboutSectionPos.top * 100 / windowHeight;
        let skillsSectionPos = skillsSection.position();
        let percentageSkillsDotPos = skillsSectionPos.top * 100 / windowHeight;
        let portfolioSectionPos = portfolioSection.position();
        let percentagePortolioDotPos = portfolioSectionPos.top * 100 / windowHeight;
        let contactSectionPos = contactSection.position();
        let percentageContactPos = contactSectionPos.top * 100 / windowHeight;
        widthPercentage = scrollPos * 100 / windowHeight;
        if (scrollPos == 0) {
            progressiveBar.css({
                width: 0
            });
        } else {
            progressiveBar.css({
                width: widthPercentage + '%'
            });
        }
        widthPercentage >= percentageAboutDotPos ?
            aboutDot.show() &&
            aboutDot.css({
                left: percentageAboutDotPos + '%'
            }) &&
            showLinesAboutMe.addClass('background_animation') :
            aboutDot.hide();

        widthPercentage >= percentageSkillsDotPos ?
            skillsDot.show() &&
            skillsDot.css({
                left: percentageSkillsDotPos + '%'
            }) &&
            showLinesSkills.addClass('background_animation') :
            skillsDot.hide();

        widthPercentage >= percentagePortolioDotPos ?
            portrolioDot.show() &&
            portrolioDot.css({
                left: percentagePortolioDotPos + '%'
            }) :
            portrolioDot.hide();

        widthPercentage >= percentageContactPos ?
            contactDot.show() &&
            contactDot.css({
                left: percentageContactPos + '%'
            }) :
            contactDot.hide();
    })
}

/* Change skill background section on mouse enter/leave */
const changeSkillsBackground = (imageNumber) => {
    const skillsSection = $('#skills');
    let imageDiv = $(".skillImageContainer:nth-child(" + imageNumber + ") img");
    let imageSkillUrl = 'images/skillsBG.png';
    let imageUrl = 'images/skills/background/' + imageNumber + '.jpg';
    imageDiv.on({
        mouseenter: () => {
            skillsSection.css({
                'background-image': 'url(' + imageUrl + ')',
                'transition': 'all ease-in-out .5s'
            });
        }
    });
    skillsSection.on({
        mouseleave: () => {
            $(this).css({
                'background-image': 'url(' + imageSkillUrl + ')',
                'transition': 'all ease-in-out .5s'
            });
        }
    });
}

/* Navigation scroll function */
const links = () => {
    const homeSection = $('#home');
    const aboutSection = $('#about');
    const skillsSection = $('#skills');
    const portfolioSection = $('#portfolio');
    const contactSection = $('#contact');

    $(".link1").click(() => {
        $('html, body').animate({
            scrollTop: aboutSection.offset().top
        }, 1000);
    });
    $(".link2").click(() => {
        $('html, body').animate({
            scrollTop: skillsSection.offset().top
        }, 1000);
    });
    $(".link3").click(() => {
        $('html, body').animate({
            scrollTop: portfolioSection.offset().top
        }, 1000);
    });
    $(".link4").click(() => {
        $('html, body').animate({
            scrollTop: contactSection.offset().top
        }, 1000);
    });
    $(".link5").click(() => {
        $('html, body').animate({
            scrollTop: homeSection.offset().top
        }, 1000);
    });
}

/* Form contact validation.
Checking the validation with key press */

const validateEmail = (email) => {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validate = () =>{
    const input = $('.form-control');
    const textValidation = $('.success');
    const formContact = $('#formContact');

    const buttonSubmit = $('.btnSubmit');

    const email = $('#form-div__email');
    const name = $('#form-div__name');
    const surname = $('#form-div__surname');
    const message = $('#form-div__message');
    buttonSubmit.click((e) => {
        let emailValue = email.val();
        let nameValue = name.val();
        let surnameValue = surname.val();
        let messageValue = message.val();
        if(emailValue !== '' && nameValue !== '' && surnameValue !== '' && messageValue !== ''){
            if(validateEmail(emailValue)){ 
                $.ajax({
                    type: "post",
                    url: "./php/contact.php",
                    cache: false,
                    data: {
                        name: nameValue,
                        surname: surnameValue,
                        email: emailValue,
                        message: messageValue
                    },
                    success: () =>{
                        formContact.fadeOut();
                        textValidation.text("Dziękuję za pozostawienie informacji o sobie. Niebawem otrzymasz wiadomość na maila.")
                        textValidation.css('color','green');
                    }
                })
            }
            else{
                textValidation.text("Twój email jest nieprawidłowy. Proszę sprawdź poprawność Twojego maila.");
                textValidation.css('color','black');
            }
        }
        else{

            input.each(function(){
                if($(this).val() == ''){
                    $(this).css('border', 'solid 1px rgba(0, 77, 64, 0.8)');
                    textValidation.text("Proszę uzupełnić brakujące pola.");
                    textValidation.css('color','black');
                }
                else{
                    $(this).css('border', 'solid 1px #ced4da');
                }
            })
        }
    })

}