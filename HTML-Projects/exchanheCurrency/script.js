let apiKey = "YOUR_API_KEY";

let api = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`;

const fromDropDown = document.getElementById("fromCurrency");
const toDropDown = document.getElementById("toCurrency");

currencies.forEach(currency => {
    const option = document.createElement("option");
    option.value = currency;
    option.text = currency;
    fromDropDown.add(option);
});
currencies.forEach(currency => {
    const option = document.createElement("option");
    option.value = currency;
    option.text = currency;
    toDropDown.add(option);
});

fromDropDown.value = "USD";
toDropDown.value = "TRY";

let convertCurrency = () => {
    const amountInput = document.getElementById("amount");
    const amount = parseFloat(amountInput.value);

    if (!isNaN(amount) && amount >= 0) {
        const fromCurrency = fromDropDown.value;
        const toCurrency = toDropDown.value;

        fetch(api)
            .then((response) => response.json())
            .then((data) => {
                let fromExchangeRate = data.conversion_rates[fromCurrency];
                let toExchangeRate = data.conversion_rates[toCurrency];
                const convertedAmount = (amount / fromExchangeRate) * toExchangeRate;
                result.innerHTML = `${amount} ${fromCurrency} = ${convertedAmount.toFixed(2)} ${toCurrency}`;
            });
    } else {
        alert("Please enter a valid positive number for the amount.");
        amountInput.value = ''; // Clear the input field
    }
};

document.querySelector("#convert-button").addEventListener("click", convertCurrency);
window.addEventListener("load", convertCurrency);
