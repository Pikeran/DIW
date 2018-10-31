function cargar(){
    
    
}

function somb(elemento) {

    if(document.getElementsByClassName("somb") != undefined){
        var elemento = document.getElementsByClassName("somb");
        elemento.classList.remove('somb')
    }
    
    var padre = elemento.parentNode;
    padre.classList.add('somb');
}