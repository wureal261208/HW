// localStorage
function test(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var age = document.getElementById("age").value;
    var email = document.getElementById("email").value;
    
    localStorage.setItem("username",username);
    localStorage.setItem("password",password);
    localStorage.setItem("age",age);
    localStorage.setItem("email",email);
}

// ValidateForm
function validateForm() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let age = document.getElementById("age").value;
    let email = document.getElementById("email").value;

    if (username == "") {
        document.getElementById("errorUsername").innerHTML = 
            "*Please enter username";
        return false;
    }

    if (password == "") {
        document.getElementById("errorPassword").innerHTML = 
            "*Please enter password";
        return false;
    }
    return true;
    
    if (age == "") {
        document.getElementById("errorAge").innerHTML = 
            "*Please enter age";
        return false;
    }
    return true;

    if (email == "") {
        document.getElementById("errorEmail").innerHTML = 
            "*Please enter email";
        return false;
    }
    return true;
}