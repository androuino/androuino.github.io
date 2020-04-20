<?php
if(!isset($_POST['submit']))
{
	//This page should not be accessed directly. Need to submit the form.
	echo "error; you need to submit the form!";
}
else {
	if($_POST["name"] == "" || $_POST["emailaddress"] == "" || $_POST["subject"] == "")
		echo "Fields cannot be empty"
}
$name = $_POST['name'];
$emailaddress = $_POST['emailaddress'];
$subject = $_POST['subject'];

//Validate first
if(empty($name)||empty($emailaddress))
{
    echo "Name and email are mandatory!";
    exit;
}

if(IsInjected($emailaddress))
{
    echo "Bad email value!";
    exit;
}

$email_from = $emailaddress;//<== update the email address
$email_subject = "New Inquiry";
$email_body = "You have received a new message from the user $name.\n".
    "Here is the message:\n $subject".

$message = wordwrap($email_body, 70);

$to = "sem@inspeedia.com";//<== update the email address
$headers = 'From:'. $email_from . "rn";
$headers .= 'Cc:'. $emailaddress . "rn";
//Send the email!
mail($to, $email_subject, $message, $headers);
echo "Your email has been sent successfully! Thank you."
//done. redirect to thank-you page.
//header('Location: thank-you.html');


// Function to validate against any email injection attempts
function IsInjected($str)
{
  $injections = array('(\n+)',
              '(\r+)',
              '(\t+)',
              '(%0A+)',
              '(%0D+)',
              '(%08+)',
              '(%09+)'
              );
  $inject = join('|', $injections);
  $inject = "/$inject/i";
  if(preg_match($inject,$str))
    {
    return true;
  }
  else
    {
    return false;
  }
}

?>
