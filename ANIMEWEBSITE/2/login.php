
<?php
session_start();
?>

<?php require_once "includes/conection.php" ?>
<?php include("includes/header.php"); ?>

<?php

    if(isset($_SESSION["session_username"])){ // comprobamos si existe la variable de sesion de username.
        
        header("Location: index.php");//Si es asi cargaremos la pagina de usuarios.
    
    }

    if(isset($_POST["usuario"])){ //si obtenemos la variable de formulario de login significara que estamos entrando como user
        if(!empty($_POST["usuario"]) && !empty($_POST["passwd"])) {
            $usuario=$_POST["usuario"];
            $password=$_POST["passwd"];
            
            $query =mysql_query("SELECT * FROM usertbl WHERE usuario=’".$usuario."’ AND passwd=’".$passwd."’");
            $numrows=mysql_num_rows($query);
      
            if($numrows!=0){
                while($row=mysql_fetch_assoc($query)){
                    $dbusername=$row["usuario"];
                    $dbpassword=$row["passwd"];
                }
                    if($usuario == $dbusername && $passwd == $dbpassword){   //SI EL USUARIO ES CORRECTO CREAMOS LA SESION
                        $_SESSION["session_username"]=$usuario;

                        /* Redirección */
                        header("Location: index.php");
                    }else {
                        $message = "Nombre de usuario ó contraseña invalida!";
                    }    
            }     
        }else {
            $message = "Todos los campos son requeridos";
        }    
    }
    
    require "index.php";

?>