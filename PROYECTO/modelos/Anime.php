<?php


# Clase Anime

class Anime{
       
    private $id=0;
    private $name="NoName";
    private $categoria="NoCat";
    private $estado="NoLocation";
    private $descripcion="NoEmail";
    private $creation="NoFecha";
    private $urlBanner="NoImagen";
    
    public function getId(){
        return $this->id;
    }
    
    public function setId($newId){
        $this->id = $newId;
    }
 
    public function getName(){
        return $this->name;
    }
    
    public function setName($newName){
        $this->name = $newName;
    }
    public function getBanner(){
        return $this->urlBanner;
    }
    
    public function setBanner($newUrl){
        $this->urlBanner = $newUrl;
    }
    public function getImagen(){
        return $this->urlImagen;
    }
    
    public function setImagen($newUrl){
        $this->urlImagen = $newUrl;
    }


    public function getCategoria(){
        return $this->categoria;
    }
    
    public function setCogname($newCategoria){
        $this->categoria = $newCategoria;
    }

    public function getEstado(){
        return $this->estado;
    }
    
    public function setEstado($newEstado){
        $this->estado = $newEstado;
    }

    public function getDescripcion(){
        return $this->descripcion;
    }
    
    public function setDescripcion($newDescripcion){
        $this->descripcion = $newDescripcion;
    }

    public function getCreation(){
        return $this->creation;
    }
    
    public function setCreation($newCreation){
        $this->creation = $newCreation;
    }
    

    //////////FUNCIONES//////////
    public function obtenerDatos($id){
        require_once("config/connect.php");

        $cons ="SELECT * FROM ANIMES WHERE id_anime = '$id'";
        $result = mysqli_query($conn, $cons);
        while($row = mysqli_fetch_array($result)){  //DAMOS VALORES AL OBJETO USUARIO
            $this->id = $row["id_anime"];
            $this->name = $row["nombre"];
            $this->categoria = $row["categoria"];
            $this->creation = $row["CREATED_AT"];
            $this->estado = $row["estado"];
            $this->descripcion = $row["descripcion"];
            $this->urlBanner = $row["urlBanner"];
            $this->urlImagen = $row["urlImagen"];
        }
    }
}

?>
