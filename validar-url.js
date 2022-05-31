const button = document.getElementById('button')

button.addEventListener('click', (event) =>{
    event.preventDefault()

    const vgit = document.getElementById('github')

    if(vgit.value == ''){
        vgit.classList.add("errorInput")
        
    }else{
        vgit.classList.remove("errorInput")
    }
    
    if(vgit.value == isURL){
        alert("erro")
    }

    function isURL(str) {
        var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|'+ // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
        '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
        return pattern.test(str);
    }
})