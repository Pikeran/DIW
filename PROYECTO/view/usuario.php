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
        <div class="item-menu"><i class="fas fa-user"></i><button class='anime' id="menu-01">Siguiendo</button></div>
        <div class="item-menu"><i class="fas fa-tv"></i></i><button class='anime' id="menu-02">Animes</button></div>
        <?php
            if($usuarioSesion->getId() == $id_activo){
                echo "<div class='item-menu'><i class='fas fa-tools'></i><button class='anime' id='menu-03' onclick='activarMenu(this)'>Ajustes</button></div>";

                //echo "<div class='item-menu'><i class='fas fa-tools'></i><button class='anime' id='menu-04' onclick='activarMenu(this)'>Mensajes</button></div>";
            }else{

            }    
        ?>
    </div>
    <div class="main-perfil">
        <div class="item-main">
            <div class="active"  id="amigos">
                <div class="titulo">Seguidores</div>
                <div class="contenido">
                    <table id="tabla-amigos"></table>
                </div>
            </div>
            <div class="no-active" id="animes">
                <div id="div-animes" class="titulo">ANIMES</div>
            </div>
            <div class="no-active" id="ajustes">
                <div class="titulo">AJUSTES</div>
                    <div class="cambio">
                        <button class="anime" id="cambio-nombre">CAMBIAR NOMBRE :</button><input id="result-nombre" type="text">
                    </div>
                    <div class="cambio">
                        <button  class="anime" id="cambio-apellido">CAMBIAR APELLIDOS :</button><input id="result-apellidos" type="text">
                    </div>
                    <div class="cambio">
                        <button  class="anime" id="cambio-localidad">CAMBIAR LOCALIDAD :</button><input id="result-localidad" type="text">
                    </div>
                    <div class="cambio">
                        <button  class="anime" id="cambio-descripcion">CAMBIAR DESCRIPCION :</button><textarea id="result-descripcion"></textarea>
                    </div>
            </div>
            <div class="no-active" id="mensajes">
                <div class="titulo">MENSAJES</div>
            </div>
        </div>
    </div>
    <div class="info-perfil">
        <div class="item-info">
        <?php //*****agregar-amigos****

            if($usuarioSesion->getId() == $id_activo ){
                          
            }else{
                echo  "<div id='control-friends'></div>";  
            }
        ?>
        <div id="sobreMi">
            <h2 class="anime">Sobre mi</h2>
            <div><strong>NOMBRE:</strong><span id="nombre-usuario"><?php echo $user->getName();?></span></div>
            <div><strong>APELLIDOS:</strong><span id="nombre-usuario"><?php echo $user->getCogname();?></span></div>
            <div><strong>LOCALIDAD:</strong><span id="nombre-usuario"><?php echo $user->getLocation();?></span></div>
            <div id="descripcion">
            <strong>DESCRIPCION:</strong>
            <div><span id="nombre-usuario"><?php echo $user->getDescripcion();?></span></div>
            </div>
        
        </div>
         
          
        </div>
        
    </div>
</div>

   