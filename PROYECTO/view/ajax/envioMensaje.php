<?php
session_start();
error_reporting(E_ALL);
ini_set('display_errors', '1');


$texto = $_GET["texto-mensaje"];
$id = $_GET["id_anime"];

require_once("../../config/connect.php");

$cons = "";
$result = mysqli_query($conn, $cons);


?>