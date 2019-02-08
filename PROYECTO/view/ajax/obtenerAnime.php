<?php
session_start();
error_reporting(E_ALL);
ini_set('display_errors', '1');

$idAnime = $_GET["id"];

require_once("../../config/connect.php");

$cons ="SELECT * FROM `ANIMES` WHERE id_anime ='$idAnime'";
$result = mysqli_query($conn, $cons);
$data = array();

    while ($row = mysqli_fetch_assoc($result)) {
        $data[] = $row;
    }
    echo json_encode($data);    
    


?>