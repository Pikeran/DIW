<?php
error_reporting(E_ALL);
ini_set('display_errors', '1');

$id_anime = $_GET["id"];

//AQUI EVITAMOS MAL ACCESO A LA PAGINA
if(!isset($_GET['id'])) {
    header('Location: index.php');
}

// ****RECIBIMOS ID ---> INPUT id_anime*****
?>

<input type="hidden" id="id_anime" value="<?php echo $id_anime?>">

<?php require_once("view/anime.php");?>


