<?php

$id_activo = $_POST["identificador"];
require_once("modelos/Usuario.php");
$usuarioSesion = $_SESSION["user-sesion"];
$usuarioSesion = unserialize($usuarioSesion);


//pasamos la id por post para facilitarnos al acceso a las credenciales del usuario.
?>
<input type="hidden" id="id_zona_user" value="<?php echo $id_activo?>">
<?php

require_once("view/usuario.php");

/*
if($identificador == $usuarioSesion->getId()){  //En este caso accederemos a un perfil propio y podremos modificar cosas

    require_once("view/usuario_privado.php");

}else{  //En este caso es un perfil privado asi que tan solo podremos ver la informacion de ese usuario y añadirle como amigo.
    
    require_once("view/usuario_publico.php");
}
*/
?>