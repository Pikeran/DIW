<?php
error_reporting(E_ALL);
ini_set('display_errors', '1');



require_once("modelos/Usuario.php");
$usuarioSesion = $_SESSION["user-sesion"];
$usuarioSesion = unserialize($usuarioSesion);

$id_anime = $_GET["id"];
$usuario_activo = $usuarioSesion->getId();


//AQUI EVITAMOS MAL ACCESO A LA PAGINA
if(!isset($_GET['id'])) {
    header('Location: index.php');
}

// ****RECIBIMOS ID ---> INPUT id_anime , id_activo*****
?>

<input type="hidden" id="id_anime" value="<?php echo $id_anime ?>">
<input type="hidden" id="id_activo" value="<?php echo $usuario_activo ?>">

<?php require_once("view/anime.php");?>


