const button = document.getElementById('button')
const erroinput = document.querySelector("#erro-input");
const errogit = document.querySelector("#erroUrlGit");
let input = document.querySelector("#github");

input.addEventListener("change", stateHandle);

button.disabled = true;

function stateHandle() {
    if (document.querySelector("#github").value == '') {
        button.disabled = true; 
        document.getElementById('button').style.backgroundColor = '#5d87e2';
        erroinput.classList.remove("invisible")
        errogit.classList.add("invisible")
    } else {
        button.disabled = false;
        document.getElementById('button').style.backgroundColor = '#074EE8';
        erroinput.classList.add("invisible")
        
    }
}

button.addEventListener('click', (event) =>{
    event.preventDefault()

    const git = document.getElementById('github')
    const link = document.getElementById('linkedIn');
    const errolink = document.querySelector("#erroUrlLink");
    const erroinput = document.querySelector("#erro-input");
    const errogit = document.querySelector("#erroUrlGit");

    var expression = /^(?:(?:https?|ftp):\/\/)?(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,}))\.?)(?::\d{2,5})?(?:[/?#]\S*)?$/i;
    var regex = new RegExp(expression);

    if(!link.value == ''){     
        if (link.value.match(regex)) {
            link.classList.remove("errorInput")
        } else {
            link.classList.add("errorInput")
            errolink.classList.remove("invisible")
        }
    }else{
        link.classList.remove("errorInput")
        errolink.classList.add("invisible")
        
    }

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
})

