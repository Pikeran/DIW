// Get the modal
var modal = document.getElementById('id01');
var modal2 = document.getElementById('id02');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
     if (event.target == modal2) {
        modal2.style.display = "none";
    }
}

function cargar() {
    console.log("Pagina cargada...");
    document.getElementById("comprobar-login").addEventListener("click",comprobarUsuario,false);
    
    
}


function comprobarUsuario(){
    var formData = new FormData();
    
    var value_1 = document.getElementById("login-usuario").value;
    var value_2 = document.getElementById("passwd-usuario").value;
    
    console.log(value_1);
    console.log(value_2);
    
   /* formData.append("login", value_1);
    formData.append("passwd", value_2);
    
    xhr = new XMLHttpRequest();
    var url = "login.php";
    xhr.open("POST", url, true);
    xhr.send(formData);
    
    
    xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        //setTimeout(obtenerXML,3000);
    
    }
  };*/
}




window.addEventListener("load", cargar, false);