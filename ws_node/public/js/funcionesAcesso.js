function cargar() {
    console.log("Pagina cargada...");
    Ajax01();
}

var variable;

function title(){
    titulo_autoridad = "<a href=''>"+variable+"</a>";
    document.getElementById("title-autority").innerHTML = titulo_autoridad;
}

function getVarsUrl()
        {
            var url= location.search.replace("?", "");
            var arrUrl = url.split("&");
            var urlObj={};
            for(var i=0; i<arrUrl.length; i++)
            {
                var x= arrUrl[i].split("=");
                urlObj[x[0]]=x[1]
            }

            return urlObj.nombre_usuario;
        }


function Ajax01(){
    $.getJSON( "http://localhost:4242/UsuarioNombre/" + getVarsUrl(), function( data ) {
    consulta01(data);
  
});
}
function consulta01(data){
        variable = data[0].autoridad;
        title();
}        



window.addEventListener("load", cargar, false);