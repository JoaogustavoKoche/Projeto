document.querySelector('#certificates').value = getSavedValue("certificates");
document.querySelector('#team').value = getSavedValue("team");
document.querySelector('#institution').value = getSavedValue("institution");
document.querySelector('#graduation').value = getSavedValue("graduation");

let dados = JSON.parse(localStorage.getItem('dados')) || [];

function saveCertificates(e) {
    localStorage.setItem('dados', JSON.stringify(dados));
}


function saveValue(e) {
    let id = e.id;
    let val = e.value;
    localStorage.setItem(id, val);
}

function getSavedValue(v) {
    if(!localStorage.getItem(v)) {
        return "";
    }
    return localStorage.getItem(v);
}




