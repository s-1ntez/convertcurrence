document.addEventListener("DOMContentLoaded", function() {
  const convertButton = document.getElementById("convert-button");
  const resultDiv = document.getElementById("result");
  
  convertButton.addEventListener("click", function() {
    const amount = parseFloat(document.getElementById("amount").value);
    const fromCurrency = document.getElementById("from-currency").value;
    const toCurrency = document.getElementById("to-currency").value;
    
    const convertedAmount = convertCurrency(amount, fromCurrency, toCurrency);
    
    resultDiv.textContent = `${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`;
  });
  
  function convertCurrency(amount, fromCurrency, toCurrency) {
    if (fromCurrency === "UAH" && toCurrency === "USD") {
        return amount * 0.036; // Примерный курс гривны к доллару
    } else if (fromCurrency === "USD" && toCurrency === "UAH") {
        return amount * 27.65; // Примерный курс доллара к гривне
    } else {
        return "Курсы обмена не определены";
    }
  }
});