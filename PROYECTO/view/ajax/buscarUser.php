<?php
session_start();


require_once("../../config/connect.php");
$valor = $_GET["valor"];
$cons ="SELECT * FROM `USUARIOS` WHERE login LIKE '$valor%'";

$result = mysqli_query($conn, $cons);
$data = array();

while ($row = mysqli_fetch_assoc($result)) {
    $data[] = $row;
}
echo json_encode($data);
?>