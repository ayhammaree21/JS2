function convertCurrency() {
  
    var amount = parseFloat(document.querySelector(".amount").value);

    if (isNaN(amount) || amount === "") {
        alert("Please enter a valid number");
        return;
    }

    var fromCurrency = document.querySelector(".fromCurrency").value;
    var toCurrency = document.querySelector(".toCurrency").value;

   
    if (fromCurrency === toCurrency) {
        alert("Please choose different currencies");
        return;
    }

   
    var conversionRates = {
        USD: { NIS: 3.72, JOD: 0.71 },
        JOD: { NIS: 5.08, USD: 1.41 },
        NIS: { USD: 0.31, JOD: 0.22 }
    };


    var conversionRate = conversionRates[fromCurrency][toCurrency];


    var result = amount * conversionRate;


    var resultElement = document.querySelector(".result");
    resultElement.textContent = amount + " " + fromCurrency + " is approximately " + result.toFixed(2) + " " + toCurrency;
}

document.addEventListener("DOMContentLoaded", function () {
    var convertButton = document.querySelector("button");
    convertButton.addEventListener("click", convertCurrency);
});


