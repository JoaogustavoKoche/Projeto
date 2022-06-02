
var certificatesList = localStorage.getItem("certificatesList");
certificatesList = JSON.parse(certificatesList);
if(certificatesList == null){
    certificatesList = [];
} 



function addItem(){
    var ul = document.getElementById("certificatesList");
    var certificate = document.getElementById("certificates");
    var li = document.createElement("li");

    var cert = JSON.stringify({
        1: ""
    })

    var edit = document.createElement("a");
    edit.setAttribute('id', 'edit');
    edit.setAttribute('onclick', 'edit()');

    var remove = document.createElement("a");
    remove.setAttribute('id', 'remove');
    remove.setAttribute('onclick', 'removeItem()')

    var input = document.createElement("input");
    input.value = certificate.value;
    input.setAttribute('id', certificate.value);
    input.setAttribute('disabled', true);

    li.setAttribute('id',certificate.value);
    li.appendChild(input);
    li.appendChild(edit);
    li.appendChild(remove);
    ul.appendChild(li);


    //certificate.value = "";
}

function removeItem(){
    console.log("removendo");
    
}

function edit() {
    var certificate = document.getElementById("certificates");

    console.log("editando");
    input = document.getElementById(getSavedValue('certificates'));
    console.log(getSavedValue('certificates'));
    input.setAttribute('disabled', false);
}