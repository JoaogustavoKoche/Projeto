



const inputLink = document.getElementById("certificates");
const inputTeam = document.getElementById("team");
const inputInst = document.getElementById("institution");
const inputGrad = document.getElementById("graduation");

inputLink.addEventListener("change", validateLink);
inputTeam.addEventListener("change", validateTeam);
inputInst.addEventListener("change", validateInstitution);
inputGrad.addEventListener("change", validateGraduation);

var validGrad;
var validInst;
var validTeam;
var verify;
var verifyReg;

const button = document.getElementById('finish')
document.getElementById('finish').style.backgroundColor = '#5d87e2';
button.disabled = true;

inputInst.addEventListener("change", stateHandle);
inputGrad.addEventListener("change", stateHandle);
inputInst.addEventListener("change", stateHandle);


function stateHandle() {

    if(validGrad == true && validInst == true){
        button.disabled = false;
        document.getElementById('finish').style.backgroundColor = '#074EE8';
    }else{
        button.disabled = true;
        document.getElementById('finish').style.backgroundColor = '#5d87e2';
    }
}

















function validateLink(){
    var expression = /^(?:(?:https?|ftp):\/\/)?(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,}))\.?)(?::\d{2,5})?(?:[/?#]\S*)?$/i;
    var regex = new RegExp(expression);

    var errolink = document.querySelector("#erroUrlLink");
    const link = document.getElementById('certificates');

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

function validateTeam(){

    var expression = /^(?:(?:https?|ftp):\/\/)?(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,}))\.?)(?::\d{2,5})?(?:[/?#]\S*)?$/i;
    var regex = new RegExp(expression);

    var erroteam = document.querySelector("#erro-team");
    var errourl = document.querySelector("#erro-teamUrl");
    const link = document.getElementById('team')



    if(link.value == ''){
        link.classList.add("errorInput")
        erroteam.classList.remove("invisible")
        errourl.classList.add("invisible")

        verify = false;
    }else{
        link.classList.remove("errorInput")
        if (link.value.match(regex)) {
            link.classList.remove("errorInput")
            errourl.classList.add("invisible")
            verifyReg = true;
            
        } else {
            link.classList.add("errorInput")
            errourl.classList.remove("invisible")
            verifyReg = false;
        }
        erroteam.classList.add("invisible")
        verify = true;
    }
}



function validateInstitution(){

    var erroteam = document.querySelector("#erro-inst");
    const link = document.getElementById('institution')

    if(link.value == ''){
        link.classList.add("errorInput")
        erroteam.classList.remove("invisible")

        validInst = false;
    }else{
        link.classList.remove("errorInput")
        erroteam.classList.add("invisible")

        validInst = true;
    }
}




function validateGraduation(){

    var errograd= document.querySelector("#erro-grad");
    const link = document.getElementById('graduation')

    if(link.value == ''){
        link.classList.add("errorInput")
        errograd.classList.remove("invisible")
        
        validGrad = false;

    }else{
        link.classList.remove("errorInput")
        errograd.classList.add("invisible")
        validGrad = true;
    }
}



















