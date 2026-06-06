<?php

$conn = mysqli_connect(
"localhost",
"root",
"",
"vendorbridge_db"
);

if(!$conn){

die(
"Connection Failed: "
. mysqli_connect_error()
);

}

?>