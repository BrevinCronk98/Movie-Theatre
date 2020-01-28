// Ticket Contructor ------------------
function Ticket(movie){
  this.movie = movie,
  this.price = 20,
  this.time = ""
}

Ticket.prototype.checkPrice = function() {
  if(this.movie=="movie1"){
    this.price += 10;      
    } else if(this.movie=="movie2"){
      this.price = this.price;
    } else if(this.movie == "movie3"){
      this.price -=10;
    }
  }
  
Ticket.prototype.checkAge = function(age){
  var regularMsg = $(".regular");
  var underage2msg = $(".kid2");
  var discountMsg = $(".senior");
  var age18upOnly = $(".age18upOnly");
  var underageOutput = $(".underageOutput");
  if (age < 18) {
    age18upOnly.hide();
    underageOutput.hide();
    regularMsg.hide();
    underage2msg.show();
    discountMsg.hide();
  } else if (age >= 65) {
    age18upOnly.show();
    regularMsg.hide();
    underage2msg.hide();
    discountMsg.show();
    this.price -= 5
  } else {
    age18upOnly.show();
    regularMsg.show();
    underage2msg.hide();
    discountMsg.hide();
  }
}

Ticket.prototype.addTime = function(inputTime){
  this.time = inputTime;
} 

Ticket.prototype.showTicket = function(showOutputDiv) {
  var showOutputMsg = showOutputDiv;
  var ticketDetails = "";
  ticketDetails += `<p> Congratulations on buying your ticket for</p>`;
  ticketDetails += `<p>$${this.price}</p>`;
  ticketDetails += `<p>${this.time}</p>`
  showOutputMsg.html(ticketDetails);
}

// User Input Logic --------------------------------
$(document).ready(function(){
  $("button#btnMovie1").click(function(event){
    event.preventDefault();
    var inputAge = parseInt($("input#age").val());
    var ticket1 = new Ticket("movie1")
    ticket1.checkPrice();
    var inputTime = $("input:radio[name=movie1]:checked").val();
    ticket1.checkAge(inputAge);
    ticket1.addTime(inputTime);
    ticket1.showTicket($("#show-output1"));
  });

  $("button#btnMovie2").click(function(event){
    event.preventDefault();
    var inputAge = parseInt($("input#age").val());
    var ticket2 = new Ticket("movie2")
    ticket2.checkPrice();
    ticket2.checkAge(inputAge);  
    var inputTime = $("input:radio[name=movie2]:checked").val();
    ticket2.addTime(inputTime);
    ticket2.showTicket($("#show-output2"));
  });

  $("button#btnMovie3").click(function(event){
    event.preventDefault();
    var inputAge = parseInt($("input#age").val());
    var ticket3 = new Ticket("movie3");
    ticket3.checkPrice();
    ticket3.checkAge(inputAge);   
    var inputTime = $("input:radio[name=movie3]:checked").val();
    ticket3.addTime(inputTime);
    ticket3.showTicket($("#show-output3"));
  });


});