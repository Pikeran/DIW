<?php
    session_start();
    error_reporting(E_ALL);
    ini_set('display_errors', '1');

    require_once("../../modelos/Usuario.php");
    $usuarioSesion = $_SESSION["user-sesion"];
    $usuarioSesion = unserialize($usuarioSesion);
    require_once("../../config/connect.php");

    $directorio_destino = "../user-banner/";
    $directorio_acceso = "view/user-banner/";
    $nombre_fichero = $_FILES["banner"]['name'];
    $id = $usuarioSesion->getId();
    $aux = explode(".",$nombre_fichero);
    $extension = $aux[count($aux)-1];
    $fichero_subido = $directorio_destino . $usuarioSesion->getId() . "." . $extension;
    
    if (move_uploaded_file($_FILES['banner']['tmp_name'], $fichero_subido)) {
        
        $fichero_subido =  $directorio_acceso . $usuarioSesion->getId() . "." . $extension;

        $cons ="UPDATE `USUARIOS` SET `urlBanner` = '$fichero_subido' WHERE `id` = '$id'";
        $result = mysqli_query($conn, $cons);


    } else {
        
    }
    
    header("Location: ../../zona_user.php?identificador=$id");

?>