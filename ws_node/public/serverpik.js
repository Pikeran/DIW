function cargar(){
    console.log("Pagina cargada...") 
     
    document.getElementById("panel-registro-redondo").addEventListener("mouseover",animation_circle,false);
    document.getElementById("panel-registro-redondo").addEventListener("mouseout",basic_circle,false);
    document.getElementById("panel-registro-redondo").addEventListener("click",abrirformulario,false);
    document.getElementById("input-nombre_usuario").addEventListener("blur",comprobarUsuario,false);
    document.getElementById("input-contraseña").addEventListener("blur",comprobarContraseña,false);
    /* document.getElementById("input-rep_contraseña").addEventListener("blur",comprobarContraseña,false); */
    /* document.getElementById("input-correo").addEventListener("blur",comprobarCorreo,false); */
    }

   var validacionUsuario = false;
   var validacionContraseña = false;
   var validacionRepContraseña = false;
   var validacionCorreo = false;


   function animarNotificaciones(notificacion){

    var elemento = document.getElementById("notificaciones-div");

    if(elemento.classList == "notificaciones-base"){

        elemento.innerText += notificacion;
        elemento.className = "movimiento-salida";
        elemento.className += " notificaciones-salida";
    }else{
        elemento.className = "movimiento-entrada";
       
        setTimeout (function(){
            elemento.className =  "notificaciones-base";
            elemento.innerText = "";
        }, 1000); 
    }



   }

    function abrirformulario(){
        this.className = "registro";
        this.id = "form-registro";
        this.removeEventListener("mouseout",basic_circle,false);
        this.removeEventListener("mouseover",animation_circle,false);
        
        document.getElementById("div-contenido").id = "div-contenido-reducido";
        document.getElementById("initial-state").style.display = "none";
        document.getElementById("info-content").style.display = "none";
        setTimeout (function(){
            document.getElementById("registro-sesion").style="display:inline";
        }, 600); 
    }

    function comprobarContraseña(){
        regexp_password = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,15}$/);
        
    

        if (this.value.match(regexp_password)) {
            validacionUsuario = true;
            this.style.backgroundColor = "green";
            this.style.color = "white"; 
        } else {
            animarNotificaciones("Entre 15-8 caracteres, al menos una letra mayúscula y 1 caracter especial");    
            validacionUsuario = false;
            this.style.backgroundColor = "red";
            this.style.color = "white"; 
            setTimeout (function(){
                animarNotificaciones("");
            }, 2000); 
        }

    }

    function comprobarUsuario(){
        if(this.value.length >= 5 && this.value.length <= 8 ){
            validacionUsuario = true;
            this.style.backgroundColor = "green";
            this.style.color = "white"; 
        }else{

            animarNotificaciones("El usuario debe contener de 5-8 caracteres.");    
            validacionUsuario = false;
            this.style.backgroundColor = "red";
            this.style.color = "white"; 
            setTimeout (function(){
                animarNotificaciones("");
            }, 2000); 

        }
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