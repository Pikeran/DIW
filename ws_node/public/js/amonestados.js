window.addEventListener("load", cargar, false);
function cargar() {
    console.log("Pagina cargada...")
}

var valor ;

function cambiar(objeto){
    
if(document.getElementById(valor) == null){
    document.getElementById(objeto).style.order = -1;
    valor = objeto;
}
    document.getElementById(valor).style.order = 0;
    document.getElementById(objeto).style.order = -1;
    valor = objeto;

}