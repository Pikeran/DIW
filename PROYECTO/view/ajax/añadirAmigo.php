<?php
session_start();


require_once("../../modelos/Usuario.php");
$usuarioSesion = $_SESSION["user-sesion"];
$usuarioSesion = unserialize($usuarioSesion);

$idActiva = $_GET["id"];
$idUser = $usuarioSesion->getId();

require_once("../../config/connect.php");

$cons = "INSERT INTO `AMIGOS` (`idUser`, `idUser_FK`) VALUES ('$idUser', '$idActiva'),('$idActiva','$idUser')";
$result = mysqli_query($conn, $cons);

?>