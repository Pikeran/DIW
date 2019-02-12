<?php
session_start();

$id = $_GET["id"];


require_once("../../config/connect.php");

$cons ="SELECT * FROM `MENSAJES` WHERE id_foro ='$id'";
$result = mysqli_query($conn, $cons);
$data = array();

while ($row = mysqli_fetch_assoc($result)) {
    $data[] = $row;
}
echo json_encode($data);
?>