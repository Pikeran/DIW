<?php


# Clase Usuario

# Guardamos la conexion a la BD por si las flys

class Usuario{
       
    private $id=0;
    private $login="NoName";
    private $passwd="NoPasswd";
    private $name="NoName";
    private $cogname="NoCogname";
    private $location="NoLocation";
    private $email="NoEmail";
    private $creation="NoFecha";

    
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

}



?>
