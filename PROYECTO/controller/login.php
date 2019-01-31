<?php

error_reporting(E_ALL);
ini_set('display_errors', '1');

session_start();
require_once("../view/head.php");


if(isset($_SESSION["usuario"])){    //Usuario logeado o creado.
    header('Location: ../index.php');

}else{  //Queremos logearnos o registrarnos.
    if(isset($_POST["login"])){ //Existe una variable de formulario..Realizamos comprobaciones.

        require_once("../modelos/Usuario.php");
        $user = new Usuario();

        if(isset($_POST["login-button"])){ //logueo --> el formulario es de logueo

            if($user->comprobarUsuario() == false){
                header('Location: login.php');
            }else{
                $_SESSION["user-sesion"] =  $user;
                //$_SESSION[nombre sesion][user]
                header('Location: ../index.php');
            }

        }else{ //registro --> el formulario es de registro

            if($user->registrarUsuario() == false){
                header('Location: login.php');
            }else{
                $_SESSION["user-sesion"] =  $user;
                header('Location: ../index.php');
            }

        }

    }else{ //No hemos enviado ninguna comprobacion de logueo o registro.
       
        require_once("../view/form-sesion.php");
        require_once("../view/footer.php");
    }




}

    
?>