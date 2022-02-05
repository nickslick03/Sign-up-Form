const phoneNumber = document.getElementById("phoneNumber");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const error = document.getElementById("error");
const error2 = document.getElementById("error2");

function validate() {
    let pass = true;
    if(phoneNumber.value.toString().length !== 10) {
        phoneNumber.style.backgroundColor = "rgba(255, 0, 0, 0.3)";
        error.innerText = "Please enter a 10 digit phone number.";
        pass = false;
    } else {
        phoneNumber.style.backgroundColor = "white";
        error.innerText = "";
    }
    if(password.value !== confirmPassword.value) {
        password.style.backgroundColor = "rgba(255, 0, 0, 0.3)";
        confirmPassword.style.backgroundColor = "rgba(255, 0, 0, 0.3)";
        error2.innerText = "Passwords to not match.";
        pass = false;
    } else {
        password.style.backgroundColor = "white";
        confirmPassword.style.backgroundColor = "white";
        error2.innerText = "";
    }
    return pass;
}