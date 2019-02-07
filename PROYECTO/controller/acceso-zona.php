<?php
error_reporting(E_ALL);
ini_set('display_errors', '1');

$id_activo = $_POST["identificador"];
require_once("modelos/Usuario.php");
$usuarioSesion = $_SESSION["user-sesion"];
$usuarioSesion = unserialize($usuarioSesion);

//AQUI EVITAMOS MAL ACCESO A LA PAGINA
if(!isset($_POST['identificador'])) {
    header('Location: index.php');
}

// ****RECIBIMOS ID ---> INPUT id-zona-user*****
?>

<input type="hidden" id="id_zona_user" value="<?php echo $id_activo?>">

<?php require_once("view/usuario.php");?>