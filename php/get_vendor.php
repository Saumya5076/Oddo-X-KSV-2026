<?php

include 'db.php';

$result = mysqli_query(
$conn,
"SELECT * FROM vendors ORDER BY id DESC"
);

$data = [];

while(
$row = mysqli_fetch_assoc($result)
){

$data[] = $row;

}

header(
'Content-Type: application/json'
);

echo json_encode($data);

?>