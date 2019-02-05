<?php


# Clase Usuario

class Usuario{
       
    private $id=0;
    private $login="NoName";
    private $passwd="NoPasswd";
    private $name="NoName";
    private $cogname="NoCogname";
    private $location="NoLocation";
    private $email="NoEmail";
    private $creation="NoFecha";
    private $urlImagen="NoImagen";
    
    public function getId(){
        return $this->id;
    }
    
    public function setId($newId){
        $this->id = $newId;
    }
    
    public function getLogin(){
        return $this->login;
    }
    
    public function setLogin($newLogin){
        $this->login = $newLogin;
    }

    public function getPasswd(){
        return $this->passwd;
    }
    
    public function setPasswd($newPasswd){
        $this->passwd = $newPasswd;
    }

    public function getName(){
        return $this->name;
    }
    
    public function setName($newName){
        $this->name = $newName;
    }
    public function getImagen(){
        return $this->urlImagen;
    }
    
    public function setImagen($newUrl){
        $this->urlImagen = $newUrl;
    }


    public function getCogname(){
        return $this->cogname;
    }
    
    public function setCogname($newCogname){
        $this->cogname = $newCogname;
    }

    public function getLocation(){
        return $this->location;
    }
    
    public function setLocation($newLocation){
        $this->location = $newLocation;
    }

    public function getEmail(){
        return $this->email;
    }
    
    public function setEmail($newEmail){
        $this->email = $newEmail;
    }

    public function getCreation(){
        return $this->creation;
    }
    
    public function setCreation($newCreation){
        $this->creation = $newCreation;
    }

    //////////FUNCIONES//////////



    public function comprobarUsuario(){
        require_once("../config/connect.php");

        $usuario = $_POST["login"];
        $passwd2 = $_POST["passwd"];

        $passwd = md5($passwd2);


        $cons ="SELECT * FROM USUARIOS WHERE login = '$usuario' AND passwd = '$passwd'";
        $result = mysqli_query($conn, $cons);
    
        if(mysqli_num_rows($result) == 1){
       
            while($row = mysqli_fetch_array($result)){  //DAMOS VALORES AL OBJETO USUARIO
                $this->id = $row["id"];
                $this->login = $row["login"];
                $this->passwd = $row["passwd"];
                $this->email = $row["email"];
                $this->creation = $row["CREATED_AT"];

            }
            return true;
        }else{
            return false;
        }
    }



    public function registrarUsuario(){ 
        require_once("../config/connect.php");

        $usuario = $_POST["login"];
        $email = $_POST["email"];
        $passwd2 = $_POST["passwd"];
    
        $passwd = md5($passwd2);
    
        $cons1 ="SELECT * FROM USUARIOS WHERE login = '$usuario' AND passwd = '$passwd'";
        $result1 = mysqli_query($conn, $cons1);
    


            if(mysqli_num_rows($result) == 1){ //comprobamos si el usuario creado ya existe
     
                return false; //si existe volvemos al login.
         
            }else{  //si no existe lo creamos.
         
                $cons2 ="INSERT INTO `USUARIOS` (`id`, `login`, `email`, `passwd`, `CREATED_AT`, `UPDATED_AT`, `nombre`, `apellido`, `localidad`, `descripcion`) VALUES (NULL, '$usuario', '$email', '$passwd', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, NULL, NULL, NULL, NULL)";
        
                $result2 = mysqli_query($conn, $cons2);
        
                //Ahora lo consultamos y obtenemos su id y asi iniciamos sesion.
         
                $cons3 ="SELECT * FROM USUARIOS WHERE login = '$usuario' AND passwd = '$passwd'";
                $result3 = mysqli_query($conn, $cons3);
         
            while($row = mysqli_fetch_array($result3)){ //DAMOS VALORES AL OBJETO USUARIO

                $this->id = $row["id"];
                $this->login = $row["login"];
                $this->passwd = $row["passwd"];
                $this->email = $row["email"];
                $this->creation = $row["CREATED_AT"];

                
                }
                return true;
                
            }
    }

}

?>
