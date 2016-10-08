
$( document ).ready(function() {
  $("section#mentor").addClass("mentor-hover");
  setTimeout(function(){
    $("section#mentor").removeClass("mentor-hover");
    $("section#mentor").addClass("mentor-normal");
  }, 100);

  $("#btn-show-mentor").mouseenter(function() {
      $("section#mentor").addClass("mentor-hover");
      $("section#mentor").removeClass("mentor-normal");
      $("#mentor-detail").addClass("mentor-hover");
      $("#mentor-detail").removeClass("mentor-normal");
      $("#btn-show-mentor").html("了解更多 <span>></span>");
      console.log('mouseenter');
    })
    .mouseleave(function() {
      $("section#mentor").removeClass("mentor-hover");
      $("section#mentor").addClass("mentor-normal");
      $("#mentor-detail").removeClass("mentor-hover");
      $("#mentor-detail").addClass("mentor-normal");
      $("#btn-show-mentor").html("了解更多");
      console.log('out');
    });
});
