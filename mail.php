<?php
//get data from form  
$name = $_POST['name'];
$email= $_POST['email'];
$number= $_POST['number'];

$message= $_POST['message'];
$to = "parvezalam9970@gmail.com";
$subject = "Mail From codeconia";
$txt ="Name = ". $name . "\r\n  Email = " . $email . "\r\n Message =" . $message  ."\r\n number =" . $number;
$headers = "From: noreply@ycodeconia.com" . "\r\n" .
"CC: somebodyelse@example.com";
if($email!=NULL){
    mail($to,$subject,$txt,$headers);
}
//redirect
header("Location:thankyou.html");
?>