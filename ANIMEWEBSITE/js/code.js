function cargar() {
    console.log("Pagina cargada...");
    document.getElementById("button-menu").addEventListener("click",menuLateral,false);
    scrollImagenes();
    comprobarUsuario();
}

var usuarioTemp = "David";


function comprobarUsuario(){
    if(usuarioTemp != null ){
        document.getElementById("usuario-enlace").innerText = "Bienvenido "+usuarioTemp;
    }else{
        document.getElementById("usuario-enlace").innerText = "Registarte!!";
    }
}

function menuLateral(){
    var menu = document.getElementById("menu-lateral");
    
    if(menu.className == "guardado"){
        menu.className = "mostrado";
    }else{
        menu.className = "guardado";
    }
}


var arrayImagenes = ["./img/noticias_scroll/scroll_01.jpg", "./img/noticias_scroll/scroll_02.jpg", "./img/noticias_scroll/scroll_03.jpg"];

function scrollImagenes(){
    document.getElementById("scroll-01").style =  "background-image: url("+arrayImagenes[0]+");";
    document.getElementById("scroll-02").style =  "background-image: url("+arrayImagenes[1]+");";
    document.getElementById("scroll-03").style =  "background-image: url("+arrayImagenes[2]+");";
}

window.addEventListener("load", cargar, false);