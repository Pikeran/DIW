function cargar() {
    console.log("Pagina cargada...");
    
    document.getElementById("menu-01").addEventListener("click",activarMenu);
    document.getElementById("menu-02").addEventListener("click",activarMenu);
    document.getElementById("menu-03").addEventListener("click",activarMenu);
    obtenerAmigos();
    obtenerImagenUsuario();
}
function obtenerImagenUsuario(){

}
function obtenerAmigos(){
    console.log("consulta1_obteniendo_ids");
    var xhttp = new XMLHttpRequest();
    var variable = document.getElementById("id_zona_user").value;
    


    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let infoUsuarios = JSON.parse(this.responseText);
            console.log(infoUsuarios);
            colocarAmigos(infoUsuarios);                 
        }
    };

    xhttp.open("GET","http://localhost/DIW/PROYECTO/view/ajax/cargarDatosUsuario.php?id="+variable, true);
    xhttp.send();
}
function sacarInfo(info){
    var xhttp = new XMLHttpRequest();
    console.log(info);

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let infoUsuario = JSON.parse(this.responseText);
            console.log(infoUsuario);
            imprimirAmigos(infoUsuario)           
        }
    };
    xhttp.open("GET","http://localhost/DIW/PROYECTO/view/ajax/infoAmigo.php?id="+info, true);
    xhttp.send();

}

function colocarAmigos(informacionUsuarios){
    console.log("añadiendo amigos");

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
            + "<td>" + usuario[k].login + "</td>"
            + "<td>" + usuario[k].email + "</td>"
            //+ "<td>" + "<button id = "+"home"+usuario[k].id+"><i class='fas fa-user'></i></button></td>"
            + "<td><form action='zona_user.php' method='POST'><input type='hidden' name='identificador' value ="+usuario[k].id+"><input type='submit' value='PERFIL'></form></td>"
            + "</tr>";
    }
    
    
}


function activarMenu(){
    console.log(this);
        document.getElementById("amigos").className = "no-active";
        document.getElementById("animes").className = "no-active";
        document.getElementById("ajustes").className = "no-active";
    if(this.id == "menu-01"){
        document.getElementById("amigos").className = "active";
    }else{
        if(this.id == "menu-02"){
            document.getElementById("animes").className = "active";
        }else{
            document.getElementById("ajustes").className = "active";
        }
    }
}


window.addEventListener("load", cargar, false);