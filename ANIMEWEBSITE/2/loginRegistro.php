
<div class = "contenedor-global">

    <button class="button-loginRegistro" id="login-button" onclick="document.getElementById('id01').style.display='block'" style="width:auto;">Login</button>
    <button class="button-loginRegistro" id="registro-button" onclick="document.getElementById('id02').style.display='block'" style="width:auto;">Unirse</button>

</div>

<div id="id01" class="modal">
  
  <form class="modal-content animate" method="POST" action="comprobarLogin.php">
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
    <button class="iniciar-sesion" id="comprobar-login">Login</button>
      <button class="button-loginRegistro" type="button" onclick="document.getElementById('id01').style.display='none'" class="cancelbtn">Cancel</button>
    </div>
  </form>
  
</div>
<div id="id02" class="modal">
  
  <form class="modal-content animate" method="POST" action="registro.php">
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
        
      <button type="submit">REGISTRO</button>
    </div>

    <div class="container" style="background-color:#f1f1f1">
      <button type="button" onclick="document.getElementById('id02').style.display='none'" class="cancelbtn">Cancel</button>
    </div>
  </form>
</div>
