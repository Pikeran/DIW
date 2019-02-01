<?php

$identificador = $_POST["id"];
require_once("modelos/Usuario.php");
$usuarioSesion = $_SESSION["user-sesion"];
$usuarioSesion = unserialize($usuarioSesion);

if($identificador == $usuarioSesion->getId()){  //En este caso accederemos a un perfil propio y podremos modificar cosas

    require_once("view/usuario_personal.php");

}else{  //En este caso es un perfil privado asi que tan solo podremos ver la informacion de ese usuario y añadirle como amigo.
    
    require_once("view/usuario_publico.php");
}

?>