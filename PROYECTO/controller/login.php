<?php

//error_reporting(E_ALL);   ESTE CODIGO SACA ERRORES EN EL PHP.
//ini_set('display_errors', '1');

session_start();
require_once("../view/head_login.php");


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
                $_SESSION["user-sesion"] =  serialize($user);
                header('Location: ../index.php');
            }

        }else{ //registro --> el formulario es de registro

            if($user->registrarUsuario() == false){
                header('Location: login.php');
            }else{
                $_SESSION["user-sesion"] = serialize($user);
                header('Location: ../index.php');
            }

        }

    }else{ //No hemos enviado ninguna comprobacion de logueo o registro.
       
        require_once("../view/header_login.php");
        require_once("../view/form_sesion.php");
        require_once("../view/footer.php");
    }




}

    
?>