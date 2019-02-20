<?php
error_reporting(E_ALL);
ini_set('display_errors', '1');



require_once("modelos/Usuario.php");
$usuarioSesion = $_SESSION["user-sesion"];
$usuarioSesion = unserialize($usuarioSesion);

$usuario_activo = $usuarioSesion->getId();


// ****RECIBIMOS ID --->id_activo*****
?>

<input type="hidden" id="id_activo" value="<?php echo $usuario_activo ?>">

<?php require_once("view/body_listado_animes.php");?>


