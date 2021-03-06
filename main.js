(function($) {
  "use strict";

  var numberId;
  function addZeros(n) {
    numberId = String(numberId);
    while (numberId.length < 3) {
      numberId = "0" + numberId;
    }
    return numberId;
  }

  var url = '/api/v1/pokemon/?limit=12';
  var xhttp = new XMLHttpRequest();
  xhttp.open('GET', 'http://pokeapi.co' + url, true);
  xhttp.send(null);
  xhttp.onreadystatechange = function() {
    if(xhttp.readyState == 4 && xhttp.status === 200) {
      var json = eval('(' + xhttp.responseText + ')');

      for(var i = 0; i < json.objects.length; i++) {
        numberId = json.objects[i].national_id;
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
        '<img src="http://pokeapi.co/media/img/' + json.objects[i].national_id + '.png"' +
        'alt="' + 'image ' + json.objects[i].name + '">' +
        '<h2 class="title">' + json.objects[i].name +
        '<span class="title-2">' + addZeros() + '</span>' + '</h2>' +
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

      $('.type').children().andSelf().contents().each(function() {
        if (this.nodeType == 3) {
          $(this).replaceWith($(this).text().replace(/(fire)/gi, "<span class='char1'>$&</span>"));
        }
      });
      $('.type').children().andSelf().contents().each(function() {
        if (this.nodeType == 3) {
          $(this).replaceWith($(this).text().replace(/(bug)/gi, "<span class='char2'>$&</span>"));
        }
      });
      $('.type').children().andSelf().contents().each(function() {
        if (this.nodeType == 3) {
          $(this).replaceWith($(this).text().replace(/(water)/gi, "<span class='char3'>$&</span>"));
        }
      });
      $('.type').children().andSelf().contents().each(function() {
        if (this.nodeType == 3) {
          $(this).replaceWith($(this).text().replace(/(normal)/gi, "<span class='char4'>$&</span>"));
        }
      });
      $('.type').children().andSelf().contents().each(function() {
        if (this.nodeType == 3) {
          $(this).replaceWith($(this).text().replace(/(flying)/gi, "<span class='char5'>$&</span>"));
        }
      });
      $('.type').children().andSelf().contents().each(function() {
        if (this.nodeType == 3) {
          $(this).replaceWith($(this).text().replace(/(poison)/gi, "<span class='char6'>$&</span>"));
        }
      });
      $('.type').children().andSelf().contents().each(function() {
        if (this.nodeType == 3) {
          $(this).replaceWith($(this).text().replace(/(electric)/gi, "<span class='char8'>$&</span>"));
        }
      });
      $('.type').children().andSelf().contents().each(function() {
        if (this.nodeType == 3) {
          $(this).replaceWith($(this).text().replace(/(ground)/gi, "<span class='char9'>$&</span>"));
        }
      });

      url = next;

      $('.small-card').click(function() {
        $('.new-card').remove();
        $(this).clone().prependTo($('.hight-card-section')).removeClass().addClass('new-card');
        $('.new-card .title-2').removeClass().addClass('new-title-2');
      });

      $('.more').click(function() {
        $('.more').text('Loading...');
        var xhttp = new XMLHttpRequest();
        xhttp.open('GET', 'http://pokeapi.co' + url, true);
        xhttp.send(null);
        xhttp.onreadystatechange = function() {
          if(xhttp.readyState == 4 && xhttp.status === 200 && url !== null) {
            var json = eval('(' + xhttp.responseText + ')');

            for(var i = 0; i < json.objects.length; i++) {
              numberId = json.objects[i].national_id;
              console.log(json.meta.next);
              var type = json.objects[i].types[0];
              var type2 = json.objects[i].types[1];
              if(type && type2) {
                var num = type.name + ' ' + type2.name;
              } else {
                num = type.name;
              }
              $('.small-card-section').append($('<div class="small-card">' +
              '<img src="http://pokeapi.co/media/img/' + json.objects[i].national_id + '.png"' +
              'alt="' + 'image ' + json.objects[i].name + '">' +
              '<h2 class="title">' + json.objects[i].name +
              '<span class="title-2">' + addZeros() + '</span>' + '</h2>' +
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

            $('.type').children().andSelf().contents().each(function() {
              if (this.nodeType == 3) {
                $(this).replaceWith($(this).text().replace(/(fire)/gi, "<span class='char1'>$&</span>"));
              }
            });
            $('.type').children().andSelf().contents().each(function() {
              if (this.nodeType == 3) {
                $(this).replaceWith($(this).text().replace(/(bug)/gi, "<span class='char2'>$&</span>"));
              }
            });
            $('.type').children().andSelf().contents().each(function() {
              if (this.nodeType == 3) {
                $(this).replaceWith($(this).text().replace(/(water)/gi, "<span class='char3'>$&</span>"));
              }
            });
            $('.type').children().andSelf().contents().each(function() {
              if (this.nodeType == 3) {
                $(this).replaceWith($(this).text().replace(/(normal)/gi, "<span class='char4'>$&</span>"));
              }
            });
            $('.type').children().andSelf().contents().each(function() {
              if (this.nodeType == 3) {
                $(this).replaceWith($(this).text().replace(/(flying)/gi, "<span class='char5'>$&</span>"));
              }
            });
            $('.type').children().andSelf().contents().each(function() {
              if (this.nodeType == 3) {
                $(this).replaceWith($(this).text().replace(/(poison)/gi, "<span class='char6'>$&</span>"));
              }
            });
            $('.type').children().andSelf().contents().each(function() {
              if (this.nodeType == 3) {
                $(this).replaceWith($(this).text().replace(/(grass)/gi, "<span class='char7'>$&</span>"));
              }
            });
            $('.type').children().andSelf().contents().each(function() {
              if (this.nodeType == 3) {
                $(this).replaceWith($(this).text().replace(/(electric)/gi, "<span class='char8'>$&</span>"));
              }
            });
            $('.type').children().andSelf().contents().each(function() {
              if (this.nodeType == 3) {
                $(this).replaceWith($(this).text().replace(/(ground)/gi, "<span class='char9'>$&</span>"));
              }
            });
            $('.type').children().andSelf().contents().each(function() {
              if (this.nodeType == 3) {
                $(this).replaceWith($(this).text().replace(/(fairy)/gi, "<span class='char10'>$&</span>"));
              }
            });
            $('.type').children().andSelf().contents().each(function() {
              if (this.nodeType == 3) {
                $(this).replaceWith($(this).text().replace(/(fighting)/gi, "<span class='char11'>$&</span>"));
              }
            });
            $('.type').children().andSelf().contents().each(function() {
              if (this.nodeType == 3) {
                $(this).replaceWith($(this).text().replace(/(psychic)/gi, "<span class='char12'>$&</span>"));
              }
            });
            $('.type').children().andSelf().contents().each(function() {
              if (this.nodeType == 3) {
                $(this).replaceWith($(this).text().replace(/(steel)/gi, "<span class='char13'>$&</span>"));
              }
            });
            $('.type').children().andSelf().contents().each(function() {
              if (this.nodeType == 3) {
                $(this).replaceWith($(this).text().replace(/(ice)/gi, "<span class='char14'>$&</span>"));
              }
            });
            $('.type').children().andSelf().contents().each(function() {
              if (this.nodeType == 3) {
                $(this).replaceWith($(this).text().replace(/(ghost)/gi, "<span class='char15'>$&</span>"));
              }
            });
            $('.type').children().andSelf().contents().each(function() {
              if (this.nodeType == 3) {
                $(this).replaceWith($(this).text().replace(/(rock)/gi, "<span class='char16'>$&</span>"));
              }
            });
            $('.type').children().andSelf().contents().each(function() {
              if (this.nodeType == 3) {
                $(this).replaceWith($(this).text().replace(/(dragon)/gi, "<span class='char17'>$&</span>"));
              }
            });
            $('.type').children().andSelf().contents().each(function() {
              if (this.nodeType == 3) {
                $(this).replaceWith($(this).text().replace(/(dark)/gi, "<span class='char18'>$&</span>"));
              }
            });
            $('.more').text('Load More');

            next = json.meta.next;
            url = next;

            $('.small-card').click(function() {
              $('.new-card').remove();
              $(this).clone().prependTo($('.hight-card-section')).removeClass().addClass('new-card');
              $('.new-card .title-2').removeClass().addClass('new-title-2');
            });
          } else if(url === null) {
            $('.more').text('Pokemons is Ended !!!');
            return;
          }
        }
      });
    }
  }
}(jQuery));
