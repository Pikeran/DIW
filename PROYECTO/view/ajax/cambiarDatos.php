<?php
session_start();
error_reporting(E_ALL);
ini_set('display_errors', '1');

require_once("../../config/connect.php");
require_once("../../modelos/Usuario.php");
$usuarioSesion = $_SESSION["user-sesion"];
$usuarioSesion = unserialize($usuarioSesion);
$id = $usuarioSesion->getId();

if(isset($_GET["nombre"])){

    $var = $_GET["nombre"];
    $cons = "UPDATE `USUARIOS` SET `nombre` = '$var' WHERE `USUARIOS`.`id` =$id";
    $result = mysqli_query($conn, $cons);
}else{
    if(isset($_GET["apellidos"])){
        $var = $_GET["apellidos"];
        $cons = "UPDATE `USUARIOS` SET `apellido` = '$var' WHERE `USUARIOS`.`id` =$id";
        $result = mysqli_query($conn, $cons);
    }else{
        if(isset($_GET["localidad"])){
            $var = $_GET["localidad"];
            $cons = "UPDATE `USUARIOS` SET `localidad` = '$var' WHERE `USUARIOS`.`id` =$id";
            $result = mysqli_query($conn, $cons);
        }else{
            $var = $_GET["descripcion"];
            $cons = "UPDATE `USUARIOS` SET `descripcion` = '$var' WHERE `USUARIOS`.`id` =$id";
            $result = mysqli_query($conn, $cons);


        }
    }     
}

?>