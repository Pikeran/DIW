

<div id="menu-superior">
    <div class="banner-top">
        <div class="menu-contacto dirty">
            <a href="#">NOSOTROS</a>
            <a href="#">CONTACTO</a>
            <a href="#">TELEFONO</a>
        </div>

        <?php //seccion de require:

            if(isset($_SESSION["login_user"])){
                require("seccion_header_usuario.php");
            }else{
                require("seccion_header_public.php");
            }

        ?>

    </div>
    <div class="banner-bot">
        <div class="menu-principal">
            <div class="menu-secciones dirty">
                <a href="#">Directorio</a>
                <a href="#">Manga</a>
                <a href="#">Noticias</a>
            </div>
            <div class="menu-categorias">
                <form>
                    <div class="box">
                        <div class="container-1">
                            <span class="icon"><i class="fa fa-search"></i></span>
                            <input class type="search" id="search" placeholder="Search..." />
                        </div>
                    </div>
                </form>
            </div>
            <div class="menu-logo"></div>
        </div>
    </div>
</div> 