<?php

 header('Access-Control-Allow-Origin: *');
 header('Content-Type: application/json');

 $conn = mysqli_connect('127.0.0.1','root','','glam');
 if(!$conn)
 {
   echo 'Not connected to server';
 }

// Check connection
if ($conn->connect_error) {
  echo "Connection failed: " . $conn->connect_error;
} else {

  if (isset($_POST["username"]) && !empty($_POST["username"]) && isset($_POST["password"]) && !empty($_POST["password"])) {
    $username = $_POST["username"];
    $password = $_POST["password"];

    $sql = "SELECT * FROM customer_account WHERE username = '$username' ;";


    if (!mysqli_query($conn, $sql)) {
      echo "internal server error";
      die('Error: ' . mysqli_error($conn));
    } else {

      $result = $conn->query($sql);
      if ($result->num_rows > 0) {
        // output data of each row
        while($row = $result->fetch_assoc()) {
          if ($password == $row['password']) {
            $res = array(
              'login' => TRUE,
              'username' => $row['username']
            );
          } else {
            $res = array(
              'login' => FALSE
            );
          }
        }
      }
      $conn->close();
      echo json_encode([$res]);
    }

  } else {
    echo "bad request";
  }

}




 ?>
