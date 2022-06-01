/*
function save() {
    let linkedin = document.querySelector('#linkedIn').value;
    let github = document.querySelector('#github').value;
    localStorage.setItem("linkedin", linkedin);
    localStorage.setItem("github", github);
    console.log(localStorage.getItem("linkedin"));
    console.log(localStorage.getItem("github"));
}
*/

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




