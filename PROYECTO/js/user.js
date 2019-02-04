function cargar() {
    console.log("Pagina cargada...");
    
    document.getElementById("menu-01").addEventListener("click",activarMenu);
    document.getElementById("menu-02").addEventListener("click",activarMenu);
    document.getElementById("menu-03").addEventListener("click",activarMenu);


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