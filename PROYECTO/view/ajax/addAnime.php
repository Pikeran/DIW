<?php
session_start();
error_reporting(E_ALL);
ini_set('display_errors', '1');

require_once("../../modelos/Usuario.php");
$usuarioSesion = $_SESSION["user-sesion"];
$usuarioSesion = unserialize($usuarioSesion);

$idAnime = $_GET["id"];
$idUser = $usuarioSesion->getId();

require_once("../../config/connect.php");

$cons = "INSERT INTO `FAVORITOS` (`CREATED_AT`, `UPDATED_AT`, `id_anime`, `id`) VALUES ( CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, '$idAnime', '$idUser')";
$result = mysqli_query($conn, $cons);


?>