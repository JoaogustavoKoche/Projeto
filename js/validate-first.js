
const inputName = document.getElementById("fullname");
inputName.addEventListener("change", validateName);


function validateName(){

    var expression = /^[A-ZÀ-Ÿ][A-zÀ-ÿ']+\s([A-zÀ-ÿ']\s?)*[A-ZÀ-Ÿ][A-zÀ-ÿ']+$/;
    var regex = new RegExp(expression);

    var erroInvName = document.querySelector("#erro-input");
    var erroName = document.querySelector("#erro-name");
    const name = document.getElementById('fullname')

    if(name.value == ''){
        name.classList.add("errorInput")
        erroInvName.classList.remove("invisible")
        erroName.classList.add("invisible")


    }else{
        name.classList.remove("errorInput")

        if (name.value.match(regex)) {
            name.classList.remove("errorInput")
            erroName.classList.add("invisible")
            
        } else {
            name.classList.add("errorInput")
            erroName.classList.remove("invisible")
        }
        erroInvName.classList.add("invisible")
    }
}


const inputEmail = document.getElementById("email");
inputEmail.addEventListener("change", validateEmail);


function validateEmail(){

    var expression = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    var regex = new RegExp(expression);

    var erroInvEmail = document.querySelector("#erroEmail");
    var erroEmail = document.querySelector("#erro-email");
    const email = document.getElementById('email')

    if(email.value == ''){
        email.classList.add("errorInput")
        erroInvEmail.classList.remove("invisible")
        erroEmail.classList.add("invisible")


    }else{
        email.classList.remove("errorInput")

        if (email.value.match(regex)) {
            email.classList.remove("errorInput")
            erroEmail.classList.add("invisible")
            
        } else {
            email.classList.add("errorInput")
            erroEmail.classList.remove("invisible")
        }
        erroInvEmail.classList.add("invisible")
    }
}



