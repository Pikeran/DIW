<?php
session_start();

$id = $_GET["id"];


require_once("../../config/connect.php");

$cons ="SELECT * FROM `USUARIOS` WHERE id ='$id'";
$result = mysqli_query($conn, $cons);
$data = array();

while ($row = mysqli_fetch_assoc($result)) {
    $data[] = $row;
}
echo json_encode($data);
?>