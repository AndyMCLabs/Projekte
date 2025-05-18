const wuerfelnBtn = document.getElementById("wuerfeln");

// Zufallszahl generieren (1-6)
function randomNumber() {
    return Math.floor(Math.random() * 6) + 1;
}

// Würfelpunkte anzeigen
function showDice(number) {
    const dice = document.getElementById("dice");
    // Vorherige Punkte entfernen
    dice.innerHTML = ''; 

    const dotPositions = {
        1: [4],
        2: [0, 8],
        3: [0, 4, 8],
        4: [0, 2, 6, 8],
        5: [0, 2, 4, 6, 8],
        6: [0, 2, 3, 5, 6, 8],
    };

    // Punkte für das gewürfelte Ergebnis hinzufügen
    dotPositions[number].forEach(position => {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        
        // Berechne die Position im Grid
        const row = Math.floor(position / 3) + 1;
        const col = (position % 3) + 1;
        dot.style.gridRowStart = row;
        dot.style.gridColumnStart = col;

        dice.appendChild(dot);
    });
}

// Funktion zum Simulieren des Würfels
function rollDice() {
    const dice = document.getElementById('dice');
    let currentRoll = 1;

    // Startet das Würfeln (Punkte wechseln schnell)
    const interval = setInterval(() => {
        currentRoll = randomNumber(); // Zufällige Zahl
        showDice(currentRoll); // Zeige zufällige Punkte
        dice.style.animation = 'rotate 0.5s linear';
    }, 100); // Punkte wechseln alle 100 Millisekunden

    // Nach 2 Sekunden stoppt das Würfeln und zeigt das endgültige Ergebnis
    setTimeout(() => {
        clearInterval(interval); // Stoppt das schnelle Wechseln der Punkte
        dice.style.animation = ''; // Beendet die Animation
        const finalRoll = randomNumber(); // Endgültige Zahl
        showDice(finalRoll); // Zeige die endgültigen Punkte
    }, 2000); // Animation dauert 2 Sekunden
}

// Button drücken
wuerfelnBtn.addEventListener("click", function() {
    rollDice();
    wuerfelnBtn.disabled = true;
    wuerfelnBtn.style.backgroundColor = "grey";
    setTimeout(() => {
    wuerfelnBtn.disabled = false;
    wuerfelnBtn.style.backgroundColor = "";
    }, 2500);
});

const rollButton = document.getElementById('rollButton'); // Dein Wurf-Button
const resultDisplay = document.getElementById('resultDisplay'); // Anzeige für die Ergebnisse
const historyDisplay = document.getElementById('historyDisplay'); // Anzeige für die Historie
const numDiceInput = document.getElementById('numDice'); // Eingabefeld für die Anzahl der Würfel
let history = []; // Array für die Historie der Würfe

rollButton.addEventListener('click', () => {
    const numDice = parseInt(numDiceInput.value); // Anzahl der Würfel
    let results = []; // Array für die aktuellen Würfelergebnisse

    // Schleife zum Würfeln
    for (let i = 0; i < numDice; i++) {
        const roll = Math.floor(Math.random() * 6) + 1; // Würfeln (Zahl zwischen 1 und 6)
        results.push(roll); // Ergebnis speichern
    }

    resultDisplay.textContent = `Wurf Ergebnisse: ${results.join(', ')}`; // Ergebnisse anzeigen

    // Letzte Zahl speichern (optional)
    const lastRoll = results[results.length - 1]; // Letzte geworfene Zahl
    // ... (Code für die Speicherung und Anzeige der letzten Zahl)

    // Historie aktualisieren
    history.push(results); // Aktuelles Ergebnis zur Historie hinzufügen
    updateHistoryDisplay(); // Historie anzeigen
});

function updateHistoryDisplay() {
    historyDisplay.innerHTML = ''; // Vorherige Historie löschen
    history.forEach((rolls, index) => {
        const li = document.createElement('li'); // Neues Listenelement erstellen
        li.textContent = `Wurf ${index + 1}: ${rolls.join(', ')}`; // Text hinzufügen
        historyDisplay.appendChild(li); // Element zur Anzeige hinzufügen
    });
}

/*
Danke, dass du den vollständigen Code geteilt hast! Hier ist meine Bewertung in den drei Bereichen und die Gesamtpunktzahl:

### 1. **HTML-Bewertung**: **Note 1 (Sehr gut)**
   - **Struktur**: Deine HTML-Struktur ist klar und ordentlich. Die Semantik ist gut gewählt, und die Verlinkung zu CSS und JavaScript ist korrekt eingebunden.
   - **Verbesserungspotenzial**: Keine wesentlichen Änderungen nötig.

### 2. **CSS-Bewertung**: **Note 2 (Gut)**
   - **Layout und Design**: Die Farben und der Aufbau sind angenehm. Der Button hat ein gutes Hover-Verhalten, und der Würfel ist gut umgesetzt.
   - **Verbesserungspotenzial**: Es wäre schön, wenn du etwas detailliertere Styles wie Animationen für den Würfelwurf oder eine bessere Hervorhebung des Würfels je nach Ergebnis hättest.

### 3. **JavaScript-Bewertung**: **Note 2 (Gut)**
   - **Funktionalität**: Das Würfeln und die Anzeige der Punkte funktioniert einwandfrei. Auch die Timer-Funktion für das Würfeln ist gut eingebaut.
   - **Verbesserungspotenzial**:
     - Einige Teile des Codes könnten optimiert werden, wie die Animation der Würfelpunkte. Die Verwendung von `setInterval` ist gut, aber du könntest mehr visuelle Effekte hinzufügen, um das Spielerlebnis weiter zu verbessern.
     - Der zweite Abschnitt des Codes (mit der Historie und der Anzahl der Würfel) scheint momentan nicht vollständig integriert zu sein. Wenn du das noch in den bestehenden Ablauf einbindest, wäre das ein Plus.

### **Gesamtpunktzahl: 85/100**

**Zusammenfassung**: Dein Projekt ist sehr gut gelungen! Die HTML-Struktur und die grundlegende Funktionalität in JavaScript funktionieren hervorragend. Es gibt kleinere Verbesserungsmöglichkeiten im Design und bei der Implementierung der zusätzlichen Features wie der Historie und der Würfelanzahl, um das Projekt noch weiter abzurunden. Insgesamt machst du große Fortschritte!
*/
