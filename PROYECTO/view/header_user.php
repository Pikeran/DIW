
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
        <div class="box">
            <div class="container-1">
                <span class="icon"><i class="fa fa-search"></i></span>
                <input type="search" id="search" name="usr" placeholder="Buscar usuarios..." />
            </div>
            <div id="resultado-busqueda-user"></div>
        </div>
        <form action="zona_user.php" method="GET"><input type="hidden" name="identificador" value = <?php echo $usuarioSesion->getId();?> ><input type="submit" value="PERFIL"></form>
        <a class="cierre" href="controller/cerrar-sesion.php"><i class="fas fa-sign-out-alt"></i></a>
   </div> 
</div>