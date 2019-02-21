<?php
session_start();
error_reporting(E_ALL);
ini_set('display_errors', '1');

require_once("../../modelos/Usuario.php");
$usuarioSesion = $_SESSION["user-sesion"];
$usuarioSesion = unserialize($usuarioSesion);

$id_user = $usuarioSesion->getId();
$texto = $_GET["texto-mensaje"];
$id = $_GET["id_anime"];
$login = $usuarioSesion->getLogin();

require_once("../../config/connect.php");

$cons = "INSERT INTO `MENSAJES` ( `texto`, `CREATED_AT`, `UPDATED_AT`, `id`, `id_foro`, `nivel`,`login`) VALUES ('$texto', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, '$id_user','$id', '1','$login')";
$result = mysqli_query($conn, $cons);

header("Location: ../../zona_anime.php?id=$id");

?>