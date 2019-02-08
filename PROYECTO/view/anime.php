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
        echo "<img src=".$anime->getBanner().">";
    ?>

</div>
<div id="contenedor-anime">
    <div class="main-anime">
        <div id = "imagen-anime">
            
        <?php //*****IMG-ANIME****
            echo "<img src=".$anime->getImagen().">";
        ?>

        </div>
        <div class="panel-main">
            <button class="seleccion-fav" id="agregar-anime">
                <label>Seguir</label>    
                <i class="fas fa-thumbs-up"></i> 
            </button>
            <button class="seleccion-fav" id="eliminar-anime">
                <label>Dejar de seguir</label>    
                <i class="fas fa-thumbs-up"></i> 
            </button>
            
        </div>

    </div>
    <div class="info-anime">
       <div id= "descripcion-anime">
       <h1 class="titulo">Sinopsis</h1>
       <?php //*****DESCRIPCION-ANIME****
            echo"<p id='categoria-anime'>". $anime->getCategoria()."</p>";
        ?>
       <?php //*****DESCRIPCION-ANIME****
            echo"<p id='descripcion-anime'>". $anime->getDescripcion()."</p>";
        ?>
       
       </div>
       
    </div>
</div>

   