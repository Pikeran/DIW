function cargar(){
    console.log("Pagina cargada...") 
    consultaAjax();
    }


    function consultaAjax(){
        let xhr = new XMLHttpRequest();
        xhr.open('GET', 'http://mapas.valencia.es/lanzadera/opendata/Monumentos_falleros/JSON');

        xhr.onload = function(){

            if(xhr.status == 200){

                RespuestaJson = xhr.responseText;
                JsonObjeto = JSON.parse(RespuestaJson);
                console.log(JsonObjeto);

            }
        }
        xhr.send();
    }



    window.addEventListener("load",cargar,false);