/* Exercise 2: Color picker */
var colors = ["22ac5e", "d68236", "58ACFA", "58D3F7", "BF00FF", "yellow", "pink", "indigo", "blue", "turquoise", "silver", "gold" ];

function setPreviewColor(color) {
  $(".preview").css("background-color", color);
  $(".color-code").text($(".preview").css("background-color"));
}

$(document).ready(function() {
  $.each(colors, function(index, element) {
    addBox(element);
  });

  var $preview = $(".preview");
  var randomPosition = Math.floor(Math.random() * colors.length);
  $preview.css("background-color", colors[randomPosition]);

  $(document).on('keyup keydown keypress', '#color', function() {
    setPreviewColor($("input").val());
  });

  $(document).on("click", "button#add-to-favorite", function() {
    color = $("input").val();
    addBox(color);
    $("input").val("").focus();
  });

  $(document).on('mouseenter', "#colors .item", function() {
    previewColour = $preview.css("background-color");
    setPreviewColor($(this).css("background-color"));
  }).on('mouseleave', "#colors .item", function() {
    $preview.css("background-color", previewColour);
  });
});

function addBox(color) {
  if ($("#colors .item").length == 16) {
    $("#colors .item:last-child").remove();
  }
  $("div#colors").prepend("<div class='item' style='background-color: " + color + ";'></div>");
}