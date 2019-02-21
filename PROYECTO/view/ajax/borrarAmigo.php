<?php
session_start();


require_once("../../modelos/Usuario.php");
$usuarioSesion = $_SESSION["user-sesion"];
$usuarioSesion = unserialize($usuarioSesion);

$idActiva = $_GET["id"];
$idUser = $usuarioSesion->getId();

require_once("../../config/connect.php");

$cons1 = "DELETE FROM `AMIGOS` WHERE `AMIGOS`.`idUser` = '$idUser' AND `AMIGOS`.`idUser_FK` = '$idActiva'";
$cons2 = "DELETE FROM `AMIGOS` WHERE `AMIGOS`.`idUser` = '$idActiva' AND `AMIGOS`.`idUser_FK` = '$idUser'";
$result = mysqli_query($conn, $cons1);
$result2 = mysqli_query($conn, $cons2);


?>