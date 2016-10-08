
$( document ).ready(function() {
  $("section#mentor").addClass("mentor-hover");
  setTimeout(function(){
    $("section#mentor").removeClass("mentor-hover");
    $("section#mentor").addClass("mentor-normal");
  }, 1000);

  $("#btn-show-mentor").mouseenter(function() {
      $("section#mentor").addClass("mentor-hover");
      $("section#mentor").removeClass("mentor-normal");
      $("#mentor-detail").addClass("mentor-hover");
      $("#mentor-detail").removeClass("mentor-normal");
      console.log('mouseenter');
    })
    .mouseleave(function() {
      $("section#mentor").removeClass("mentor-hover");
      $("section#mentor").addClass("mentor-normal");
      $("#mentor-detail").removeClass("mentor-hover");
      $("#mentor-detail").addClass("mentor-normal");
      console.log('out');
    });
});
