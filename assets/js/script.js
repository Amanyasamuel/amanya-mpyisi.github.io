$(document).ready(function(){

  $("#navbar").hover(function(){
    $(this).css("background-color", "#261A21");
    $(this).css("transition", "1s");
      }, function (){
        $(this).css("background-color", "white");
    });
    $("form").click(function(){
  $(this).css("background-color", "darkslategrey");
  $(this).css("transition", "1s");
    }, function (){
      $(this).css("background-color", "black");

    });

    $(".me").click(function(){
        alert("This is not my dog. But I love dogs!");
    });

    $("#btn-primary").hover(function(){
      $(this).css("background-color", "#025aa5");
      $(this).css("transition", "1s");
        }, function (){
          $(this).css("background-color", "red");
      });


});
