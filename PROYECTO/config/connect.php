<?php

// Conectando, seleccionando la base de datos
$servidor = "localhost";
$usuario = "daw";
$password = "daw";
$bbdd = "Animekun";
          
   $conn = mysqli_connect($servidor, $usuario, $password, $bbdd);
    
        if (!$conn) {
            die("Conexi&ocacuten fallida: " . mysqli_connect_error());
        }

?>
