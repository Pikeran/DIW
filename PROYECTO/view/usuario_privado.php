<?php
require_once("modelos/Usuario.php");
$usuarioSesion = $_SESSION["user-sesion"];
$usuarioSesion = unserialize($usuarioSesion);
?>


<div id="contenedor-wallpaper">
    <div id="imagen-perfil">
        <img src="img/imagen-usuario.png">
    </div>
    <div id="nick-usuario"><?php echo $usuarioSesion->getLogin();?></div>
</div>
<div id="contenedor-perfil">
    <div class="menu-perfil">
        <div class="item-menu"><i class="fas fa-user"></i><button id="menu-01">AMIGOS</button></div>
        <div class="item-menu"><i class="fas fa-tv"></i></i><button id="menu-02">ANIMES</button></div>
        <div class="item-menu"><i class="fas fa-tools"></i><button id="menu-03">AJUSTES</button></div>
    </div>
    <div class="main-perfil">
        <div class="item-main">
            <div class="active"    id="amigos">
                <div class="titulo">AMIGOS</div>
                <div class="contenido">
                    <div class="amigo">JOSE</div>
                    <div class="amigo">ADRIAN</div>
                    <div class="amigo">DAVID</div>
                </div>
            </div>
            <div class="no-active" id="animes">
                <div class="titulo">ANIMES</div>
            </div>
            <div class="no-active" id="ajustes">
                <div class="titulo">AJUSTES</div>
            </div>
        </div>
    </div>
    <div class="info-perfil">
        <div class="item-info"></div>
        
    </div>
</div>

   