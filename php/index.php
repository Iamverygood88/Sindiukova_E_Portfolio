<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="main.css">
    <title>Contact Form</title>
</head>
<body>
<h1 class="hidden">Contact Form Made by Evgeniia Sindiukova</h1>
<form id="contactForm" action="data/contact.php" method="post">
			<div class="formTwo">
                <div class="wrapper">
                <label for="name">Name</label>
                <input type="text" required id="name"  size="32" placeholder="" class="colortext" name="name">
                </div>
                <div class="wrapper">
                <label class="surn-wrap" for="surname">Surname</label>
                <input type="text" required id="surname" size="32" placeholder="" class="colortext"
                name ="surname">
                </div>
			</div>
			<div id="formThree">
                <div class="wrapper">
                <label for="email">Email</label>	
                <input type="email" required id="email" size="32" placeholder="" class="colortext" name="email">
                </div>
			</div>
            <div id="formThree">
                <div class="wrapper">
                <label for="subject">Subject</label>	
                <input type="text" required id="subject" size="32" placeholder="" class="colortext" name="subject">
                </div>
			</div>
			<div id="formFive">
                <div class="wrapper">
                <label for="message">Comments</label>	 
				<textarea id="message" rows="5"
                cols="33" class="colortext one" placeholder="" name="message"></textarea>
                </div>
			</div>
			<div id="buttonForm">
                <button type="submit" class="buttonFormOne"  name="button1">Send</button>
			</div>

</form>
            
    
</body>
</html>
