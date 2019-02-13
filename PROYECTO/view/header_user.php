
<?php
//Obtenemos el objeto de sesión.
require_once("modelos/Usuario.php");
$usuarioSesion = $_SESSION["user-sesion"];
$usuarioSesion = unserialize($usuarioSesion);
?>

<div id="container-header">
   <div class="descripcion">Bienvenido <?php echo $usuarioSesion->getLogin();?> </div>
   <div class="container-logo">
       <div class="logo"></div>
   </div>
   <div class="zona-sesion">
        <form action="zona_user.php" method="GET"><input type="hidden" name="identificador" value = <?php echo $usuarioSesion->getId();?> ><input type="submit" value="PERFIL"></form>
        <a href="controller/cerrar-sesion.php">CERRAR SESION</a>
   </div> 
</div>