
const emptyErr = "Field connot be empty";
const userName = document.getElementById("username");
const userErrPelement = document.getElementById("usernameErr");

const email = document.getElementById("e-mail");
const emailErrPelement = document.getElementById("emailErr");

document.getElementById("da").innerHTML = email.id;
document.getElementById("submit").addEventListener("click", checkRequired);

function checkRequired() { //to accept array of inputs 
    
};

function checkLength(min, max) {//to check min and max length
            
};

function checkEmail(emailValue) { //to validate email with regex
    const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if(re.test(emailValue)) true; false;
}

function checkPasswordsMatch(pass1, pass2) { //to match confirm password
    if(pass1 === pass2) true
};

function showError(element1, element2, error) { //to display the error mesage
    document.getElementById(element1).style.border = "2px solid red";
    document.getElementById(element2).innerHTML = error;
};

function showSuccess(element) { //to show success green outline
document.getElementById(element).style.border = "2px solid green";

};