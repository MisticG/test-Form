//$(document).ready(function(){

    addToMain = document.createElement("div");

    document.body.appendChild(addToMain);
    

    var header = document.createElement("h2");
    header.innerHTML = "Sign Up!";
    addToMain.appendChild(header)
    
    var signUpForm = document.createElement("form");
        signUpForm.innerText = "Namn: ";
        signUpForm.classList.add("form-group", "form-control");

    addToMain.appendChild(signUpForm);

    var signUpInputElement = document.createElement("input");
    signUpInputElement.setAttribute("aria-describedby", "emailHelp");
    signUpInputElement.setAttribute("type", "email");
    signUpInputElement.setAttribute("placeholder", "Enter email");
    addToMain.appendChild(signUpInputElement);


//});

