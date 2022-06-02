document.querySelector('#fullname').value = getSavedValue("fullname");
document.querySelector('#nickname').value = getSavedValue("nickname");
document.querySelector('#email').value = getSavedValue("email");
document.querySelector('#phone').value = getSavedValue("phone");



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
