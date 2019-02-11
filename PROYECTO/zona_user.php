<?php
session_start();

//ESTE CONTROLADOR SE OCUPARA DE MOSTRAR LA PAGINA DE PERFIL DEPENDIENDO DE SI SOMOS LOS PROPIETARIOS O VISITANTES.

require_once 'view/head_user.php';
require_once 'controller/header.php';
require_once 'controller/acceso-zona.php';
require_once 'view/footer.php';
?>
