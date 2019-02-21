<?php
    session_start();

    error_reporting(E_ALL);
    ini_set('display_errors', '1');

    $idUser = $_GET["id"];

    require_once("../../config/connect.php");

    //$angecon="SELECT * FROM ANIMES where id_anime in (SELECT id_anime FROM `FAVORITOS` WHERE id=6);"
    $sql  = "SELECT * FROM `ANIMES` WHERE id_anime IN (SELECT id_anime FROM `FAVORITOS` WHERE id = '$idUser')";
    //mysqli_set_charset('utf8',$conn);
    $result = mysqli_query($conn, $sql);
    $data = array();

    while ($row = mysqli_fetch_assoc($result)) {
        $data[] = $row;
    }

    echo $aux = json_encode($data);   

?>