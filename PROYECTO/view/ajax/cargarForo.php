<?php
session_start();

$id = $_GET["id"];


require_once("../../config/connect.php");

$cons ="SELECT mensajes.id_mensaje,mensajes.texto,mensajes.CREATED_AT,mensajes.UPDATED_AT,mensajes.id,mensajes.ID_PADRE,mensajes.id_foro,mensajes.nivel,mensajes.login,usuarios.urlImagen FROM mensajes INNER JOIN usuarios ON mensajes.login = usuarios.login WHERE mensajes.id_foro = '$id'";
$result = mysqli_query($conn, $cons);
$data = array();

while ($row = mysqli_fetch_assoc($result)) {
    $data[] = $row;
}
echo json_encode($data);
?>