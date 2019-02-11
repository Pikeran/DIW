function cargar() {
    console.log("Pagina cargada...");
    document.getElementById("agregar-anime").addEventListener("click",addAnime);
    document.getElementById("eliminar-anime").addEventListener("click",removeAnime);


    consultaFav();
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