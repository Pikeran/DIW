<div id="box-formularios">
        <form id="formulario-logeo" action="login.php" method="POST" >
            <h1>Iniciar Sesión</h1>
            <p>Ya tienes cuenta? Inicia sesion abajo <i class="fas fa-sign-in-alt"></i></p>

            <div class="section-form"><label>Inicio de sesión</label><input type="text" name="login"></div>
            
            <div class="section-form"><label>Contrasenya <i class="fas fa-key"></i></label><input type="password" name="passwd"></div>
            
            <input class="button-envio" type="submit" value="Iniciar Sesión" name="login-button">
        </form>
        <form id="formulario-registro" action="login.php" method="POST" >
            <h1>Registra una Cuenta</h1>
            <p>Únete a ANIMEKUN !! </p>

            <div class="section-form"><label>Nick</label><input type="text" name="login"></div>
            <div class="section-form"><label>Contrasenya <i class="fas fa-key"></i></label><input type="password" name="passwd"></div>
            <div class="section-form"><label>Correo</label><input type="text" name="email"></div>
            <input class="button-envio" type="submit" value="Registrarse" name="registro-button">
        </form>
</div>  