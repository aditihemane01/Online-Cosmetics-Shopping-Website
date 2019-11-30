<?php

header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');


 $conn = mysqli_connect('127.0.0.1','root','','glam');
 if(!$conn)
 {
   echo 'Not connected to server';
 }

$username=$_POST['username'];
$password=$_POST['password'];
$email_id=$_POST['email_id'];
$mobile_no=$_POST['mobile_no'];

$sql="INSERT INTO customer_account (username,password,email_id,mobile_no) VALUES ('$username','$password','$email_id','$mobile_no')";

if (mysqli_query($conn, $sql)) {
    echo json_encode(array(
      'register' => TRUE
    ));
} else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}

 mysqli_close($conn);
 ?>
