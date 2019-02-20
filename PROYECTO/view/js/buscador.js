function cargar() {
    console.log("buscador activo...");
    document.getElementById("search").addEventListener("keyup",buscarRelevancia);

}

function buscarRelevancia(){
    var xhttp = new XMLHttpRequest();
    let valor = document.getElementById("search").value;
    if(valor.trim().length == 0){
        let campo = document.getElementById("resultado-busqueda-user");
        campo.innerHTML = "";
        return;
    }
    
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let info = JSON.parse(this.responseText);
            mostrarUsuarios(info);
        }
    };

    xhttp.open("GET","http://"+ip+"/view/ajax/buscarUser.php?valor="+valor, true);
    xhttp.send();
}
function mostrarUsuarios(info){
    let campo = document.getElementById("resultado-busqueda-user");
    campo.innerHTML = "";

    campo.innerHTML = campo.innerHTML + "<table id='user-tabla'>"
        
    for(var z in info) {
        tabla = document.getElementById("user-tabla");
        tabla.innerHTML = tabla.innerHTML + 
                "<tr>"+
                    "<th><a href='zona_user.php?identificador="+info[z].id+"'>"+info[z].login+"</a></th>"+
                    "<th><i class='fas fa-share-square'></i></th>"+
                "</tr>";
    }
        campo.innerHTML = campo.innerHTML + "</table>";
}



window.addEventListener("load", cargar, false);