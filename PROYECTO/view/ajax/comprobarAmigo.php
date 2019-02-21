<?php
session_start();


require_once("../../modelos/Usuario.php");
$usuarioSesion = $_SESSION["user-sesion"];
$usuarioSesion = unserialize($usuarioSesion);

$id_activo = $_GET["id"];
$id_sesion = $usuarioSesion->getId();

require_once("../../config/connect.php");

$cons ="SELECT * FROM AMIGOS WHERE idUser = '$id_sesion' AND idUser_FK = '$id_activo'";
$result = mysqli_query($conn, $cons);

if(mysqli_num_rows($result) == 1){ //comprobamos si el usuario mostrado es amigo del user session.

    echo "true";

}else{  //si no son amigos
   if($id_activo != $id_sesion){
        echo "false";
   }else{
        echo "unico";
   }
}
?>