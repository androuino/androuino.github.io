<?php
require 'PHPMailerAutoload.php';

$mail = new PHPMailer;

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.mailgun.org';                     // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'postmaster@josapedmoreno.com';   // SMTP username
$mail->Password = '02dc6205cbd1813d12a12ee4ddc71054-8b7bf2f1-1eebde6f';                           // SMTP password
$mail->SMTPSecure = 'tls';                            // Enable encryption, only 'tls' is accepted

$mail->From = $_POST['emailaddress'];
$mail->FromName = $_POST['name'];
$mail->addAddress($_POST['emailaddress']);                 // Add a recipient

$mail->WordWrap = 150;                                 // Set word wrap to 150 characters

$mail->Subject = 'Hello';
$mail->Body    = $_POST['subject'];

if(!$mail->send()) {
    echo 'Message could not be sent.';
    echo 'Mailer Error: ' . $mail->ErrorInfo;
} else {
    echo 'Message has been sent';
}
?>
