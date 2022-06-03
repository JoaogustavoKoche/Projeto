const button = document.getElementById('buttonn')
document.getElementById('buttonn').style.backgroundColor = '#5d87e2';

const erroinput = document.querySelector("#erro-input");
const errogit = document.querySelector("#erroUrlGit");
const inputLink = document.getElementById("linkedIn");
const input = document.getElementById("github");

input.addEventListener("change", validateGit);
inputLink.addEventListener("change", validateLink);
input.addEventListener("change", stateHandle);


function stateHandle() {

    var expression = /^(?:(?:https?|ftp):\/\/)?(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,}))\.?)(?::\d{2,5})?(?:[/?#]\S*)?$/i;
    var regex = new RegExp(expression);
    const git = document.getElementById('github')
    const link = document.getElementById('linkedIn')
    var errogit = document.querySelector("#erroUrlGit");
    var errolink = document.querySelector("#erroUrlLink");

    if (document.querySelector("#github").value == '') {
        button.disabled = true;
        erroinput.classList.remove("invisible")
        errogit.classList.add("invisible")
        document.getElementById('buttonn').style.backgroundColor = '#5d87e2';

    } else {
            
        if (git.value.match(regex)) {
            button.disabled = false;
            document.getElementById('buttonn').style.backgroundColor = '#074EE8';
            errogit.classList.add("invisible")
        } else {
            button.disabled = true;
            errogit.classList.remove("invisible")
            erroinput.classList.add("invisible")
            document.getElementById('buttonn').style.backgroundColor = '#5d87e2';
        }
    }
}



function validateLink(){
    
    var expression = /^(?:(?:https?|ftp):\/\/)?(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,}))\.?)(?::\d{2,5})?(?:[/?#]\S*)?$/i;
    var regex = new RegExp(expression);

    var errolink = document.querySelector("#erroUrlLink");
    const link = document.getElementById('linkedIn');

    if(!link.value == ''){     
        if (link.value.match(regex)) {
            link.classList.remove("errorInput")
            errolink.classList.add("invisible")
        } else {
            link.classList.add("errorInput")
            errolink.classList.remove("invisible")
        }
    }else{
        link.classList.remove("errorInput")
        errolink.classList.add("invisible")
    }
}

function validateGit(){

    var expression = /^(?:(?:https?|ftp):\/\/)?(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,}))\.?)(?::\d{2,5})?(?:[/?#]\S*)?$/i;
    var regex = new RegExp(expression);

    var erroinput = document.querySelector("#erro-input");
    var errogit = document.querySelector("#erroUrlGit");
    const git = document.getElementById('github')

    if(git.value == ''){
        git.classList.add("errorInput")
        erroinput.classList.remove("invisible")
    }else{
        git.classList.remove("errorInput")

        if (git.value.match(regex)) {
            git.classList.remove("errorInput")
            errogit.classList.add("invisible")
        } else {
            git.classList.add("errorInput")
            errogit.classList.remove("invisible")
        }
        erroinput.classList.add("invisible")
    }
}
