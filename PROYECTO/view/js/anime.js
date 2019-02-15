function cargar() {
    console.log("Pagina cargada...");
    document.getElementById("agregar-anime").addEventListener("click",addAnime);
    document.getElementById("eliminar-anime").addEventListener("click",removeAnime);
    document.getElementById("addMensaje").addEventListener("click",divMensaje);
    consultaFav();
    importarForo();

}

function botones(){
var botones = document.getElementsByClassName("boton-respuesta");
    for (let i = 0; i < botones.length; i++) {
        botones[i].addEventListener("click",abrirEnvio);  
    }   
}
function abrirEnvio(){
    
    var aux = this.id;
    var id = aux.substring(4,aux.length);
   
    var panel = document.getElementById("responder"+id);
    if(panel.className == "no-oculto enviar-respuesta"){
        document.getElementById("responder"+id).className = "oculto enviar-respuesta";
    } else{
        document.getElementById("responder"+id).className = "no-oculto enviar-respuesta";
    } 



}
function divMensaje(){
    if(document.getElementById("escribir-mensaje").className == "oculto"){
        document.getElementById("escribir-mensaje").className = "no-oculto"
    }else{
        document.getElementById("escribir-mensaje").className = "oculto"
    }
}
function importarForo(){
    var idAnime = document.getElementById("id_anime").value;
    var xhttp = new XMLHttpRequest();
    

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let mensajes = JSON.parse(this.responseText);
    
            imprimirForo(mensajes);
            botones();
        }
    };

    xhttp.open("GET","http://"+ip+"/view/ajax/cargarForo.php?id="+idAnime, true);
    xhttp.send();
}
function imprimirForo(mensajes){
    campo = document.getElementById("contenedor-mensajes");
    for(var k in mensajes) {

        if(mensajes[k].nivel == "1"){
            campo.innerHTML = campo.innerHTML + 
                "<div class='mensaje' id=mensaje"+mensajes[k].id_mensaje+">"
                    +"<div class='post-img'>"
                        +"<img src="+mensajes[k].urlImagen+">"
                    +"</div>"
                    +"<div class='post-body'>"
                        +"<div class='post-name'>"
                            +"<a class='user-card' href='zona_user.php?identificador="+mensajes[k].id+"'>"+mensajes[k].login+"</a>"
                            +"<span class='rd' title="+mensajes[k].CREATED_AT+"data-format='tiny'>"+mensajes[k].CREATED_AT+"</span>"
                            +"<button class='boton-respuesta' id=btnR"+mensajes[k].id_mensaje+">RESPONDER</button>"
                                +"<div id='responder"+mensajes[k].id_mensaje+"' class='oculto enviar-respuesta'>"
                                    +"<h3>Responder mensaje:</h3>"
                                    +"<form action='view/ajax/envioRespuesta.php' method='GET'>"
                                        +"<input type='hidden' value= '"+document.getElementById("id_anime").value+"' name='id_anime'>" 
                                        +"<input type='hidden' value= '"+mensajes[k].id_mensaje+"' name='id_padre'>" 
                                        +"<input type='hidden' value= '' name='url'>" 
                                        +"<textarea name='texto-mensaje'></textarea>"
                                        +"<input type='submit' value='Enviar'>"
                                    +"</form>"
                                +"</div>"
                        +"</div>"
                        +"<div class='post-content'>"
                            +"<p>"+mensajes[k].texto+"</p>"
                        +"</div>"
                    +"</div>"      
                    +"<div class='respuestas' id=resp"+mensajes[k].id_mensaje+">"
                    +"</div>" 
                +"</div>"
        }else{
            campo2 = document.getElementById("resp"+mensajes[k].ID_PADRE);
            campo2.innerHTML = campo2.innerHTML + 
                "<div class='respuesta' id=mensaje"+mensajes[k].id_mensaje+">"
                    +"<div class='post-img'>"
                        +"<img src="+mensajes[k].urlImagen+">"
                    +"</div>"
                    +"<div class='post-body'>"
                        +"<div class='post-name'>"
                        +"<a class='user-card' href='zona_user.php?identificador="+mensajes[k].id+"'>"+mensajes[k].login+"</a>"
                            +"<span class='rd' title="+mensajes[k].CREATED_AT+"data-format='tiny'>"+mensajes[k].CREATED_AT+"</span>"
                            +"<button class='boton-respuesta' id=btnR"+mensajes[k].id_mensaje+">RESPONDER</button>"
                                +"<div id='responder"+mensajes[k].id_mensaje+"' class='oculto enviar-respuesta'>"
                                    +"<h3>Responder mensaje:</h3>"
                                    +"<form action='view/ajax/envioRespuesta.php' method='GET'>"
                                        +"<input type='hidden' value= '"+document.getElementById("id_anime").value+"' name='id_anime'>" 
                                        +"<input type='hidden' value= '"+mensajes[k].id_mensaje+"' name='id_padre'>" 
                                        +"<textarea name='texto-mensaje'></textarea>"
                                        +"<input type='submit' value='Enviar'>"
                                    +"</form>"
                                +"</div>"
                        +"</div>"
                        +"</div>"
                        +"<div class='post-content'>"
                            +"<p>"+mensajes[k].texto+"</p>"
                        +"</div>"
                    +"</div>"      
                    +"<div class='respuestas' id=resp"+mensajes[k].id_mensaje+">"
                    +"</div>" 
                +"</div>" 
        }
        
    }
}


function consultaFav(){
    var xhttp = new XMLHttpRequest();
    var idAnime = document.getElementById("id_anime").value;
    

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let info = JSON.parse(this.responseText);
            
            favoritos(info);
        }
    };

    xhttp.open("GET","http://"+ip+"/view/ajax/comprobarFavoritos.php?id="+idAnime, true);
    xhttp.send();
}
function favoritos(info){
    if(Object.keys(info).length == 1){//significa que es una serie que el usuario sigue asi que ponemos boton de dejar de seguir.
        document.getElementById("eliminar-anime").style.display = "initial";

    }else{//significa que esta serie no la seguimos.
        console.log("serie no seguida");
        document.getElementById("agregar-anime").style.display = "initial";
    }
}
function addAnime(){
    var xhttp = new XMLHttpRequest();
    var idAnime = document.getElementById("id_anime").value;
    

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("eliminar-anime").style.display = "initial";
            document.getElementById("agregar-anime").style.display = "none";
 
        }
    };

    xhttp.open("GET","http://"+ip+"/view/ajax/addAnime.php?id="+idAnime, true);
    xhttp.send();
}
function removeAnime(){
    var xhttp = new XMLHttpRequest();
    var idAnime = document.getElementById("id_anime").value;
    console.log(idAnime);


    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            
            document.getElementById("eliminar-anime").style.display = "none";
            document.getElementById("agregar-anime").style.display = "initial";
        }
    };

    xhttp.open("GET","http://"+ip+"/view/ajax/removeAnime.php?id="+idAnime, true);
    xhttp.send();
}





window.addEventListener("load", cargar, false);