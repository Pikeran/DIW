<?php

$identificador = $_POST["identificador"];
require_once("modelos/Usuario.php");
$usuarioSesion = $_SESSION["user-sesion"];
$usuarioSesion = unserialize($usuarioSesion);

?>

<input type="hidden" id="idUsuario" value="<?php echo $identificador?>">

<?php

require_once("view/usuario_privado.php");

/*
if($identificador == $usuarioSesion->getId()){  //En este caso accederemos a un perfil propio y podremos modificar cosas

    require_once("view/usuario_privado.php");

}else{  //En este caso es un perfil privado asi que tan solo podremos ver la informacion de ese usuario y añadirle como amigo.
    
    require_once("view/usuario_publico.php");
}
*/
?>