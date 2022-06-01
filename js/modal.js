var modal = document.getElementById("modal");
var openModal = document.getElementById("openModal");
var cancel = document.getElementById("modalCancel")

openModal.onclick = function() {
    modal.style.display = "block";
}

cancel.onclick = function(event) {
    if(event.target == modal) {
        modal.style.display = "none";
    }
}
