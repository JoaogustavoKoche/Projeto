function getDate(){
    var day = document.querySelector("#day").value;
    var month = document.querySelector("#month").value;
    var year = document.querySelector("#year").value;
    var userBirthday = new Date(year, month, day);
    var today = new Date();
    var age = today - userBirthday;
    //converte a diferenca pra anos
    age = Math.floor(age / 31536000000);
    document.querySelector('#age').value = age;
}

function isValid(){
    //validar dias em fevereiro, lembrando que o valor é 1 pois a contagem começa do 0
    if(month.value == 1 && day.value > 29){
        return false;
    }

    //testar se mes tem 30 ou 31 dias
    if(thirtyDaysMonth()){
        return false;
    }

}

//verificar se o mes tem 30 dias
function thirtyDaysMonth(){
    //meses com 30 dias
    if((month.value == 3 || month.value == 5 || month.value == 8|| month.value == 10) && day.value > 30){  
        return true;
    }
    return false;
}



setTimeout(() => {
    //Chama as 3 funções para popular os campos de data ao carregar a pagina
    //timeout pra carregar depois que o campo é criado
    //nao funciona quando volta na pagina
    populateDay(), populateYear(), populateMonth();
  }, "100")


function populateYear() {
    var year = document.getElementById("year");
    //-6 para gerar a data ate o ano atual -6, porem o usuario consegue passar com no minimo 5 anos
    var currentYear = (new Date()).getFullYear() - 6;
        for (var i = 1940; i <= currentYear; i++) {
            var option = document.createElement("option");
            option.innerHTML = i;
            option.value = i;
            year.appendChild(option);
        }
    };

    //Falta adicionar o 0 na frente dos números de dia/mes
    function populateDay() {
        var day = document.getElementById("day");
            for (var i = 01; i <= 31; i++) {
                var option = document.createElement("option");
                option.innerHTML = i;
                //opcao assume i+1 pois do outro jeito fica errado
                option.value = i;
                day.appendChild(option);
            }
        };

    function populateMonth() {
        var month = document.getElementById("month");
             for (var i = 01; i <= 12; i++) {
                var option = document.createElement("option");
                option.innerHTML = i;
                //Mes vai de 0 a 11, por isso a option é -1 o valor que exibe
                option.value = i-1;
                month.appendChild(option);
            }
        };

 