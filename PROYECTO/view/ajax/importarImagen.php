<?php
    session_start();
    error_reporting(E_ALL);
    ini_set('display_errors', '1');
    require_once("../../modelos/Usuario.php");
    $usuarioSesion = $_SESSION["user-sesion"];
    $usuarioSesion = unserialize($usuarioSesion);

    $directorio_destino = "view/user-img/";
    $nombre_fichero = $_FILES["logo"]['name'];

    $aux = explode(".",$nombre_fichero);
    $extension = $aux[count($aux)-1];

    $fichero_subido = $directorio_destino . $usuarioSesion->getId() . "." . $extension;

    echo $fichero_subido;

    echo '<pre>';
    if (move_uploaded_file($_FILES['logo']['tmp_name'], $fichero_subido)) {
        echo "El fichero es válido y se subió con éxito.\n";
    } else {
        echo "¡Posible ataque de subida de ficheros!\n";
    }
    echo'</pre>';
    echo 'Más información de depuración:';
    print_r($_FILES);

    


?>
