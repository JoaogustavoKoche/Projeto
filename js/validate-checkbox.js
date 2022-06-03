const validCheckbox = document.getElementById('checkbox');
const erroCheckbox = document.querySelector("#invalidCheckbox");



function validateCheckbox() {
    if (!document.getElementById('checkbox').checked) {
        validCheckbox.classList.add("errorInput");
        erroCheckbox.classList.remove("invisible");
        return false;
    } 
    
    validCheckbox.classList.remove("errorInput");
    erroCheckbox.classList.add("invisible");
}