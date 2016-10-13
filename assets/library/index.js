
$( document ).ready(function() {
  $("section#mentor").addClass("mentor-hover");
  setTimeout(function(){
    $("section#mentor").removeClass("mentor-hover");
    $("section#mentor").addClass("mentor-normal");
  }, 100);

  $('#mentor-detail').on('click scroll touchmove mousewheel', function(e) {
    if ($(this).css('opacity')>0) {
      e.preventDefault();
      e.stopPropagation();
    }
  });
  registerEvents();

});

registerEvents = function(){
  var win = $(this)
  $("#btn-show-mentor").on("click touch", function(){
    $("#mentor-detail").removeClass("mentor-normal");
    $("#mentor-detail").addClass("mentor-hover");
  });
  $("#btn-hide-mentor").on("click touch", function(){
    $("#mentor-detail").removeClass("mentor-hover");
    $("#mentor-detail").addClass("mentor-normal");
    console.log('click');
  });
  if (win.width() >= 950) {
    $("#btn-show-mentor").mouseenter(function() {
        $("section#mentor").addClass("mentor-hover");
        $("section#mentor").removeClass("mentor-normal");
        $("#mentor-detail").addClass("mentor-hover");
        $("#mentor-detail").removeClass("mentor-normal");
        $("#btn-show-mentor").html("了解更多 <span>></span>");
        $("#btn-show-mentor").attr("style", "visibility: visible; animation-delay: 0s; animation-name: fadeInUp;");
      })
      .mouseleave(function() {
        $("section#mentor").removeClass("mentor-hover");
        $("section#mentor").addClass("mentor-normal");
        $("#mentor-detail").removeClass("mentor-hover");
        $("#mentor-detail").addClass("mentor-normal");
        $("#btn-show-mentor").html("了解更多");
      });
  }
}

$(window).on('resize', function(){
    registerEvents();
});
