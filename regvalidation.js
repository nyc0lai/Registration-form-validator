const empty = "Field connot be empty";
const userName = document.getElementById("username");
const eMail = document.getElementById("e-mail");

document.getElementById("submit").addEventListener("click", usernameCheck);
document.getElementById("submit").addEventListener("click", emailCheck);

function checkRequired(element) { //to accept array of inputs 
    if(element ==="")
    return true; else
    return false;
};

function checkLength(element, min) {//to check min and max length
    if(element.length >= min)
    return true; else
    return false;
};

function checkEmail(value) { //to validate email with regex
    const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if(re.test(value))
    return true;
        else
    return false;
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

function usernameCheck() {
    let Err = "Username must be at 3 characters";
    document.getElementById("usernameErr").innerHTML = "";
    userName.value = userName.value.replaceAll(" ", "");
        if(checkRequired(userName.value))
            showError(userName.id, "usernameErr", empty);
        else if(checkLength(userName.value, 3))
                showSuccess(userName.id); else
                showError(userName.id, "usernameErr", Err); 
    };

function emailCheck() {
    let Err = "Email is not valid";
    document.getElementById("emailErr").innerHTML = "";
        if(checkRequired(eMail.value))
            showError(eMail.id, "emailErr", empty)
        else if(checkEmail(eMail.value))
                showSuccess(eMail.id);
        else
                showError(eMail.id, "emailErr", Err); 
    };
    /*
function pswd1Check() {
    if(checkLength(userName.value, 6))
    showSuccess(userName.id); else
    showError(userName.id); 
    };
function usernameCheck() {
    if(checkLength(userName.value, 6))
    showSuccess(userName.id); else
    showError(userName.id); 
    };
    */
document.getElementById("da").innerHTML = eMail.value;