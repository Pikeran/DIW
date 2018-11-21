function cargar(){
    console.log("Pagina cargada...") 
     
    document.getElementById("panel-registro-redondo").addEventListener("mouseover",animation_circle,false);
    document.getElementById("panel-registro-redondo").addEventListener("mouseout",basic_circle,false);
    document.getElementById("panel-registro-redondo").addEventListener("click",abrirformulario,false);
    }
    function abrirformulario(){
        this.className = "registro";
        this.id = "form-registro";
        this.removeEventListener("mouseout",basic_circle,false);
        this.removeEventListener("mouseover",animation_circle,false);
        
        document.getElementById("div-contenido").id = "div-contenido-reducido";
        document.getElementById("initial-state").style.display = "none";

        setTimeout (function(){
            document.getElementById("registro-sesion").style="display:inline";
        }, 600); 
    }
    function animation_circle(){
        this.className = "agrandar";
        document.getElementById("initial-state").innerText = "PULSA";
    }
    function basic_circle(){
        this.className = "redondo";
        document.getElementById("initial-state").innerText = "REGISTRO";
    }



    window.addEventListener("load",cargar,false);