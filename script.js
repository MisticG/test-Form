//$(document).ready(function(){

    addToMain = document.createElement("div");

    document.body.appendChild(addToMain);
    

    var header = document.createElement("h2");
    header.innerHTML = "Sign Up!";
    addToMain
    var signUpForm = document.createElement("form");
        signUpForm.innerText = "Namn: ";
        signUpForm.classList.add("form-group", "form-control", "form-text-muted");

    addToMain.appendChild(signUpForm);

    var signUpInputElement = document.createElement("input");
    signUpInputElement.setAttribute("type", "email");
    addToMain.appendChild(signUpInputElement);


//});

