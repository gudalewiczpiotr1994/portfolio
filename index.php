<!DOCTYPE html>
<html lang="pl">
<head>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
    <meta charset="UTF-8">
    <title>Piotr Gudalewicz - front-end developer</title>
    <meta property="og:title" content="Piotr Gudalewicz - Front-end-Developer Suwałki"/>
    <meta property="og:url" content="http://www.gudalewiczpiotr.pl"/>
    <meta name="dc.language" content="pl">
    <meta name="DC.Title" content="Piotr Gudalewicz - portfolio front-end developera"/>
    <meta name="DC.Description"
          content="Piotr Gudalewicz - Front-end-Developer - informatyk z pasją oraz wizją na Twoje zlecenie."/>
    <meta name="DC.Publisher" content="Piotr Gudalewicz"/>

    <link rel="shortcut icon" type="image/png" href="images/PG_icon.png"/>

    <meta name="keywords"
          content="Piotr Gudalewicz, Front-end developer, Tworzenie stron internetowych, Tworzenie stron www, Suwałki, Strony internetowe, aplikacje webowe">
    <meta name="description" content="Junior Front-end Developer">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
          integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
    <link href="https://fonts.googleapis.com/css?family=Merienda|Sarala" rel="stylesheet">
    <link rel="stylesheet" href="css/main.css">
    <link rel="stylesheet" href="css/fontello/css/fontello.css">
    <script src="js/main.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js"
            integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49"
            crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js"
            integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy"
            crossorigin="anonymous"></script>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link alt="canonical" href="http://www.gudalewiczpiotr.pl/">
</head>
<body>

<nav id="mainNavbar" class="navbar navbar-expand-lg navbar-light fixed-top">
    <a class="link5 navbar-brand" href="#">
        <img src="images/PG_white.png">
    </a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ml-auto">
            <li class="nav-item">
                <a class="link1 nav-link" href="#">O mnie</a>
            </li>
            <li class="nav-item">
                <a class="link2 nav-link" href="#">Co poznałem</a>
            </li>
            <li class="nav-item">
                <a class="link3 nav-link" href="#">Moje Projekty</a>
            </li>
            <li class="nav-item">
                <a class="link4 nav-link" href="#">Kontakt</a>
            </li>
        </ul>
    </div>
    <div class="progressiveBar">
        <div class="dot">
            <div class="barNavigation">
                <a class="link1" href="#">
                    <div id="aboutDot" class="dotNav"></div>
                </a>
                <a class="link2" href="#">
                    <div id="skillsDot" class="dotNav"></div>
                </a>
                <a class="link3" href="#">
                    <div id="portfolioDot" class="dotNav"></div>
                </a>
                <a class="link4" href="#">
                    <div id="contactDot" class="dotNav"></div>
                </a>
            </div>
        </div>
    </div>
</nav>
<main>
    <section id="home">
        <div class="container">
            <div class="start-content text-center">
                    <div class="start-content-information text-center">
                        <h1 class="text-center">Gudalewicz Piotr</h1>
                        <div id="fadeIn"></div>
                    </div>
            </div>
        </div>
        <div class="row social-media text-center">
            <div class="col-4 social-tmb">
                    <span>
                        <a href="https://github.com/gudalewiczpiotr1994" target="_blank">
                            <i class="icon-github-circled"></i>
                            <div class="social-media-onhover">
                                <p>Git</p>
                            </div>
                        </a>
                    </span>
            </div>
            <div class="col-4 social-tmb">
                    <span class="test">
                        <a href="https://www.linkedin.com/in/piotr-gudalewicz-753559165/" target="_blank">
                            <i class="icon-linkedin"></i>
                            <div class="social-media-onhover">
                                <p>LinkedIn</p>
                            </div>
                        </a>
                    </span>
            </div>
            <div class="col-4 social-tmb">
                    <span class="test">
                <a class="link4" href="#">
                        <i class="icon-mail"></i>
                            <div class="social-media-onhover">
                                <p>Kontakt</p>
                            </div>
                        </a>
                    </span>
            </div>
        </div>
        </div>
    </section>
    <section id="about">
        <div class="container text-center">
            <div class="aboutMe">
                <div class="topline"></div>
                <h2>O mnie</h2>
                <div class="underline"></div>
                <p>Nazywam się Piotr Gudalewicz.
                    Jestem absolwentem Uniwerystetu Warmińsko-Mazurskiego w Olsztynie na kierunku Informatyka Ogólna ze
                    stopniem Inżyniera. </p>
                <p>Od 2017 roku interesuję się technologiami webowymi, w których zaangażowane są techniki front-end'owe.
                    Dotychczas w swoich projektach jak i w pracy wykorzystywałem HTML, CSS, SCSS, Bootstrap, JS, JQuery, Gulp, React JS, Angular 2+ oraz
                    PHP zdobywając przy tym doświadczenie komercyjne.
                </p>
                <p>Za sobą mam ukończonych kilka własnych projektów, kilka kursów oraz udział w rozwoju firm, w których miałem okazję pracować. Dzięki temu
                    nie obawiam się nowych wyzwań.  
                </p>
                <p>Jeżeli jesteś zainteresowany/na współpracą ze mną lub moim zatrudnieniem, z przyjemnością odpowiem Ci
                    na wszelkie pytania. Sprawdź na co mnie stać.</p>
            </div>
        </div>
    </section>
    <section id="skills">
        <div class="container text-center">
            <div class="skillsContainer">
                <h2>Co poznałem</h2>
                <div class="underline"></div>
            </div>
            <div class="row colorDiv">
                <div class="col-md-4 col-6 skillImageContainer">
                    <img src="images/skills/1.png" alt="HTML">
                    <p>HTML 5</p>
                </div>
                <div class="col-md-4 col-6 skillImageContainer">
                    <img src="images/skills/2.png" alt="CSS">
                    <p>CSS + SCSS + BEM</p>
                </div>
                <div class="col-md-4 col-6 skillImageContainer">
                    <img src="images/skills/3.png" alt="Bootstrap">
                    <p>Bootstrap</p>
                </div>
                <div class="col-md-4 col-6 skillImageContainer">
                    <img src="images/skills/4.png" alt="JavaScript">
                    <p>Java Script (ES6)</p>
                </div>
                <div class="col-md-4 col-6 skillImageContainer">
                    <img src="images/skills/5.png" alt="JQuery">
                    <p>JQuery</p>
                </div>
                <div class="col-md-4 col-6 skillImageContainer">
                    <img src="images/skills/6.png" alt="Angular">
                    <p>Angular + TypeScript</p>
                </div>
                <div class="col-md-4 col-6 skillImageContainer">
                    <img src="images/skills/7.png" alt="React">
                    <p>React</p>
                </div>
                <div class="col-md-4 col-6 skillImageContainer">
                    <img src="images/skills/8.png" alt="Gulp">
                    <p>Gulp</p>
                </div>
                <div class="col-md-4 col-6 skillImageContainer">
                    <img src="images/skills/9.png" alt="PHP">
                    <p>PHP</p>
                </div>
            </div>
        </div>
    </section>
    <section id="portfolio" class="text-center">
        <div class="container">
            <div class="portrolioContainer">
                <div class="arrow arrow-first"></div>
                <div class="arrow arrow-second"></div>
                <h2>Portfolio</h2>
                <div class="row my-5">
                    <div class="project">
                        <a href="http://www.kotufilmowanie.pl/" target="_blank">
                            <img src="images/portfolio/kotufilmowanie.png">
                            <div class="overlay">
                                <p>Marcin Kotowicz - fotografia & filmowanie</p>
                            </div>
                        </a>
                    </div>
                    <div class="project">
                        <a href="http://www.gudalewiczpiotr.pl/TastyDishes/" target="_blank">
                            <img src="images/portfolio/Tasty%20Dishes.jpg">
                            <div class="overlay">
                                <p>Tasty Dishes - szablon restauracji</p>
                            </div>
                        </a>
                    </div>
                    <div class="project">
                        <a href="http://www.gudalewiczpiotr.pl/darkocean/" target="_blank">
                            <img src="images/portfolio/darkocean.jpg">
                            <div class="overlay">
                                <p>Dark Ocean - Dark theme</p>
                            </div>
                        </a>
                    </div>
                    <div class="project">
                        <a href="http://www.gudalewiczpiotr.pl/shiningworld/" target="_blank">
                            <img src="images/portfolio/shiningworld.png">
                            <div class="overlay">
                                <p>Shiningworld - szablon podróżnika</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <?php include('php/contact.php'); ?>
    <section id="contact">
        <div class="container text-center" style="padding: 50px;">
            <div class="row">
                <div class="col-md-6 contactInfo">
                    <h3>Dane kontaktowe</h3>
                    <div class="underline"></div>
                    <div class="my-5">
                        <p>Suwałki 16-400</p>
                        <p>E-mail: gudalewiczpiotr@gmail.com</p>
                        <p>Kom: 793-589-924</p>
                    </div>
                </div>
                <div class="col-md-6 contactForm form-group text-center">
                    <h3>Kontakt</h3>
                    <div class="underline"></div>
                    <div class="form-div">
                        <form id="formContact" class="form-group" action="<?= $_SERVER['PHP_SELF'] ?>" method="post">
                            <div class="row">
                                <fieldset class="col-lg-6 my-1">
                                    <input aria-label="Wpisz imię" id="form-div__name" class="form-control" type="text" placeholder="Imię *" required name="name">
                                </fieldset>
                                <fieldset class="col-lg-6 my-1">
                                    <input aria-label="Wpisz nazwisko" id="form-div__surname" class="form-control" type="text" placeholder="Nazwisko *" name="surname"  required>
                                </fieldset>
                                <fieldset class="col-12">
                                    <input type="email" aria-label="Wpisz maila" id="form-div__email" class="form-control my-3" placeholder="E-mail *" name="email" >
                                </fieldset>
                                <fieldset class="col-12">
                                    <div class="form-group">
                                        <textarea aria-label="Masz pytanie? Napisz je tutaj" style="resize: none;" id="form-div__message" class="form-control" id="exampleTextarea"
                                                  rows="6" required name="message" value="<? $message ?>"></textarea>
                                    </div>
                                </fieldset>
                                    <button name="submit" type="button" class="btnSubmit" data-submit="" ...Wysyłam>
                                        Wyślij
                                    </button>
                                </div>
                        </form>
                        <div class="success"></div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <footer class="text-center">&copy;2019 Gudalewicz Piotr. Wszelkie prawa zastrzeżone</footer>
</main>
</body>
</html>