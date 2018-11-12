$.getJSON( "http://localhost:3000/analista", function( data ) {
    var items = [];
    $.each( data, function( key, val ) {
      console.log(val.alumno);
      items.push( "<li id='" + key + "'>"+"<a href ="+"http://localhost:3000/ficha.html?analid="+val._id+">"+val.alumno+"</a>"+"</li>" );
    });
    $( "<ul/>", {
      "class": "my-new-list",
      html: items.join( "" )
    }).appendTo( document.getElementById("content-alumnos"));
  });

  
