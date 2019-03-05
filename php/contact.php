<?php

if(isset($_POST['email']))
{
    $name = $_POST['name'];
    $surname = $_POST['surname'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    $to = 'gudalewiczpiotr@gmail.com';
    $subject = 'www.gudalewiczpiotr.pl - Zapytanie od klienta';

    $confirmation = <<<EMAIL
    
    Szanowny/a $name $surname

    Dziękuję za skontaktowanie się ze mną poprzez formularz z serwisu www.gudalewiczpiotr.pl. Niebawem
    otrzymasz wiadomość bezpośrednio ode mnie.

    Z poważaniem,
    Piotr Gudalewicz.

EMAIL;

    $header = <<<EMAIL

    Witam!

    Z tej strony $name $surname. 
    Chciałbym zostawić zapytanie z Pana platformy www.gudalewiczpiotr.pl za pomocą $email.
    Oto treść mojego zapytania: 

    $message.

    Pozdrawiam,
    $name $surname
    
EMAIL;

    mail($to,$subject, $header);
    mail($email,'www.gudalewiczpiotr.pl - potwierdzenie wysłania wiadomości.', $confirmation);
}
?>