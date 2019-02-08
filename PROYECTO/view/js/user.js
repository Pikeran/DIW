function cargar() {
    console.log("Pagina cargada...");
    
    document.getElementById("menu-01").addEventListener("click",activarMenu);
    document.getElementById("menu-02").addEventListener("click",activarMenu);
    document.getElementById("menu-03").addEventListener("click",activarMenu);
    document.getElementById("menu-04").addEventListener("click",activarMenu);
    obtenerAmigos();
    animesfav();
}
function animesfav(){
    var xhttp = new XMLHttpRequest();
    var variable = document.getElementById("id_zona_user").value;

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let info = JSON.parse(this.responseText);
            
            colocarAnimes(info);
        }
    };

    xhttp.open("GET","http://localhost/DIW/PROYECTO/view/ajax/obtenerFavoritos.php?id="+variable, true);
    xhttp.send();
}
function colocarAnimes(info){
    var anime;

    for(var k in info){
       id_anime = info[k].id_anime;
       obtenerAnime(id_anime);
       
    }
}
function obtenerAnime(id_anime){
    var xhttp = new XMLHttpRequest();
    
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let infoAnime = JSON.parse(this.responseText);
            
            imprimirAnime(infoAnime);
        }
    };

    xhttp.open("GET","http://localhost/DIW/PROYECTO/view/ajax/obtenerAnime.php?id="+id_anime, true);
    xhttp.send();
}
function imprimirAnime(infoAnime){
    campo = document.getElementById("animes");
    for(var k in infoAnime) {

        campo.innerHTML = campo.innerHTML + 
            "<div class='box-anime'>"
                + "<img src= '"+infoAnime[k].urlImagen+"'>"
            + "</div>";
    }
}
function obtenerAmigos(){
   
    var xhttp = new XMLHttpRequest();
    var variable = document.getElementById("id_zona_user").value;
    


    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let infoUsuarios = JSON.parse(this.responseText);
            
            colocarAmigos(infoUsuarios);                 
        }
    };

    xhttp.open("GET","http://localhost/DIW/PROYECTO/view/ajax/cargarDatosUsuario.php?id="+variable, true);
    xhttp.send();
}
function sacarInfo(info){
    var xhttp = new XMLHttpRequest();
    

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let infoUsuario = JSON.parse(this.responseText);
            
            imprimirAmigos(infoUsuario)           
        }
    };
    xhttp.open("GET","http://localhost/DIW/PROYECTO/view/ajax/infoAmigo.php?id="+info, true);
    xhttp.send();

}

function colocarAmigos(informacionUsuarios){
   

    var user;

    for(var k in informacionUsuarios){

       user = informacionUsuarios[k].idUser_FK;
       sacarInfo(user);
       
    }
}
function imprimirAmigos(usuario){

    campo = document.getElementById("tabla-amigos");
    for(var k in usuario) {

        campo.innerHTML = campo.innerHTML + 
            "<tr class='box-user'>"
            + "<td class='login-user anime'>" + usuario[k].login + "</td>"
            + "<td class='email-user'>" + usuario[k].email + "</td>"
            + "<td><form action='zona_user.php' method='POST'><input type='hidden' name='identificador' value ="+usuario[k].id+"><input type='submit' value='PERFIL'></form></td>"
            + "</tr>";
    }
    
    
}


function activarMenu(){
    
        document.getElementById("amigos").className = "no-active";
        document.getElementById("animes").className = "no-active";
        document.getElementById("ajustes").className = "no-active";
        document.getElementById("mensajes").className = "no-active";
    if(this.id == "menu-01"){
        document.getElementById("amigos").className = "active";
    }else{
        if(this.id == "menu-02"){
            document.getElementById("animes").className = "active";
        }else{
            if(this.id == "menu-03"){
                document.getElementById("ajustes").className = "active";
            }else{
                document.getElementById("mensajes").className = "active";
            }    
        }
    }
}


window.addEventListener("load", cargar, false);