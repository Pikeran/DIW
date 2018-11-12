 
 $.getJSON( "http://localhost:3000/analista/"+obtenerUrl(), function( data ) {
    var items = [];
    $.each( data, function( key, val ) {
      if (key=="alumno"){
          console.log(val);
          $("#informacion-nombre").append(val);
          //items.push( "<label id='" + key + "'>"+val+"</li>" );
      }

    });
    /*
    $( "<ul/>", {
      "class": "my-new-list",
      html: items.join( "" )
    }).appendTo( document.getElementById("informacion-nombre"));
    */
  }); 


 function obtenerUrl(){

var url = location.search;
var identificador = url.split("=")[1];
console.log(identificador);

return identificador;

}
 