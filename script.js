/* Exercise 2: Color picker */
$(document).on('keyup keydown keypress', '#color', function() {

  color = setPreviewColor($("input").val());
});

$(document).on("click", "button#add-to-favorite", function() {

  color = $("input").val();

  addBox(color);
});

function setPreviewColor(color) {

  var preview = $(".preview");

  preview.css("background-color",color);

  var rgb = preview.css("background-color");

  $(".color-code").text(rgb);
}

function addBox(color) {

  square = "<div class='item' style='background-color: " + color + ";'></div>";

  $("div#colors").prepend(square);
}