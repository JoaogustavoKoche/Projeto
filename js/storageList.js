
function getData() {
    let fullnameList = document.querySelector("#fullNameList");
    fullnameList.innerHTML = localStorage.getItem('fullname') + "(" + localStorage.getItem('nickname')+ ")";
    let emailList = document.querySelector("#emailList");
    emailList.innerHTML = localStorage.getItem('email');
    let phoneList = document.querySelector("#phoneList");
    phoneList.innerHTML = localStorage.getItem('phone');
    let birthday = document.querySelector("#birthday");
    birthday.innerHTML = localStorage.getItem('day')+"/"+localStorage.getItem('month')+"/"+localStorage.getItem('year');
    let age = document.querySelector("#age");
    age.innerHTML = localStorage.getItem('age');
    let linkedin = document.querySelector("#linkedin");
    linkedin.innerHTML = localStorage.getItem('linkedIn');
    let github = document.querySelector("#github");
    github.innerHTML = localStorage.getItem('github');
    let cert = document.querySelector("#cert0");
    cert.innerHTML = localStorage.getItem('0');
    let cert1 = document.querySelector("#cert1");
    cert1.innerHTML = localStorage.getItem('1');
    let cert2 = document.querySelector("#cert2");
    cert2.innerHTML = localStorage.getItem('2');
    let cert3 = document.querySelector("#cert3");
    cert3.innerHTML = localStorage.getItem('3');
    let cert4 = document.querySelector("#cert4");
    cert4.innerHTML = localStorage.getItem('4');
    let teamName = document.querySelector("#teamName");
    teamName.innerHTML = localStorage.getItem('team');
    let institution = document.querySelector("#institution");
    institution.innerHTML = localStorage.getItem('institution');
    let graduation = document.querySelector("#graduation");
    graduation.innerHTML = localStorage.getItem('graduation');
}