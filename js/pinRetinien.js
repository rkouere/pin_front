$(document).ready(function(){
  $("#start").click(function() {
    $("form").each(function(i) {
      var firstName = $("input#firstName").val();
      var surname = $("input#surname").val();
      var age = $("input#age").val();
      var gender = getRadioButtonChecked('input[name=gender]:checked');
      var wearingCorrection = getRadioButtonChecked('input[name=wearingCorrection]:checked');
      var email = $('#email').val();
      var doYouWantToBeContacted = checkButtonClicked("input[name=doYouWantToBeContacted]");
      var isFormComplete = checkForm(firstName, surname, age, gender, wearingCorrection, email);


      if(isFormComplete) {
        localStorage.firstName = firstName;
        localStorage.surname = surname;
        localStorage.age = age;
        localStorage.sex = gender;
        localStorage.wearingCorrection = wearingCorrection;
        localStorage.email = email;
        localStorage.doYouWantToBeContacted = doYouWantToBeContacted;
        localStorage.userId = getUserId(url, firstName, surname, age, gender, wearingCorrection, email);
        showTraining();
      }
    })
  });

});

function showTraining() {
  $('#userName').text(localStorage.firstName + " " + localStorage.surname);
}
function getRadioButtonChecked(selector) {
  var result = '';
  if($(selector).prop('checked')) {
    result = $(selector).val();
  }
  return result;
}
/*
  Checks whether a radio button has been clicked
*/
function checkButtonClicked(selector) {
  var radioButtonClicked = false;
  if($(selector).is(':checked')) {
    radioButtonClicked = true;
  }
  return radioButtonClicked;
}
/*
  Checks the followings :
  - the first name is filled in
  - the surname is filled in
  - the age field is filled in
  - the gender is filled in
  - the "are you wearing glaces" is filled in
  - the email is filled in
*/
function checkForm(firstName, surname, age, gender, wearingCorrection, email) {
  var isFormComplete = true;

  // checking the first name
  if($.trim(firstName) == '') {
    $("div#firstNameAlert").removeClass("d-none");
    isFormComplete = false;
  }
  else {
    $("div#firstNameAlert").addClass("d-none");
  }

  // checking the surname
  if($.trim(surname) == '') {
    $("div#surnameAlert").removeClass("d-none");
    isFormComplete = false;
  }
  else {
    $("div#surnameAlert").addClass("d-none");
  }

  // the age field must be completed
  if(age == '' || !$.isNumeric(age)) {
    $("div#ageAlert").removeClass("d-none");
    isFormComplete = false;
  }
  else {
    $("#ageAlert").addClass("d-none");
  }

  // gender
  if(gender == '' || gender == 'undefined') {
    $("div#genderAlert").removeClass("d-none");
    isFormComplete = false;
  }
  else {
    $("div#genderAlert").addClass("d-none");
  }

  // prescription glasses
  if(wearingCorrection == '' || wearingCorrection == 'undefined') {
    $("div#wearingGlacesAlert").removeClass("d-none");
    isFormComplete = false;
  }
  else {
    $("div#wearingGlacesAlert").addClass("d-none");
  }


  // the email field must be completed and correctly formed.
  if(email == '') {

    $("div#emailAlert").removeClass("d-none");
    isFormComplete = false;
  }
  else {
    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    if(!emailReg.test(email)) {
      $("div#emailAlert").removeClass("d-none");
      isFormComplete = false;
    }
    else {
      $("div#emailAlert").addClass("d-none");
    }
  }

  return isFormComplete;
}

function getUserId($url, $firstName, $surname, $age, $gender, $prescription, $email) {
  console.log("to be implemented");
  return 1;
}
