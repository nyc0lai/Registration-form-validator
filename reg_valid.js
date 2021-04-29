
const emptyErr = "Field connot be empty";
const userName = document.getElementById("username");
const userErrPelement = document.getElementById("usernameErr");

const email = document.getElementById("e-mail");
const emailErrPelement = document.getElementById("emailErr");

document.getElementById("da").innerHTML = email.id;
document.getElementById("submit").addEventListener("click", checkRequired);

function checkRequired() { //to accept array of inputs 
    checkLength(3, 12);
    checkEmail(email.value);
};

function checkLength(min, max) {//to check min and max length
    const len = userName.value.length;
    const minErr = "Username must be at 3 characters";
    const maxErr = "Username must be maximum 12 symbols";
    userErrPelement.innerHTML="";
    if(userName.value === "")
        showError(userName.id, userErrPelement.id, emptyErr);
    else if(len < min)
        showError(userName.id, userErrPelement.id, minErr);
            else if(len > max)
        showError(userName.id, userErrPelement.id, maxErr);
            else
        showSuccess(userName.id);
        
};

function checkEmail(emailValue) { //to validate email with regex
    const mailErr = "Email is not valid";
    const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    emailErrPelement.innerHTML="";
    if (emailValue === "")
        showError(email.id, emailErrPelement.id, emptyErr);
    else if(!re.test(emailValue))
        showError(email.id, emailErrPelement.id, mailErr);
    else
        showSuccess(email.id);
};

function checkPasswordsMatch(pass1, pass2) { //to match confirm password
 
};

function showError(element1, element2, error) { //to display the error mesage
    document.getElementById(element1).style.border = "2px solid red";
    document.getElementById(element2).innerHTML = error;
};

function showSuccess(element) { //to show success green outline
document.getElementById(element).style.border = "2px solid green";

};