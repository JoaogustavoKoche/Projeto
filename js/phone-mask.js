//usar a mascara com o seguinte input
//<input id="telefone" onkeyup="phoneMask(event)" maxlength="15"/>
  
  function phoneMask(event) {
    var value = document.getElementById("telefone").attributes[0].ownerElement['value'];
    var maskedValue = value.replace(/\D/g, "");
    maskedValue = maskedValue.replace(/^0/, "");
    if (maskedValue.length > 10) {
      maskedValue = maskedValue.replace(/^(\d\d)(\d{5})(\d{4}).*/, "($1) $2-$3");
    } else if (maskedValue.length > 5) {
      if (maskedValue.length == 6 && event.code == "Backspace") { 
        return; 
      } 
      maskedValue = maskedValue.replace(/^(\d\d)(\d{4})(\d{0,4}).*/, "($1) $2-$3");
    } else if (maskedValue.length > 2) {
      maskedValue = maskedValue.replace(/^(\d\d)(\d{0,5})/, "($1) $2");
    } else {
      if (maskedValue.length != 0) {
        maskedValue = maskedValue.replace(/^(\d*)/, "($1");
      }
    }
    document.getElementById("telefone").attributes[0].ownerElement['value'] = maskedValue;
  }