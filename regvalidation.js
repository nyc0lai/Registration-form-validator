const empty = "Field connot be empty";
const userName = document.getElementById("username");
const eMail = document.getElementById("e-mail");
const pswdMain = document.getElementById("pswdmain");
const pswdSec = document.getElementById("pswdsec");

document.getElementById("submit").addEventListener("click", usernameCheck);
document.getElementById("submit").addEventListener("click", emailCheck);
document.getElementById("submit").addEventListener("click", pswdCheck);


function checkRequired(element) {
    if(element !=="")
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

function checkPasswordsMatch(main, sec) { //to match confirm password
    if(main == sec)
    return true; else
    return false;
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

        if(checkRequired(userName.value)){
            if(checkLength(userName.value, 3))
            showSuccess(userName.id); else
            showError(userName.id, "usernameErr", Err);    
        } else 
        showError(userName.id, "usernameErr", empty);                 
    };

function emailCheck() {
    let Err = "Email is not valid";
    document.getElementById("emailErr").innerHTML = "";

        if(checkRequired(eMail.value)){
            if(checkEmail(eMail.value))
                showSuccess(eMail.id); else
                showError(eMail.id, "emailErr", Err);
        } else
        showError(eMail.id, "emailErr", empty);
    };

function pswdCheck() {
    let Err1 = "Password must be at least 6 characters";
    let Err2 = "Password2 is required";
    let Err3 = "Password does not match";
    document.getElementById("passErr").innerHTML = "";
    document.getElementById("pass2Err").innerHTML = "";

        if(checkRequired(pswdMain.value)){
            if(checkLength(pswdMain.value, 6))
            showSuccess(pswdMain.id); else
            showError(pswdMain.id, "passErr", Err1);
        } else
        showError(pswdMain.id, "passErr", empty);

        if(checkRequired(pswdSec.value)){
            if(checkLength(pswdSec.value, 6)){
                if(checkPasswordsMatch(pswdMain.value, pswdSec.value))
                showSuccess(pswdSec.id); else
                showError(pswdSec.id, "pass2Err", Err3);
            } else showError(pswdSec.id, "pass2Err", Err1);
        } else
        showError(pswdSec.id, "pass2Err", Err2);
    };