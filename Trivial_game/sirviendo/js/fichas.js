function cargar(){
    console.log("Pagina cargada...") 
        consultaAjax();
    }



    function consultaAjax(){

        $.getJSON( "http://localhost:4242/Ficha", function( data ) {
        var items = [];
        $.each( data, function( key, val ) {
            var contenedor = document.getElementById("listado-fichas");    
            var linea;

            if(val.categoria == "Geografía"){
                linea = "<li id="+key+">"+"<strong>Pregunta:</strong> "+val.pregunta+" <strong>Respuesta:</strong> "+val.respuestaC+" <strong>Categoría:</strong>"+val.categoria+"</li>"; 
                contenedor.innerHTML+=linea;
            }
            if(val.categoria == "Entretenimiento"){
                linea = "<li id="+key+">"+"<strong>Pregunta:</strong> "+val.pregunta+" <strong>Respuesta:</strong> "+val.respuestaC+" <strong>Categoría:</strong>"+val.categoria+"</li>"; 
                contenedor.innerHTML+=linea;
            }
            if(val.categoria == "Historia"){
                linea = "<li id="+key+">"+"<strong>Pregunta:</strong> "+val.pregunta+" <strong>Respuesta:</strong> "+val.respuestaC+" <strong>Categoría:</strong>"+val.categoria+"</li>"; 
                contenedor.innerHTML+=linea;
            }
            if(val.categoria == "Arte y Literatura"){
                linea = "<li id="+key+">"+"<strong>Pregunta:</strong> "+val.pregunta+" <strong>Respuesta:</strong> "+val.respuestaC+" <strong>Categoría:</strong>"+val.categoria+"</li>"; 
                contenedor.innerHTML+=linea;
            }
            if(val.categoria == "Ciencia y Naturaleza"){
                linea = "<li id="+key+">"+"<strong>Pregunta:</strong> "+val.pregunta+" <strong>Respuesta:</strong> "+val.respuestaC+" <strong>Categoría:</strong>"+val.categoria+"</li>"; 
                contenedor.innerHTML+=linea;
            }
            if(val.categoria == "Deporte y Ocio"){
                linea = "<li id="+key+">"+"<strong>Pregunta:</strong> "+val.pregunta+" <strong>Respuesta:</strong> "+val.respuestaC+" <strong>Categoría:</strong>"+val.categoria+"</li>";  
                contenedor.innerHTML+=linea;
            }

        });
        //AQUI MAS CONSULTAS:
        });
    
    }




    window.addEventListener("load",cargar,false);