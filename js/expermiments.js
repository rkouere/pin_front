$(document).ready(function(){
  var firstName = localStorage.firstName;
  var surname = localStorage.surname;
  $('#userName').text(firstName + " " + surname);

  $("#begin").click(function() {
    window.location.href = url + "experiments.html";
  })

})
