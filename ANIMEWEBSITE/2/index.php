<html>
<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>animeKUN</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" type="text/css" media="screen" href="css/main.css" />
    <link rel="stylesheet" type="text/css" media="screen" href="css/responsive.css" />
    <link rel="stylesheet" type="text/css" media="screen" href="css/movil.css" />
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css" integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/" crossorigin="anonymous">
    <link rel="stylesheet" type="text/css" media="screen" href="css/loginRegistro.css" />
    <script src="js/main.js"></script>
    <script src="js/loginRegistro.js"></script>
</head>
<body>


 <div id="menu-superior">
     <div class="banner-top">
         <div class="menu-contacto dirty">
             <a href="#">NOSOTROS</a>
             <a href="#">CONTACTO</a>
             <a href="#">TELEFONO</a>
         </div>

         <div class="menu-registro">
            
    <?php
        require "loginRegistro.php";    
    ?>


            <label class="logo-registro"></label>
         </div>
   
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
 </div>   
 <div id="contenido-central">
    <div class="galeria-img"></div>
 </div>   
  


</body>
</html>