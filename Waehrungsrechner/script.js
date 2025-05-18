const convertButton = document.getElementById('convertButton');
const amountInput = document.getElementById('amount');
const fromCurrencySelect = document.getElementById('fromCurrency');
const toCurrencySelect = document.getElementById('toCurrency');
const resultDisplay = document.getElementById('result');

const apiKey = 'ccc6c2b51883e00149023f1718b1f5a3'; // Ersetze DEIN_API_KEY durch deinen tatsächlichen API-Schlüssel
const apiUrl = 'https://api.exchangerate-api.com/v4/latest/'; // Beispiel-URL

// Funktion zum Abrufen der Wechselkurse
async function fetchExchangeRates(baseCurrency) {
    try {
        const response = await fetch(`${apiUrl}${baseCurrency}`);
        if (!response.ok) throw new Error('Netzwerk-Fehler beim Abrufen der Wechselkurse.');
        const data = await response.json();
        return data.rates; // Gibt die Wechselkurse zurück
    } catch (error) {
        console.error(error);
        alert('Fehler beim Abrufen der Wechselkurse. Bitte versuche es später erneut.');
    }
}

// Event Listener für den Umrechnungsbutton
convertButton.addEventListener('click', async () => {
    const amount = parseFloat(amountInput.value);
    const fromCurrency = fromCurrencySelect.value;
    const toCurrency = toCurrencySelect.value;

    if (isNaN(amount) || amount <= 0) {
        alert('Bitte gib einen gültigen Betrag ein.');
        return;
    }

    // Abrufen der Wechselkurse
    const rates = await fetchExchangeRates(fromCurrency);
    if (rates) {
        const convertedAmount = (amount * rates[toCurrency]).toFixed(2);
        resultDisplay.innerText = `${amount} ${fromCurrency} entsprechen ${convertedAmount} ${toCurrency}.`;
    }
});
