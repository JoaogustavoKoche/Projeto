document.querySelector('#linkedIn').value = getSavedValue("linkedIn");
document.querySelector('#github').value = getSavedValue("github");

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




