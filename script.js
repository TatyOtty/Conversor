const convertButton = document.querySelector('.convert-button')
const currencySelect = document.querySelector('.currency-select')

function convertValues() {
    const inputCurrencyValue = document.querySelector('.input-currency').value
    const currencyValueToConvert = document.querySelector('.currency-value-to-convert')
    const currencyValueConverted = document.querySelector('.currency-value')

    const dolarToday = 5.37
    const euroToday = 6.23
    const poundToday = 7.18
    const bitcoinToday = 513622.07


    if (currencySelect.value === "Dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(inputCurrencyValue / dolarToday)
    }

    if (currencySelect.value === "Euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'EUR'
        }).format(inputCurrencyValue / euroToday)
    }

    if (currencySelect.value === "Libra") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat('en-GB', {
            style: 'currency',
            currency: 'GBP'
        }).format(inputCurrencyValue / poundToday)
    }

    if (currencySelect.value === "Bitcoin") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'BTC'
        }).format(inputCurrencyValue / bitcoinToday)
    }

    currencyValueToConvert.innerHTML = new Intl.NumberFormat('pt-BR', { 
        style: 'currency',
        currency: 'BRL' 
    }).format(inputCurrencyValue)

}

function changeCurrency() {
    const currencyName = document.getElementById('currency-name')
    const currencyImg = document.querySelector('.currency-img')

    if (currencySelect.value === "Dolar") {
        currencyName.innerHTML = "Dólar"
        currencyImg.src = "./assents/dolar.png"
    }

    if (currencySelect.value === "Euro") {
        currencyName.innerHTML = "Euro"
        currencyImg.src = "./assents/euro.png"
    }

    if (currencySelect.value === "Libra") {
        currencyName.innerHTML = "Libra"
        currencyImg.src = "./assents/libra.png"
    }

    if (currencySelect.value === "Bitcoin") {
        currencyName.innerHTML = "Bitcoin"
        currencyImg.src = "./assents/bitcoin.png"
    }

    convertValues()
}

convertButton.addEventListener("click", convertValues)
currencySelect.addEventListener("change", changeCurrency)