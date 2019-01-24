<?php
// Conectando, seleccionando la base de datos
$servidor = "localhost";
$usuario = "id8511598_animekun";
$password = "11111";
$bbdd = "id8511598_animekun";
            
   $conn = mysqli_connect($servidor, $usuario, $password, $bbdd);
    
        if (!$conn) {
            die("Conexi&ocacuten fallida: " . mysqli_connect_error());
        }

?>
