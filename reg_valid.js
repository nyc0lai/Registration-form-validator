
var userName = document.getElementById("username");

document.getElementById("da").innerHTML = userName.className;
document.getElementById("submit").addEventListener("click", checkRequired);

function checkRequired() { //to accept array of inputs
    
    checkLength(3, 12);
};

function checkLength(min, max) {//to check min and max length
    var len = userName.value.length;
    var minErr = "Username must be at 3 characters";
    var maxErr = "Username must be maximum 12 symbols";
    if(len < min)
        showError("usernameErr", minErr);
        else if(len > max)
        showError("usernameErr", maxErr);
        else
        showSuccess("username");
        
};

function checkEmail(email) { //to validate email with regex

};

function checkPasswordsMatch(pass1, pass2) { //to match confirm password
 
};

function showError(element, error) { //to display the error mesage
document.getElementById(element).innerHTML = error;
};

function showSuccess(element) { //to show success green outline
document.getElementById(element).style.border = "2px solid green";
};