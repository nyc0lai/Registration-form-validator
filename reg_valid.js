const username = document.getElementById("username");

document.getElementById("submit").addEventListener("click", test);

function checkRequired() { //to accept array of inputs
    if(typeof username.value === array) {
        document.getElementById("username").style.backgroundColor = "green";
    }
        else if(typeof username.value === undifined){
        document.getElementById("username").style.backgroundColor = "red";

    }

};

function checkLength() { //to check min and max length

};

function checkEmail() { //to validate email with regex

};

function checkPasswordsMatch() { //to match confirm password

};

function showError() { //to display the error mesage

};

function showSuccess() { //to show success green outline

};

function test() {
    document.getElementById("da").innerHTML = "o pula";
};
