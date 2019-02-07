<?php
require_once("modelos/Usuario.php");
$usuarioSesion = $_SESSION["user-sesion"];
$usuarioSesion = unserialize($usuarioSesion);

// *****OBTENCION USUARIO*****

$user = new Usuario();
$user->obtenerDatos($id_activo);

?>


<div id="contenedor-wallpaper">
    
    <?php //*****BANNER-USUARIO****

    if($usuarioSesion->getId() == $id_activo ){
        echo "<img src=' view/banner-img/".$id_activo.".jpg'>";
    }else{
        echo "<img src=' view/banner-img/".$id_activo.".jpg'>";
    }
    ?>

    <div id="imagen-perfil">  
      
        <?php //*****IMAGEN-USUARIO****

            if($usuarioSesion->getId() == $id_activo ){
                echo "<img id='img-usuario' src=' view/user-img/".$id_activo.".jpg'>";
            }else{
                echo "<img src=' view/user-img/".$id_activo.".jpg'>";
            }
        ?>

    </div>
    <div id="nick-usuario"> 
    <?php //*****NICK-USUARIO****

        if($usuarioSesion->getId() == $id_activo ){
            echo $usuarioSesion->getLogin();
    ?>
    <a href="#popup" class="popup-link"><i class="fas fa-images"></i></a>
    <div class="modal-wrapper" id="popup">
        <div class="popup-contenedor">
        
        <form action="/action_page.php">
            CAMBIAR LOGO: <input type="file" name="logo"><br>
            <p class="explicacion">El logo no debe superar los 1000 pixeles</p>
            <input type="submit" value="ENVIAR LOGO">
        </form>
        <form action="/action_page.php">
            CAMBIAR BANNER: <input type="file" name="banner"><br>
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
        <div class="item-menu"><i class="fas fa-tools"></i><button id="menu-03">AJUSTES</button></div>
        <div class="item-menu"><i class="fas fa-tools"></i><button id="menu-04">MENSAJES</button></div>
    </div>
    <div class="main-perfil">
        <div class="item-main">
            <div class="active"    id="amigos">
                <div class="titulo">AMIGOS</div>
                <div class="contenido">
                    <table id="tabla-amigos"></table>
                </div>
            </div>
            <div class="no-active" id="animes">
                <div class="titulo">ANIMES</div>
                <table>
                    <td><form action='zona_anime.php' method='POST'><input type='hidden' name='id_anime' value = 1 ><input type='submit' value='ANIME'></form></td>
                </table>
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
        <div class="item-info"></div>
        
    </div>
</div>

   