const button = document.getElementById('button')

button.addEventListener('click', (event) =>{
    event.preventDefault()

    const vgit = document.getElementById('github')

    var expression = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
    var regex = new RegExp(expression);

    if(vgit.value == ''){
        vgit.classList.add("errorInput")
    }

    if (vgit.value.match(regex)) {
        alert("Valid URL");
        vgit.classList.remove("errorInput")
    } else {
        alert("Invalid URL");
        vgit.classList.add("errorInput")
    }
})

