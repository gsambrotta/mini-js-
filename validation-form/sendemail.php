<?php
       // from the form
       $email = trim(strip_tags($_POST['emailinput']));
       $password = trim(strip_tags($_POST['pswinput']));

       // set here
       $subject = "Registration successful";
       $to = 'g.sambrotta@gmail.com';

       $body = <<<HTML
$email
$password
HTML;

       $headers .= "Content-type: text/html\r\n";
       header('Content-type: application/json');

       // send the email
       mail($to, $subject, $body, $headers);

?>