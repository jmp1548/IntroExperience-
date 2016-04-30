/**================================================
JS : MY CUSTOM SCRIPTS
===================================================*/
$(document).ready(function () {
  var color1;
  var color2;

  var set1 = ["Pop", "Rock", "Soul", "Rap"];
  var set2 = ["Country", "Indie", "Jazz", "Folk", "Disco"];
  var set3 = ["Punk", "NewWave", "Edm", "Metal"];

  var set1Color = ["", "#e81967", "#b90540", "#ef1882 #720026"];
  var set2Color = ["", "#e7a821", "#d3810c", "#eecf3f #d65202"];
  var set3Color = ["", "#28aaee", "#2857ee", "#49d9f8 #0f3ccc"];

  $.getJSON('js/questions.json', function (data) {
    $.each(data, function (i, f) {
      var figure = "<li><figure><figcaption>" + f.caption + "</figcaption><img src=" + f.url + " data-tag= " + f.caption + " alt=" + f.caption + " Image></figure></li>"
      $(".gallery ul").append(figure);
    });
  });

  $('.gallery').on('click', 'figure', function (e) {
    $(this).toggleClass('selected');

    color1 = "transparent";
    color2 = "transparent";
    aLength = 0;
    var a = [];

    var set1Num = 0;
    var set2Num = 0;
    var set3Num = 0;

    $.each($('.selected img'), function (i, val) {
      a.push($(val).attr("data-tag"));
      return a;
    });

    if (a.length > 3) {
      $(this).toggleClass('selected');
      return false;
    }

    for (var i = 0; i < set1.length; i++) {
      if (a.indexOf(set1[i]) > -1) {
        set1Num++;
      }
    }
    for (var i = 0; i < set2.length; i++) {
      if (a.indexOf(set2[i]) > -1) {
        set2Num++;
      }
    }
    for (var i = 0; i < set3.length; i++) {
      if (a.indexOf(set3[i]) > -1) {
        set3Num++;
      }
    }

    if (set1Num > 0 && set1Num < 3) {
      if (color1 == "transparent") {
        color1 = set1Color[set1Num];
        color2 = color1;
      } else {
        color2 = set1Color[set1Num];
      }
    }
    if (set2Num > 0 && set2Num < 3) {
      if (color1 == "transparent") {
        color1 = set2Color[set2Num];
        color2 = color1;
      } else {
        color2 = set2Color[set2Num];
      }
    }
    if (set3Num > 0 && set3Num < 3) {
      if (color1 == "transparent") {
        color1 = set3Color[set3Num];
        color2 = color1;
      } else {
        color2 = set3Color[set3Num];
      }
    } else if (set1Num == 3) {
      var color = set1Color[3].split(" ");
      color1 = color[0];
      color2 = color[1];
    } else if (set2Num == 3) {
      var color = set2Color[3].split(" ");
      color1 = color[0];
      color2 = color[1];
    } else if (set3Num == 3) {
      var color = set3Color[3].split(" ");
      color1 = color[0];
      color2 = color[1];
    }


    $(".auro-circle").css("background-image", "linear-gradient(-20deg, " + color1 + ", " + color2 + ")");

  });

  $('.forward').on('click', function () {
    $.each($('.selected img'), function (i, val) {
      console.log($(val).attr("data-tag"));
    });
  });

});