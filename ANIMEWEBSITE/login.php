<html>
<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>LOGIN</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" type="text/css" media="screen" href="css/login.css" />
    <script src="js/comprobarUsuario.js"></script>
</head>
<body>
    


<div class = "contenedor-global">
    <button class="button-loginRegistro dirty" id="login-button" onclick="document.getElementById('id01').style.display='block'">Login</button>
    <button class="button-loginRegistro dirty" id="registro-button" onclick="document.getElementById('id02').style.display='block'">Unirse</button>
</div>

<div id="id01" class="modal">
    <form class="modal-content animate" method="POST" action="comprobarUser.php">
        <div class="imgcontainer">
            <span onclick="document.getElementById('id01').style.display='none'" class="close" title="Close Modal">&times;</span>
            <img src="user.png" alt="LOGIN" class="avatar">
        </div>
        <div class="container">
            <label for="login"><b>USUARIO</b></label>
            <input id="login-usuario" type="text" placeholder="Introduce Nombre" name="login" required>
            <label for="passwd"><b>PASSWORD</b></label>
            <input id="passwd-usuario" type="password" placeholder="Introduce password" name="passwd" required>
        </div>
        <div class="container" style="background-color:#f1f1f1">
            <button name="iniciar-sesion" class="iniciar-sesion" id="comprobar-login">Login</button>
            <button type="button" onclick="document.getElementById('id01').style.display='none'" class="cancelbtn">Cancel</button>
        </div>
    </form>
</div>

<div id="id02" class="modal">
    <form class="modal-content animate" method="POST" action="comprobarUser.php">
        <div class="imgcontainer">
            <span onclick="document.getElementById('id02').style.display='none'" class="close" title="Close Modal">&times;</span>
            <img src="user.png" alt="REGISTRO" class="avatar">
        </div>
        <div class="container">
            <label for="usuario"><b>USUARIO</b></label>
            <input type="text" placeholder="Introduce login" name="usuario" required>
  
            <label for="email"><b>CORREO</b></label>
            <input type="text" placeholder="Introduce email" name="email" required>

            <label for="passwd"><b>PASSWORD</b></label>
            <input type="password" placeholder="Introduce password" name="passwd" required>
    
            <button name="registrar-sesion"  id="comprobar-login" type="submit">REGISTRO</button>
        </div>
        <div class="container" style="background-color:#f1f1f1">
            <button type="button" onclick="document.getElementById('id02').style.display='none'" class="cancelbtn">Cancel</button>
        </div>
    </form>
</div>
<button onclick="location.href='index.php'" class="button-volver dirty" >VOLVER</button>
</body>
</html>