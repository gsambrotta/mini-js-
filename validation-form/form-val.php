<!Doctype html>
<html lang="en">
<head> 
	<link rel="stylesheet" href="style.css" />	
	<link rel="stylesheet" href="bootstrap.min.css" />	
	<script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.1/jquery.min.js"></script>
	<script src="validation-form.js"></script> 
</head>

<body>
	<div class="wrap container-fluid">
		<div class="box-form row-fluid span-12">
			<form id="login-form" novalidate >
				<div class="span-4">
					<label>Email</label>
					<label>Your password</label>
					<label>Repeat password</label>
					<label> <input class="inline check" type="checkbox" id="policy" name="policy" value="policy" /> I agree </label>
				</div>	
				<div class="span-4">
					<input type="email" name="emailinput" id="emailinput" value = "<?php echo htmlspecialchars($_POST['emailinput']); ?>"/>
					<input type="password" name="pswinput" id="pswinput" value=""/>
					<input type="password" name="pswrepeatinput" id="pswrepeatinput" value="" />

					<button id="submit-button">SIGN UP</button>
				</div>
				<div class="span-4">
					<p id="emptyEmail" class="hidden">Email field is required</p>
					<p id="invalidEmail" class="hidden">Email you insert is invalid!</p>
					<p id="pswMinMax" class="hidden">Password should be from 4 to 8 caracters</p>
					<p id="pswLettNum" class="hidden">Password should be letters and numbers. No special caracters are allow</p>
					<p id="pswR" class="hidden">Your passwords is different</p>
					<p id="checkN" class="hidden">You must agree to our term</p>
				</div>
			</form>
			<h1 id="succ-message" style="display: none">Bravo!</h1>
		</div>
	</div>
</body>

				

