function cargar() {
    console.log("Pagina cargada...")

    document.getElementById("panel-registro-redondo").addEventListener("mouseover", animation_circle, false);
    document.getElementById("panel-registro-redondo").addEventListener("mouseout", basic_circle, false);
    document.getElementById("panel-registro-redondo").addEventListener("click", abrirformulario, false);
    document.getElementById("input-nombre_usuario").addEventListener("blur", comprobarUsuario, false);
    document.getElementById("input-contraseña").addEventListener("blur", comprobarContraseña, false);
    document.getElementById("input-rep_contraseña").addEventListener("blur", validarpasswd, false);
    document.getElementById("enviar-registro").addEventListener("click", enviarJson, false);
    document.getElementById("iniciar-sesion").addEventListener("click",comprobarInicio,false);
}

var validacionUsuario = false;
var validacionContraseña = false;


function comprobarInicio(){

     var usario_json = document.getElementById("nombre_usuario").value;
     var passwd_json = document.getElementById("contraseña").value; 

    $.getJSON( "http://localhost:4242/UsuarioNombre/"+usario_json, function( data ) {
    var items = [];
    $.each( data, function( key,val ) {
      console.log(val.nombre_usuario);
      if(val.nombre_usuario == usario_json && val.contraseña == passwd_json){
        alert("acceso permitido");
        


        window.location="acceso.html?nombre_usuario="+usario_json;

      } else{
        animarNotificaciones("Acceso denegado");
        setTimeout(function () {
            animarNotificaciones("");
        }, 2000);
      }  
        
    });
  });





}
function enviarJson() {
   

    if(validacionUsuario == true && validacionContraseña == true){


    xhr = new XMLHttpRequest();
    var url = "http://localhost:4242/Usuario";
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-type", "application/json");
    var userJson = document.getElementById("input-nombre_usuario").value;
    var passwdJson = document.getElementById("input-contraseña").value;
    var emailJson = document.getElementById("input-correo").value;
    console.log(userJson,passwdJson,emailJson);

    var data = JSON.stringify({"nombre_usuario":userJson,"contraseña":passwdJson,"correo":emailJson});
    xhr.send(data);


    xhr.onreadystatechange = function () { 
        if (xhr.readyState == 4 && xhr.status == 200) {
            location.href='http://localhost:4242';
        }
    }
    
    }else{
        animarNotificaciones("Porfavor completa todos los campos");
        console.log(validacionContraseña,validacionUsuario);
        setTimeout(function () {
            animarNotificaciones("");
        }, 2000);
    }


}


function animarNotificaciones(notificacion) {

    var elemento = document.getElementById("notificaciones-div");

    if (elemento.classList == "notificaciones-base") {

        elemento.innerText += notificacion;
        elemento.className = "movimiento-salida";
        elemento.className += " notificaciones-salida";
    } else {
        elemento.className = "movimiento-entrada";

        setTimeout(function () {
            elemento.className = "notificaciones-base";
            elemento.innerText = "";
        }, 1000);
    }



}

function abrirformulario() {
    this.className = "registro";
    this.id = "form-registro";
    this.removeEventListener("mouseout", basic_circle, false);
    this.removeEventListener("mouseover", animation_circle, false);
    this.removeEventListener("click",abrirformulario,false);
    document.getElementsByClassName("div-contenido")[0].className = "div-contenido-reducido";
    document.getElementById("initial-state").style.display = "none";
    document.getElementById("info-content").style.display = "none";


    setTimeout(function () {
        document.getElementById("registro-sesion").style = "display:inline";
    }, 800);

}

function comprobarContraseña() {


    if (/[a-z]/.test(this.value) && /[0-9]/.test(this.value)) {
        validacionContraseña = true;
        this.style.backgroundColor = "green";
        this.style.color = "white";
    } else {
        animarNotificaciones("Debe contener numeros y letras");
        validacionContraseña = false;
        this.style.backgroundColor = "red";
        this.style.color = "white";
        setTimeout(function () {
            animarNotificaciones("");
        }, 2000);
    }

}

function validarpasswd() {
    if (document.getElementById("input-contraseña").value == this.value && this.value != "") {
        validacionUsuario = true;
        this.style.backgroundColor = "green";
        this.style.color = "white";
    } else {
        animarNotificaciones("Las contraseñas deben coinicidir");
        validacionUsuario = false;
        this.style.backgroundColor = "red";
        this.style.color = "white";
        setTimeout(function () {
            animarNotificaciones("");
        }, 2000);
    }
}

function comprobarUsuario() {
    if (this.value.length >= 5 && this.value.length <= 8) {
        validacionUsuario = true;
        this.style.backgroundColor = "green";
        this.style.color = "white";
    } else {

        animarNotificaciones("El usuario debe contener de 5-8 caracteres.");
        validacionUsuario = false;
        this.style.backgroundColor = "red";
        this.style.color = "white";
        setTimeout(function () {
            animarNotificaciones("");
        }, 2000);

    }
}
function animation_circle() {
    this.className = "agrandar";
    document.getElementById("initial-state").innerText = "PULSA";
}
function basic_circle() {
    this.className = "redondo";
    document.getElementById("initial-state").innerText = "REGISTRO";
}







window.addEventListener("load", cargar, false);