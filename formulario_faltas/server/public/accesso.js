$.ajax({
    type: 'GET',
    url: 'http://localhost:3000/analista'
    _opt=categorias&_act=view',
    dataType: 'json',
    data: null,
    beforeSend: function() {
      //alert('Fetching....');
    },
    success: function() {
      //alert('Fetch Complete');
    },
    error: function() {
      //alert('Error');
    },
    complete: function(data) {   
      var ul = $("<ul class='navbar-nav'>");
      for (var j = 0; j  < data.responseJSON.length ; j++) {
          ul.append("<li class='dropdown'><a href='templates/interior-categoria.html' class='nav-link' data-toggle='dropdown'>" + data.responseJSON[j].name + "<b class='caret'></b></a><ul class='dropdown-menu'><li><a href='templates/interior-categoria.html'>" + data.responseJSON[j].name + "</a></li></ul></li>");
      } 

      $("#categorias").append(ul);   
      if (JSON.stringify(data.statusText) == '"OK"') {
        //$('#cupones_usados').text(JSON.stringify(data.responseJSON));
        //alert("cupones: " +JSON.stringify(data.responseJSON));
      }
    }
  });