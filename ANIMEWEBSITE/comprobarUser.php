<?php
       
    require("includes/conection.php");
    
    session_start();
    
   if(isset($_POST["iniciar-sesion"])){ 
    
    
    $usuario = $_POST["login"];
    $passwd = $_POST["passwd"];

    //añadir encriptacion para passwd TODO


    $cons ="SELECT * FROM USUARIOS WHERE login = '$usuario' AND passwd = '$passwd'";
    $result = mysqli_query($conn, $cons);
    
    if(mysqli_num_rows($result) == 1){
       
       while($row = mysqli_fetch_array($result)){
            $_SESSION['id_usuario'] = $row["id"];
            $_SESSION['login_user'] = $row["login"];
            $_SESSION['email_user'] = $row["email"];
       }
       header("location:index.php");
    }else{
        header("location:login.php");
    }
            
}else{ //registro

    $usuario = $_POST["usuario"];
    $email = $_POST["email"];
    $passwd = $_POST["passwd"];
    
    //añadir encriptacion para passwd TODO
    
     $cons1 ="SELECT * FROM USUARIOS WHERE login = '$usuario' AND passwd = '$passwd'";
     $result1 = mysqli_query($conn, $cons1);
    
     if(mysqli_num_rows($result) == 1){ //comprobamos si el usuario creado ya existe
     
        header("location:login.php");
         
     }else{ //si no existe lo creamos.
         
         $cons2 ="INSERT INTO `USUARIOS` (`id`, `login`, `email`, `passwd`, `CREATED_AT`, `UPDATED_AT`, `nombre`, `apellido`, `localidad`, `descripcion`) VALUES (NULL, '$usuario', '$email', '$passwd', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, NULL, NULL, NULL, NULL)";
        
        $result2 = mysqli_query($conn, $cons2);
        
        //Ahora lo consultamos y obtenemos su id y asi inciamos sesion.
         
         $cons3 ="SELECT * FROM USUARIOS WHERE login = '$usuario' AND passwd = '$passwd'";
         $result3 = mysqli_query($conn, $cons3);
         
         while($row = mysqli_fetch_array($result3)){
            $_SESSION['id_usuario'] = $row["id"];
            $_SESSION['login_user'] = $row["login"];
            $_SESSION['email_user'] = $row["email"];
       }
         
        

         header("location:index.php");
     }
    
  
    
    
    
}

?>