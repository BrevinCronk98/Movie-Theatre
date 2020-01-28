

// User Input Logic --------------------------------
$(document).ready(function(){
  $("#formAge").submit(function(event){
    event.preventDefault();
    var inputAge = parseInt($("input#age").val());
    console.log(inputAge);
  });

  $("button#btnMovie1").click(function(event){
    event.preventDefault();
    console.log("1st movie submitted");
    var inputTime = $("input:radio[name=movie1]:checked").val();
    console.log(inputTime);
  });

  $("button#btnMovie2").click(function(event){
    event.preventDefault();
    console.log("2nd movie submitted");
    var inputTime = $("input:radio[name=movie2]:checked").val();
    console.log(inputTime);
  });

  $("button#btnMovie3").click(function(event){
    event.preventDefault();
    console.log("3rd movie submitted");
    var inputTime = $("input:radio[name=movie3]:checked").val();
    console.log(inputTime);
  });


})