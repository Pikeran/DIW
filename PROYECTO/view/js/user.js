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
            imprimirAnime(info);   
              
        }
    };

    xhttp.open("GET","http://"+ip+"/view/ajax/obtenerFavoritos.php?id="+variable, true);
    xhttp.send();
}

function imprimirAnime(infoAnime){
    campo = document.getElementById("animes");
    for(var k in infoAnime) {

        campo.innerHTML = campo.innerHTML + 
                "<a class='box-anime' style='cursor:pointer' href='http://"+ip+"zona_anime.php?id="+infoAnime[k].id_anime+"'><img src= '"+infoAnime[k].urlImagen+"'></a>"
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

    xhttp.open("GET","http://"+ip+"/view/ajax/cargarDatosUsuario.php?id="+variable, true);
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
    xhttp.open("GET","http://"+ip+"/view/ajax/infoAmigo.php?id="+info, true);
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
            + "<td><form action='zona_user.php' method='GET'><input type='hidden' name='identificador' value ="+usuario[k].id+"><input type='submit' value='PERFIL'></form></td>"
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