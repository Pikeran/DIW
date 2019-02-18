<?php
session_start();

$id = $_GET["id"];


require_once("../../config/connect.php");

$cons ="SELECT MENSAJES.id_mensaje,MENSAJES.texto,MENSAJES.CREATED_AT,MENSAJES.UPDATED_AT,MENSAJES.id,MENSAJES.ID_PADRE,MENSAJES.id_foro,MENSAJES.nivel,MENSAJES.login,USUARIOS.urlImagen FROM MENSAJES INNER JOIN USUARIOS ON MENSAJES.login = USUARIOS.login WHERE MENSAJES.id_foro = '$id'";
$result = mysqli_query($conn, $cons);
$data = array();

while ($row = mysqli_fetch_assoc($result)) {
    $data[] = $row;
}
echo json_encode($data);
?>