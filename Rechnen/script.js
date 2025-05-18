// HTML Elemente
const zahl1El = document.getElementById("zahl1");
const zahl2El = document.getElementById("zahl2");
const operatorEl = document.getElementById("operator");
const ergebnisInput = document.getElementById("ergebnis");
const feedbackEl = document.getElementById("feedback-title");
const pruefeBtn = document.getElementById("pruefe");
const btnGenerate = document.getElementById("generateRechnung");
let result;
let richtigeErgebnisse = 0;

// Funktion generiere Zufallszahl
function generiereZahl() {
    return Math.floor(Math.random() * 1000);
};

// Funktion generiere Zufallsoperator
function generiereOperator() {
    let operator = Math.random();

    if (operator < 0.5) {
        operator = "-";
    } else {
        operator = "+";
    };
    return operator;
}

// Aktualisiere UI
function aktualisiereUI(zahl1, operator, zahl2) {
    feedbackEl.innerText = "";
    zahl1El.innerText = zahl1;
    operatorEl.innerText = operator;
    zahl2El.innerText = zahl2;
};


// Berechnung durchführen
function berechneErgebnis(zahl1, operator, zahl2) {
    if (operator === "-") {
        return zahl1 - zahl2;
    } else if (operator === "+") {
        return zahl1 + zahl2;
    };
}

// Rechnung erstellen
function rechnungErstellen() {
    let zahl1 = generiereZahl();
    let zahl2 = generiereZahl();
    let operator = generiereOperator();

    aktualisiereUI(zahl1, operator, zahl2);
    result = berechneErgebnis(zahl1, operator, zahl2);
}

// Listener Nächste Rechnung
btnGenerate.addEventListener("click", () => {
    ergebnisInput.value = "";
    feedbackEl.innerText = "";
    rechnungErstellen()
});

// Listener Prüfe Ergebnis
pruefeBtn.addEventListener("click", () => {
    const ergebnisInputValue = parseInt(ergebnisInput.value);

    console.log(result); // Ergebnis in der Konsole

    if (isNaN(ergebnisInputValue)) { // Ausgabe, wenn kein Ergebnis eingegeben wurde.
        feedbackEl.innerText = "Gib bitte ein Ergebnis ein!"
    } else if (result === ergebnisInputValue) {
        richtigeErgebnisse++;
        feedbackEl.innerText = `Super! Das war richtig. Das ist deine ${richtigeErgebnisse}. korrekte Lösung`
    } else {
        feedbackEl.innerText = `Schade! Das war leider falsch. Das richtige Ergebnis lautet ${result}.`
    }
});


