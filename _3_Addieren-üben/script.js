// HTML-Elemente
const firstNumberElement = document.getElementById("zahl1");
const secondNumberElement = document.getElementById("zahl2");
const userResultInput = document.getElementById("userResult");
const checkResultButton = document.getElementById("checkResult");
const resultMessage = document.getElementById("resultMessage");
const userLevelDisplay = document.getElementById("userLevel");
const applauseSound = document.getElementById("applause");
const levelUpSound = document.getElementById("levelUp");
const wrongSound = document.getElementById("wrong");
let progressBar = document.getElementById("progressBar");

let progressValue = 0; // Fortschrittswert der Fortschrittsleiste
let userPoints = 0;    // Punkte des Benutzers für das aktuelle Level
let userLevel = 1;     // Startlevel des Benutzers

// Initialisiert die ersten Zufallszahlen für die Berechnung
setRandomNumbers();

// Generiert eine Zufallszahl zwischen 0 und 99
function getRandomNumber() {
    return Math.floor(Math.random() * 100);
}

// Setzt neue Zufallszahlen für die Berechnung
function setRandomNumbers() {
    firstNumberElement.textContent = getRandomNumber();
    secondNumberElement.textContent = getRandomNumber();
}

// Setzt Eingabefeld und Ergebnisanzeige zurück und generiert nach einer kurzen Pause neue Zahlen
function resetCalculation() {
    setTimeout(() => {
        userResultInput.value = "";
        resultMessage.style.color = "";
        resultMessage.textContent = "- - -";
        setRandomNumbers();
    }, 2500);  
}

// Überprüft das Benutzerergebnis, aktualisiert Fortschritt und Level
function validateResult() {
    const firstNumber = parseInt(firstNumberElement.textContent);
    const secondNumber = parseInt(secondNumberElement.textContent);
    const userAnswer = parseInt(userResultInput.value);

    if (userAnswer === firstNumber + secondNumber) { // Korrekte Antwort
        resultMessage.textContent = "Richtig!";
        applauseSound.play();
        userPoints++;
        incrementProgressBar();
    } else { // Falsche Antwort
        resultMessage.style.color = "red";
        resultMessage.textContent = "Falsch!";
        wrongSound.play();
        decrementProgressBar();
    }

    resetCalculation();
    updateUserLevel();
}

// Prüft, ob der Benutzer aufgestuft werden sollte, und aktualisiert das Level
function updateUserLevel() {
    if (userPoints >= 5) { // Benutzer erreicht neues Level
        userLevel++;
        levelUpSound.play();
        resetProgressAndPoints();
        userLevelDisplay.textContent = `Level ${userLevel}`;
    }
}

// Erhöht den Fortschrittsbalken bei richtiger Antwort
function incrementProgressBar() {
    progressValue += 20;
    progressBar.value = progressValue;
}

// Verringert den Fortschrittsbalken bei falscher Antwort
function decrementProgressBar() {
    progressValue -= 20;
    progressBar.value = progressValue;
}

// Setzt Fortschritt und Punkte zurück, wenn ein neues Level erreicht wird
function resetProgressAndPoints() {
    userPoints = 0;
    progressValue = 0;
    progressBar.value = progressValue;
}

// Event-Listener für den Klick auf den "Ergebnis prüfen"-Button
checkResultButton.addEventListener("click", validateResult);
