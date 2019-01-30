<?php
require("includes/connect.php");

    $usuario = $_SESSION["id_usuario"];
    $cons ="SELECT * FROM USUARIOS WHERE id = '$usuario'";
    $result = mysqli_query($conn, $cons);
         
        while($row = mysqli_fetch_array($result)){
            
        }


?>