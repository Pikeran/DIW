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

<?php


        session_start();

        if(isset($_SESSION["login_user"])){ // comprobamos si existe la variable de sesion de username.
            include("includes/header.php");
            include("includes/content.php");
            echo "usuario iniciado";
            
        }else{
            
                include("includes/header.php");
                include("includes/content.php");
                echo "pagina basica";
            
        }   

?>
  
</body>
</html>