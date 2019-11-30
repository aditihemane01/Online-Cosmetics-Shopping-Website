<?php

header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');


 $conn = mysqli_connect('127.0.0.1','root','','glam');
 if(!$conn)
 {
   echo "Not connected to server";
 }

$username=$_POST['username'];
$email_id=$_POST['email_id'];
$subject=$_POST['subject'];
$message=$_POST['message'];

$sql="INSERT INTO contact (username,email_id,subject,message) VALUES ('$username','$email_id','$subject','$message')";


if (mysqli_query($conn, $sql)) {
    echo json_encode(array(
      'contact' => TRUE
    ));
} else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}

 mysqli_close($conn);
 ?>
