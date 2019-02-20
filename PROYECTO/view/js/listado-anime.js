function cargar() {
    console.log("listado-anime...");
    cargarListado();

}
function cargarListado(){
    var xhttp = new XMLHttpRequest();
    
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let animes = JSON.parse(this.responseText);
            
                mostrarAnimes(animes); 
        }
    };

    xhttp.open("GET","http://"+ip+"/view/ajax/cargarAnimes.php", true);
    xhttp.send();
}

function mostrarAnimes(animes){
    var contenedor = document.getElementById("content-animes");

    for(var k in animes) {
        contenedor.innerHTML = contenedor.innerHTML +
        "<div class='boxList'>"
                +"<div class='box-img'>"
                    +"<a href='http://"+ip+"zona_anime.php?id="+animes[k].id_anime+"'><img id='img"+animes[k].id_anime+"' src='"+animes[k].urlImagen+"'>"
                +"</div>"
                +"<div class='box-descripcion'>"
                    +"<div class='box-titulo anime'>"+animes[k].nombre+"</div>"
                    +"<div class='box-sinopsis'><p>"+animes[k].descripcion+"</p></div>"
                +"</div>"
            +"</div>"; 
    }

}


window.addEventListener("load", cargar, false);