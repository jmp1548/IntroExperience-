/**================================================
JS : MY CUSTOM SCRIPTS
===================================================*/
$(document).ready(function () {
  var question = 1;
  var tags = [];

  var color1;
  var color2;
  var glow;
  var r1;
  var r2;
  var r3;

  var q1Tags = [];
  var q2Tags = [];
  var q3Tags = [];

  var set1 = ["Pop", "Rock", "Soul", "Rap"];
  var set2 = ["Country", "Indie", "Jazz", "Folk", "Disco"];
  var set3 = ["Punk", "NewWave", "Edm", "Metal"];

  var set1Color = ["", "#e81967", "#b90540", "#ef1882 #720026"];
  var set2Color = ["", "#e7a821", "#d3810c", "#eecf3f #d65202"];
  var set3Color = ["", "#28aaee", "#2857ee", "#49d9f8 #0f3ccc"];

  var set1Glow = ["", "#e81967", "#b90540", "#b1022f"];
  var set2Glow = ["", "#e7a821", "#d3810c", "#db7007"];
  var set3Glow = ["", "#28aaee", "#2857ee", "#154ae1"];

  function jsonCall() {
    var figure;

    $('li').fadeOut(500, function () {
      $(this).remove();
    });

    $.getJSON('js/questions.json', function (data) {
      if (question === 1) {
        curr = data.question1;
      } else if (question === 2) {
        curr = data.question2;
      } else if (question === 3) {
        curr = data.question3;
      }

      $.each(curr, function (i, f) {
        if (question === 1) {
          figure = "<li><figure><figcaption>" + f.caption + "</figcaption><img src=" + f.url + " data-tag= " + f.caption + " alt=" + f.caption + " Image></figure></li>"

          $(".gallery ul").append(figure).show(500);
        } else if (question === 2) {
          $.each(f.urls, function (j, k) {
            var caption = f.captions[j];
            for (var n = 0; n < q1Tags.length; n++) {
              if (f.tag == q1Tags[n]) {
                figure = "<li><figure><figcaption>" + caption + "</figcaption><img src=" + k + " data-tag= " + f.tag + " alt=" + caption + " Image></figure></li>"
                $(".gallery ul").append(figure);

              }
            }
          });
        } else if (question === 3) {
          figure = "<li><figure><figcaption>" + f.caption + "</figcaption><img src=" + f.url + " data-tag= " + f.caption + " data-radius= " + f.border + " alt=" + f.caption + " Image></figure></li>"
          $(".gallery ul").append(figure);
        }
      });
    });
  }

  $('.gallery').on('click', 'figure', function (e) {
    $(this).toggleClass('selected');

    color1 = "transparent";
    color2 = "transparent";

    glow = "transparent"

    r1 = "50%";
    r2 = "50%";
    r3 = "50%";

    aLength = 0;
    var temp = [];

    var radius = [];

    var set1Num = 0;
    var set2Num = 0;
    var set3Num = 0;

    $.each($('.selected img'), function (i, val) {
      temp.push($(val).attr("data-tag"));
      if (question === 3) {
        radius.push($(val).attr("data-radius"));
      }
    });

    if (radius.length === 1) {
      r1 = radius[0];
      console.log(r1);
    } else if (radius.length === 2) {
      r1 = radius[0];
      r2 = radius[1];
    } else {
      r1 = radius[0];
      r2 = radius[1];
      r3 = radius[2];
    }

    if (temp.length > 3) {
      $(this).toggleClass('selected');
      return false;
    }

    for (var i = 0; i < set1.length; i++) {
      if (set1.indexOf(temp[i]) > -1) {
        set1Num++;
      }
    }
    for (var i = 0; i < set2.length; i++) {
      if (set2.indexOf(temp[i]) > -1) {
        set2Num++;
      }
    }
    for (var i = 0; i < set3.length; i++) {
      if (set3.indexOf(temp[i]) > -1) {
        set3Num++;
      }
    }

    if (set1Num > 0 && set1Num < 3) {
      glow = set1Glow[set1Num];
      if (color1 == "transparent") {
        color1 = set1Color[set1Num];
        color2 = color1;
      } else {
        color2 = set1Color[set1Num];
      }
    }

    if (set2Num > 0 && set2Num < 3) {
      glow = set2Glow[set2Num];
      if (color1 == "transparent") {
        color1 = set2Color[set2Num];
        color2 = color1;
      } else {
        color2 = set2Color[set2Num];
      }

    }

    if (set3Num > 0 && set3Num < 3) {
      glow = set3Glow[set3Num];

      if (color1 == "transparent") {
        color1 = set3Color[set3Num];
        color2 = color1;
      } else {
        color2 = set3Color[set3Num];
      }
    } else if (set1Num == 3) {
      glow = set1Num[3];
      var color = set1Color[3].split(" ");
      color1 = color[0];
      color2 = color[1];
    } else if (set2Num == 3) {
      glow = set2Num[3];
      var color = set2Color[3].split(" ");
      color1 = color[0];
      color2 = color[1];
    } else if (set3Num == 3) {
      glow = set3Num[3];
      var color = set3Color[3].split(" ");
      color1 = color[0];
      color2 = color[1];
    }

    if (question === 1) {
      $(".auro-circle").css("background-image", "linear-gradient(-20deg, " + color1 + ", " + color2 + ")");
    } else if (question === 2) {
      $(".auro-circle-copy").css("background-color", glow);
      $(".auro-circle-copy").css("box-shadow", "0px 0px 20px " + glow);
    } else if (question === 3) {
      $(".auro-circle").css("border-radius", r1 + r2 + " / " + r3);
    }

  });

  $('.forward').on('click', function () {
    $.each($('.selected img'), function (i, val) {
      if (question === 1) {
        q1Tags.push($(val).attr("data-tag"));
      } else if (question === 2) {
        q2Tags.push($(val).attr("data-tag"));
      } else if (question === 3) {
        q3Tags.push($(val).attr("data-tag"));
      }
    });
    if (question === 1) {
      $(".questionArea").load('../question2.html');
      $(".progress").css("width", "55%");
      if (q1Tags.length < 1) {
        console.log("hey");
      }
    } else if (question === 2) {
      $(".questionArea").load('../question3.html');
      $(".auro-circle").css("border", "transparent");
      $(".forward h3").html("Finish");
      $(".progress").css("width", "85%");
    }
    if (question > 3) {
      tags = tags.concat(q1Tags);
      tags = tags.concat(q2Tags);
      tags = tags.concat(q3Tags);
    }
    console.log(tags);
    question++;
    jsonCall();
  });

  $('.back').on('click', function () {
    if (question === 1) {
      q1Tags = [];
    } else if (question === 2) {
      $(".progress").css("width", "25%");
      $(".questionArea").load('../question1.html');
      $(".auro-circle").css("background-image", "linear-gradient(-20deg, transparent, transparent)");
      $(".progress").css("width", "55%");
      $(".questionArea").load('../question2.html');
      $(".auro-circle-copy").css("box-shadow", "0px 0px 20px transparent");
      $(".auro-circle-copy").css("background-color", "transparent");
      $(".auro-circle").css("border-radius", "50%");
      q1Tags = [];
      q2Tags = [];
    } else if (question === 3) {
      $(".forward h3").html("continue");
      $(".auro-circle").css("border-radius", "50%");
      q2Tags = [];
      q3Tags = [];
    }
    question--;
    jsonCall();
  });

  $('.button').on('click', function () {
    console.log("hit");
      $('body').load('../question.html')
  });

  if (question === 1) {
    $(".questionArea").load('../question1.html')
  }
  jsonCall();
});