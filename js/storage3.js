document.querySelector('#certificates').value = getSavedValue("certificates");
document.querySelector('#team').value = getSavedValue("team");
document.querySelector('#institution').value = getSavedValue("institution");
document.querySelector('#graduation').value = getSavedValue("graduation");

;

function saveCertificates(e) {
    var certificate = {
        1: "",
        2: "",
        3: "",
        4: "",
        5: "",
    };

    for (let i = 1; i < 6; i++) {
        certificate[i] = document.querySelector('#certificates').value
    }

    
    localStorage.setItem('certificate', JSON.stringify(certificate));

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




