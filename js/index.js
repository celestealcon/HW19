console.log("hello");
$( button ).hover( handlerIn, handlerOut )
$(document).ready(function(){
    $("mywork").click(function(){
      $("#content1").fadeOut();
      $("#content2").fadeOut("slow");
      $("#content3").fadeOut(3000);
    });
  });

  $("#p1").mouseenter(function(){
    alert("You entered p1!");
  });