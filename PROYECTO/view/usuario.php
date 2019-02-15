<?php
require_once("modelos/Usuario.php");
$usuarioSesion = $_SESSION["user-sesion"];
$usuarioSesion = unserialize($usuarioSesion);

// *****OBTENCION USUARIO*****

$user = new Usuario();
$user->obtenerDatos($id_activo);

?>


<div id="contenedor-wallpaper">
    

    <div id="imagen-perfil">  
      
       

    </div>
    <div id="nick-usuario"> 
    <?php //*****NICK-USUARIO****

        if($usuarioSesion->getId() == $id_activo ){
            echo $usuarioSesion->getLogin();
    ?>
    <a href="#popup" class="popup-link"><i class="fas fa-images"></i></a>
    <div class="modal-wrapper" id="popup">
        <div class="popup-contenedor">
        
        <form method="POST" enctype="multipart/form-data" action="view/ajax/importarImagen.php">
            CAMBIAR LOGO: <input type="file" name="logo" accept="image/jpeg"><br>
            <p class="explicacion">El logo no debe superar los 1000 pixeles</p>
            <input type="submit" value="ENVIAR LOGO">
        </form>
        <form method="POST" enctype="multipart/form-data" action="view/ajax/importarBanner.php">
            CAMBIAR BANNER: <input type="file" name="banner" accept="image/jpeg"><br>
            <p class="explicacion">El banner no debe superar los 300 pixeles de alto</p>
            <input type="submit" value="ENVIAR BANNER">
        </form>
    
            <a class="popup-cerrar" href="#">X</a>
        </div>
    </div>  
    
    <?php    
        }else{
            echo $user->getLogin();
        }
     ?>
     </div>
</div>
<div id="contenedor-perfil">
    <div class="menu-perfil">
        <div class="item-menu"><i class="fas fa-user"></i><button id="menu-01">AMIGOS</button></div>
        <div class="item-menu"><i class="fas fa-tv"></i></i><button id="menu-02">ANIMES</button></div>
        <?php
            if($usuarioSesion->getId() == $id_activo){
                echo "<div class='item-menu'><i class='fas fa-tools'></i><button id='menu-03' onclick='activarMenu(this)'>AJUSTES</button></div>";

                echo "<div class='item-menu'><i class='fas fa-tools'></i><button id='menu-04' onclick='activarMenu(this)'>MENSAJES</button></div>";
            }else{

            }    
        ?>
    </div>
    <div class="main-perfil">
        <div class="item-main">
            <div class="active"  id="amigos">
                <div class="titulo">AMIGOS</div>
                <div class="contenido">
                    <table id="tabla-amigos"></table>
                </div>
            </div>
            <div class="no-active" id="animes">
                <div id="div-animes" class="titulo">ANIMES</div>
            </div>
            <div class="no-active" id="ajustes">
                <div class="titulo">AJUSTES</div>
            </div>
            <div class="no-active" id="mensajes">
                <div class="titulo">MENSAJES</div>
            </div>
        </div>
    </div>
    <div class="info-perfil">
        <div class="item-info">
          <div id="control-friends">  
            <button class="active" id="añadir-amigo">añadir amigo<i class="fas fa-user-plus"></i></button>
            <button class="no-active" id="añadir-amigo">borrar amigo<i class="fas fa-user-minus"></i></i></button>
          </div>  
          
        </div>
        
    </div>
</div>

   