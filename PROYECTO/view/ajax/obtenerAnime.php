<?php
    
    session_start();

    $idAnime = $_GET["id"];

    require_once("../../config/connect.php");

    $cons ="SELECT * FROM `ANIMES` WHERE id_anime ='$idAnime'";
    $result = mysqli_query($conn, $cons);
    $data = array();

    if ($row = mysqli_fetch_assoc($result)) {
        $data[] = $row;
    }
    echo json_encode($data);    

?>