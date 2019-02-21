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

$cons ="SELECT * FROM `FAVORITOS` WHERE id ='$idUser' AND id_anime ='$idAnime'";
$result = mysqli_query($conn, $cons);
$data = array();

if(mysqli_num_rows($result) == 1){
    while ($row = mysqli_fetch_assoc($result)) {
        $data[] = $row;
    }
    echo json_encode($data);    
}else{
    echo json_encode($data);
}
    


?>