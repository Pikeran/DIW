$.getJSON( "http://localhost:3000/analista", function( data ) {
    var items = [];
    $.each( data, function( key, val ) {
      console.log(val.alumno);
      items.push( "<li id='" + key + "'>" + val.alumno + "</li>" );
    });
   
    $( "<ul/>", {
      "class": "my-new-list",
      html: items.join( "" )
    }).appendTo( "body" );
  });