<?php
require_once("modelos/Usuario.php");
$usuarioSesion = $_SESSION["user-sesion"];
$usuarioSesion = unserialize($usuarioSesion);

// *****OBTENCION ANIME*****
require_once("modelos/Anime.php");
$anime = new Anime();
$anime->obtenerDatos($id_anime);

?>


<div id="contenedor-wallpaper">
    
    <?php //*****BANNER-ANIME****
        echo "<img src=".$anime->getImagen().">";
    ?>

</div>
<div id="contenedor-anime">
    <div class="main-anime">
        
    </div>
    <div class="info-anime">
       
       
    </div>
</div>

   