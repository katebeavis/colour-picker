/* Exercise 2: Color picker */
function setPreviewColor(color) {

  var preview = $(".preview");

  preview.css("background-color",color);

  var rgb = preview.css("background-color");

  $(".color-code").text(rgb);
}

$(document).ready(function(){

  $.each(colors, function(index, element) {

    addBox(element);

  });

    var $preview = $(".preview");

    var randomPosition = Math.floor( Math.random() * colors.length );

    $preview.css("background-color",colors[randomPosition]);

  $(document).on('keyup keydown keypress', '#color', function() {

    color = setPreviewColor($("input").val());

  });

  $(document).on("click", "button#add-to-favorite", function() {

    color = $("input").val();

    addBox(color);

    $("input").val("").focus();
  });

  $(document).on('mouseenter', "#colors .item",  function(){

    previewColour = $preview.css("background-color");

    $preview.css("background-color", $(this).css("background-color"));

  }).on('mouseleave', "#colors .item", function() {

    $preview.css("background-color",previewColour);

  });
});

function addBox(color) {

  if (boxNumber() === false) {

    removeBox();
  }

    square = "<div class='item' style='background-color: " + color + ";'></div>";

    $("div#colors").prepend(square);

}

function boxNumber() {

  favCount = $("#colors .item").length;

  if (favCount < 16) {

    return true;

  } else {

    return false;
  }

}

function removeBox() {

  var lastBox = $("#colors .item:last-child");

  lastBox.remove();
}

var colors = [ "22ac5e", "d68236", "58ACFA", "58D3F7", "BF00FF", "yellow", "pink", "indigo", "blue", "turquoise" ];





