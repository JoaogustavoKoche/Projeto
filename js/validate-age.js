//ao clicar em next ele calcula a idade mesmo sem nada informado
function getDate(){
    var day = document.querySelector("#day").value;
    var month = document.querySelector("#month").value;
    var year = document.querySelector("#year").value;
    var userBirthday = new Date(year, month, day);
    var today = new Date();
    age = today - userBirthday;
    //converte a diferenca pra anos
    var age = Math.floor(age / 31536000000);
    if(age < 1 && !isDateValid()){
        setErrorAlert();
        document.querySelector('#age').value = '';
        return false;
        
    }
    unsetErrorAlert();
    document.querySelector('#age').value = age;
}

const birthday = document.getElementById('birthday');
const errorBirthday = document.querySelector("#invalidDate");


var dateOk = false;
function isDateValid(){
    //validar dias em fevereiro, lembrando que o valor é 1 pois a contagem começa do 0
    
    if(month.value == 2 && day.value > 29){
        setErrorAlert();
        return false;
    }

    //testar se mes tem 30 ou 31 dias
    if(thirtyDaysMonth()){
        setErrorAlert();
        return false;
    }

    if(day.value < 1  || month.value < 1 || year.value < 1900){
        setErrorAlert();
        return false;
    }

    if(day.value > 31 || month.value > 12){
        setErrorAlert();
        return false;
        
    }

dateOk = true;
unsetErrorAlert();
}


function setErrorAlert(){
        day.classList.add("errorInput");
        year.classList.add("errorInput");
        month.classList.add("errorInput");
        errorBirthday.classList.remove("invisible");
}


function unsetErrorAlert(){
        day.classList.remove("errorInput");
        year.classList.remove("errorInput");
        month.classList.remove("errorInput");
        errorBirthday.classList.add("invisible");
}
//verificar se o mes tem 30 dias
function thirtyDaysMonth(){
    //meses com 30 dias
    if((month.value == 4 || month.value == 6 || month.value == 9|| month.value == 11) && day.value > 30){  
        return true;
    }
    return false;
}


//Chama as 3 funções para popular os campos de data ao carregar a pagina
//Funciona com o layout feito por selects


populateDay(), populateYear(), populateMonth();


function populateYear() {
    var year = document.getElementById("years");
    var currentYear = (new Date()).getFullYear();
        for (var i = 1900; i <= currentYear; i++) {
            var option = document.createElement("option");
            option.innerHTML = i;
            option.value = i;
            year.appendChild(option);
        }
    };

    //Falta adicionar o 0 na frente dos números de dia/mes
    function populateDay() {
        var day = document.getElementById("days");
            for (var i = 01; i <= 31; i++) {
                var option = document.createElement("option");
                option.innerHTML = i;
                //opcao assume i+1 pois do outro jeito fica errado
                option.value = i;
                day.appendChild(option);
            }
        };

    function populateMonth() {
        var month = document.getElementById("months");
             for (var i = 01; i <= 12; i++) {
                var option = document.createElement("option");
                option.innerHTML = i;
                option.value = i;
                month.appendChild(option);
            }
        };

