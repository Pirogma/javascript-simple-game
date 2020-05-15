$(function() {
  var soundFrog = $("#soundFrog")[0];
          $("#frog").click(function() {
              soundFrog.play();
          });
})

$(function() {
    $("#frog").each(function(index) {

      let x = Math.round(Math.random() * 1000)
      $(this).css({
        "left": x + "px"
      })
    })
  })

setInterval(movePlane, 20);
var keys = {}

$(document).keydown(function(e) {
    keys[e.keyCode] = true;
});

$(document).keyup(function(e) {
    delete keys[e.keyCode];
});

function movePlane() {
    for (var direction in keys) {
        if (!keys.hasOwnProperty(direction)) continue;
        if (direction == 37) {
            $("#frog").animate({left: "-=10"}, 0);
        }
        if (direction == 38) {
            $("#frog").animate({top: "-=10"}, 0);
        }
        if (direction == 39) {
            $("#frog").animate({left: "+=10"}, 0);
        }
        if (direction == 40) {
            $("#frog").animate({top: "+=10"}, 0);
        }
        if (direction == 65) {
            $("#frog").animate({left: "-=10"}, 0);
        }
        if (direction == 68) {
            $("#frog").animate({left: "+=10"}, 0);
        }
        if (direction == 87) {
            $("#frog").animate({top: "-=10"}, 0);
        }
        if (direction == 83) {
            $("#frog").animate({top: "+=10"}, 0);
        }
    }
}
