 
 $.getJSON( "http://localhost:3000/analista/"+obtenerUrl(), function( data ) {
    var items = [];
    $.each( data, function( key, val ) {
      if (key=="alumno"){
          console.log(val);
          $("#informacion-nombre").append(val);
          
      }
    });
    $.each( data, function( key, val ) {
      if (key=="profesor"){
          console.log(val);
          $("#informacion-profesor").append(val);
          
      }
    });
    $.each( data, function( key, val ) {
      if (key=="grup"){
          console.log(val);
          $("#informacion-grup").append(val);
          
      }
    });
    $.each( data, function( key, val ) {
      if (key=="horario"){
          console.log(val);
          $("#informacion-horario").append(val);
          
      }
    });
    $.each( data, function( key, val ) {
      if (key=="fechaIncidencia"){
          console.log(val);
          $("#informacion-fecha").append(val);
          
      }
    });
    $.each( data, function( key, val ) {
      if (key=="gravedad"){
          console.log(val);
          $("#informacion-gravedad").append(val);
          
      }
    });

  }); 


 function obtenerUrl(){

var url = location.search;
var identificador = url.split("=")[1];
console.log(identificador);

return identificador;

}