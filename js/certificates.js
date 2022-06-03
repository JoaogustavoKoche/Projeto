function loadCertificates() {
    var i = 0;
    for (i; i < 5; i++) {
        if(!localStorage.getItem(i)) {
            return
        }else {
            loadItem(i);
        }
    }
}

function loadItem(i) {
    var ul = document.getElementById("certificatesList");
    var certificate = document.getElementById("certificates");
    var li = document.createElement("li");

    
    var input = document.createElement("input");
    input.value = localStorage.getItem(i);
    
    input.setAttribute('id', ul.children.length);
    input.setAttribute('value', input.value);
    input.setAttribute('onkeyup', "saveValue(this)");
    input.setAttribute('disabled', true);
    localStorage.setItem(input.id, input.value);
    
    var edit = document.createElement("a");
    edit.setAttribute('id', 'edit');
    edit.setAttribute('name', ul.children.length);
    edit.setAttribute('onclick', 'edit(this)');
    
    var remove = document.createElement("a");
    remove.setAttribute('id', 'remove');
    remove.setAttribute('name', ul.children.length);
    remove.setAttribute('onclick', 'removeItem(this)')

    li.setAttribute('id',input.value);
    li.setAttribute('name',ul.children.length);
    li.appendChild(input);
    li.appendChild(edit);
    li.appendChild(remove);
    ul.appendChild(li);

    certificate.value = "";

}

function addItem(){
    var ul = document.getElementById("certificatesList");
    var certificate = document.getElementById("certificates");
    var li = document.createElement("li");

    
    var input = document.createElement("input");
    input.value = certificate.value;
    
    input.setAttribute('id', ul.children.length);
    input.setAttribute('value', certificate.value);
    input.setAttribute('onkeyup', "saveValue(this)");
    input.setAttribute('disabled', true);
    localStorage.setItem(input.id, input.value);
    
    var edit = document.createElement("a");
    edit.setAttribute('id', 'edit');
    edit.setAttribute('name', ul.children.length);
    edit.setAttribute('onclick', 'edit(this)');
    
    var remove = document.createElement("a");
    remove.setAttribute('id', 'remove');
    remove.setAttribute('name', ul.children.length);
    remove.setAttribute('onclick', 'removeItem(this)')

    li.setAttribute('id',certificate.value);
    li.setAttribute('name',ul.children.length);
    li.appendChild(input);
    li.appendChild(edit);
    li.appendChild(remove);
    ul.appendChild(li);


    certificate.value = "";
}

function removeItem(e){
    let list = document.querySelector('#certificatesList');
    list.removeChild(e.parentNode);
    localStorage.removeItem(e.name)
    
}

function edit(p) {
    let input = document.getElementById(p.name);
    if(input.getAttribute("disabled")){
        input.removeAttribute("disabled");
    }else{
        input.setAttribute('disabled', true);
    }

}

