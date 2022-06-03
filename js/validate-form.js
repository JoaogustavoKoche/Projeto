function validateForm(){
        getDate();
        isDateValid();
        validateCheckbox();
        validateEmail();
        validateName();

        //chama a variavel em validate-age pra ver se ela é verdadeira e então redirecionar
        //não deveria ser assim mas o script ficou meio torto
        if(dateOk){     
        window.location.href = "second-page.html";
      }  
}


        
