<?php
	$name = $_POST['name'];
	$email = $_POST['email'];
	$text = nl2br($_POST['text']);

	$to = "g.sambrotta@gmail.com";
	$subject = "Mail inviata da".$name."(Gio! Mail dal sito!!)";
	$message = $nome.": ".$email." ".$text;

	//check all field all fill in, if it is, send it.
	if(!empty($name) && !empty($email) && !empty($text)){
		mail($to, $subject, $message);
	} else {
		header(':', true, 400);
	}
	// funzione che ti permette di vedere il contenuto delle variabili. Ottima per quando ci sono gli errori "invisibili" di php.
	#var_dump ($to, $subject, $message, $headers, $mail_in_html );

?>
