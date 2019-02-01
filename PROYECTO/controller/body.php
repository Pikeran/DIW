<?php

if(empty($_SESSION)){
        
        require_once("view/body_public.php");   

    }else{
        require_once("view/body_user.php");
        
    }
?>

