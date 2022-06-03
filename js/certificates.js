
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

    var remove = document.createElement("a");
    remove.setAttribute('id', 'remove');
    remove.setAttribute('onclick', 'removeItem(document.getElementById(certificates.value))')

    var input = document.createElement("input");
    input.value = certificate.value;
    input.setAttribute('id', ul.children.length);
    input.setAttribute('onkeyup', "saveValue(this)");
    input.setAttribute('disabled', true);
    localStorage.setItem(input.id, input.value);

    var edit = document.createElement("a");
    edit.setAttribute('id', 'edit');
    edit.setAttribute('name', ul.children.length);
    edit.setAttribute('onclick', 'edit(this)');

    li.setAttribute('id',certificate.value);
    li.appendChild(input);
    li.appendChild(edit);
    li.appendChild(remove);
    ul.appendChild(li);


    //certificate.value = "";
}

function removeItem(e){
    let list = document.querySelector('#certificatesList')
    var id = e.id;
    console.log("removendo");
    console.log(id);
    console.log(e);
    list.removeChild(e);
    
}

function edit(p) {
    let input = document.getElementById(p.name);
    if(input.getAttribute("disabled")){
        input.removeAttribute("disabled");
    }else{
        input.setAttribute('disabled', true);
    }

}