/* Exercise 2: Color picker */
 $(document).on('keyup keydown keypress', '#color', function() {
    setPreviewColor($("input").val());
 });

function setPreviewColor(color) {
    $(".preview").css("background-color",color);
}