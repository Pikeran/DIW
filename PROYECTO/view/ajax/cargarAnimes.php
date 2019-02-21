<?php
session_start();

require_once("../../config/connect.php");

$cons ="SELECT * FROM `ANIMES`";
$result = mysqli_query($conn, $cons);
$data = array();

while ($row = mysqli_fetch_assoc($result)) {
    $data[] = $row;
}
echo json_encode($data);
?>