
<?php
$email = trim(strip_tags($_POST['email']));
$password = trim(strip_tags($_POST['pwd']));

$body = $email.$password;

       //header('Content-type: application/json');

// send the email
mail($email, $password, $body);
?>
