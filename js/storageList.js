
function getData() {
    let fullnameList = document.querySelector("#fullNameList");
    fullnameList.innerHTML = localStorage.getItem('fullname');
    let nicknameList = document.querySelector("#nicknameList");
    nicknameList.innerHTML = localStorage.getItem('nickname');
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
    let cert = document.querySelector("#cert");
    cert.innerHTML = localStorage.getItem('certificates');
    let teamName = document.querySelector("#teamName");
    teamName.innerHTML = localStorage.getItem('team');
    let institution = document.querySelector("#institution");
    institution.innerHTML = localStorage.getItem('institution');
    let graduation = document.querySelector("#graduation");
    graduation.innerHTML = localStorage.getItem('graduation');
}