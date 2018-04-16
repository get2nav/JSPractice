var personInfo = document.getElementById("personInfo");
var gender = document.getElementById("personInfo").gender;

var username = document.getElementById('userName');

var location = document.getElementById('location');

var company = document.getElementById('company');

var mobile = document.getElementById('mobile');

var email = document.getElementById('email');


function genderValidation() {
    resetMessageGender();
    var validated = true;
   

    var contactChoice2 = document.getElementById("contactChoice2");

    if (gender[0].checked == false && gender[1].checked == false) {
        validated = false;
        contactChoice2.insertAdjacentHTML('afterend', '<span id="genderError" style="color:red">  Select Gender </span>');
    }

    return validated;
}


function usernameValidation(){

     

    var validated = true;

    resetMessageUserName();
    if (username.value =="") {
        validated = false;
        username.insertAdjacentHTML('afterend', '<span id="userError" style="color:red">   this is an invalid name </span>');
    }
    return validated;

}


function locationValidation() {

    
    var validated = true;

    resetMessageLocation();
    if (location.value == "") {
        validated = false;
        location.insertAdjacentHTML('afterend', '<span id="locationError" style="color:red">   this is an invalid name </span>');
    }
    return validated;

}
function companyValidation() {

   

    var validated = true;

    resetMessageCompany();
    if (company.value == "") {
        validated = false;
        company.insertAdjacentHTML('afterend', '<span id="companyError" style="color:red">   this is an invalid name </span>');
    }
    return validated;

}


function mobileValidation() {

    

    var validated = true;

    resetMessagePhone();
    if (mobile.value == "") {
        validated = false;
        mobile.insertAdjacentHTML('afterend', '<span id="phoneError" style="color:red">   this is an invalid name </span>');
    }

    
    return validated;

}


function emailValidation() {

   
    var validated = true;

    resetMessageEmail();
    if (email.value == "") {
        validated = false;
        email.insertAdjacentHTML('afterend', '<span id="emailError" style="color:red">   this is an invalid name </span>');
    }


    return validated;

}







function resetMessageGender() {


    if (document.getElementById('genderError')) {
        document.getElementById('genderError').remove();
    }

    
}

function resetMessagePhone() {

    if (document.getElementById('phoneError')) {
        document.getElementById('phoneError').remove();
    }

}



function resetMessageUserName() {


    if (document.getElementById('userError')) {
        document.getElementById('userError').remove();
    }


    
}

function resetMessageLocation() {


    if (document.getElementById('locationError')) {
        document.getElementById('locationError').remove();
    }



}


function resetMessageCompany() {


    if (document.getElementById('companyError')) {
        document.getElementById('companyError').remove();
    }



}


function resetMessageEmail() {


    if (document.getElementById('emailError')) {
        document.getElementById('emailError').remove();
    }



}






// document.getElementById("personInfo").addEventListener("submit", function (event) {
//     event.preventDefault()

//     usernameValidation();
//     genderValidation(); 
//     companyValidation();
//     locationValidation();
//     mobileValidation();
//     emailValidation();

//     console.log(personInfo);
    
// });







