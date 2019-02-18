function cargar() {
    console.log("buscador activo...");
    document.getElementById("search").addEventListener("keyup",buscarRelevancia);

}

function buscarRelevancia(){
    var xhttp = new XMLHttpRequest();
    let valor = document.getElementById("search").value;
    if(valor.trim().length == 0){
        return;
    }
    
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let info = JSON.parse(this.responseText);
            console.log(info);
        }
    };

    xhttp.open("GET","http://"+ip+"/view/ajax/buscarUser.php?valor="+valor, true);
    xhttp.send();
}




window.addEventListener("load", cargar, false);