document.querySelector('#certificates').value = getSavedValue("certificates");
document.querySelector('#team').value = getSavedValue("team");
document.querySelector('#institution').value = getSavedValue("institution");
document.querySelector('#graduation').value = getSavedValue("graduation");

//document.querySelector('#0').value = getSavedValue("0");
//document.querySelector('#1').value = getSavedValue("1");
//document.querySelector('#2').value = getSavedValue("2");
//document.querySelector('#3').value = getSavedValue("3");
//document.querySelector('#4').value = getSavedValue("4");


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




