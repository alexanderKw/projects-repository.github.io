(function($) {
  "use strict";

  var url = '/api/v1/pokemon/?limit=12';
  var xhttp = new XMLHttpRequest();
  xhttp.open('GET', 'http://pokeapi.co' + url, true);
  xhttp.send(null);
  xhttp.onreadystatechange = function() {
    if(xhttp.readyState == 4 && xhttp.status === 200) {
      var json = eval('(' + xhttp.responseText + ')');

      for(var i = 0; i < json.objects.length; i++) {
        var t = json.objects[i];
        var type = json.objects[i].types[0];
        var type2 = json.objects[i].types[1];
        if(type && type2) {
          var num = type.name + ' ' + type2.name;
        } else {
          num = type.name;
        }
        var next = json.meta.next;
        console.log(json.meta.next);
        $('.small-card-section').append($('<div class="small-card">' +
        '<img src="http://pokeapi.co/media/img/' + json.objects[i].national_id + '.png">' +
        '<h2 class="title">' + json.objects[i].name +
        '<span class="title-2">' + json.objects[i].national_id + '</span>' + '</h2>' +
        '<p><span class="title-2">Type</span>' +
        '<span class="type">' + num + '</span>' + '</p>' +
        '<p><span class="title-2">Attack</span>' +
        '<span class="title-2">' + json.objects[i].attack + '</span></p>' +
        '<p><span class="title-2">Defense</span>' +
        '<span class="title-2">' + json.objects[i].defense + '</span></p>' +
        '<p><span class="title-2">HP</span>' +
        '<span class="title-2">' + json.objects[i].hp + '</span></p>' +
        '<p><span class="title-2">SP Attack</span>' +
        '<span class="title-2">' + json.objects[i].sp_atk +
        '<p><span class="title-2">SP Defense</span>' +
        '<span class="title-2">' + json.objects[i].sp_def +
        '<p><span class="title-2">Speed</span>' +
        '<span class="title-2">' + json.objects[i].speed +
        '<p><span class="title-2">Weight</span>' +
        '<span class="title-2">' + json.objects[i].weight +
        '<p><span class="title-2">Total moves</span>' +
        '<span class="title-2">' + json.objects[i].moves.length + '</span></p>'+'</div>'));
      }
      url = next;

      $('.small-card').click(function() {
        $('.new-card').remove();
        $(this).clone().prependTo($('.hight-card-section')).removeClass().addClass('new-card');
        $('.new-card .title-2').removeClass().addClass('new-title-2');
      });

      $('.more').click(function() {
        var xhttp = new XMLHttpRequest();
        xhttp.open('GET', 'http://pokeapi.co' + url, true);
        xhttp.send(null);
        xhttp.onreadystatechange = function() {
          if(xhttp.readyState == 4 && xhttp.status === 200) {
            var json = eval('(' + xhttp.responseText + ')');
            for(var i = 0; i < json.objects.length; i++) {
              console.log(json.meta.next);
              var type = json.objects[i].types[0];
              var type2 = json.objects[i].types[1];
              if(type && type2) {
                var num = type.name + ' ' + type2.name;
              } else {
                num = type.name;
              }
              $('.small-card-section').append($('<div class="small-card">' +
              '<img src="http://pokeapi.co/media/img/' + json.objects[i].national_id + '.png">' +
              '<h2 class="title">' + json.objects[i].name +
              '<span class="title-2">' + json.objects[i].national_id + '</span>' + '</h2>' +
              '<p><span class="title-2">Type</span>' +
              '<span class="type">' + num + '</span>' + '</p>' + 
              '<p><span class="title-2">Attack</span>' +
              '<span class="title-2">' + json.objects[i].attack + '</span></p>' +
              '<p><span class="title-2">Defense</span>' +
              '<span class="title-2">' + json.objects[i].defense + '</span></p>' +
              '<p><span class="title-2">HP</span>' +
              '<span class="title-2">' + json.objects[i].hp + '</span></p>' +
              '<p><span class="title-2">SP Attack</span>' +
              '<span class="title-2">' + json.objects[i].sp_atk +
              '<p><span class="title-2">SP Defense</span>' +
              '<span class="title-2">' + json.objects[i].sp_def +
              '<p><span class="title-2">Speed</span>' +
              '<span class="title-2">' + json.objects[i].speed +
              '<p><span class="title-2">Weight</span>' +
              '<span class="title-2">' + json.objects[i].weight +
              '<p><span class="title-2">Total moves</span>' +
              '<span class="title-2">' + json.objects[i].moves.length + '</span></p>'+'</div>'));
            }
            next = json.meta.next;
            url = next;

            $('.small-card').click(function() {
              $('.new-card').remove();
              $(this).clone().prependTo($('.hight-card-section')).removeClass().addClass('new-card');
              $('.new-card .title-2').removeClass().addClass('new-title-2');
            });
          }
        }
      });
    }
  }
}(jQuery));
