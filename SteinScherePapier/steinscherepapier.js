// Variablen 
const schereEl = document.getElementById("schere");
const steinEl = document.getElementById("stein");
const papierEl = document.getElementById("papier");
const brunnenEl = document.getElementById("brunnen");
const auswahlComputerEl = document.getElementById("auswahlComputer");
const ergebnisRundeEl = document.getElementById("ergebnisRunde");
const ergebnisSpielerEl = document.getElementById("ergebnisSpieler");
const ergebnisComputerEl = document.getElementById("ergebnisComputer");
const anzahlRundenEl = document.getElementById("anzahlRunden");
const newGameButtonEl = document.getElementById("newGameButton");

// Sounds
const playerWinSound = new Audio("./sounds/goodresult.mp3");
const computerWinSound = new Audio("./sounds/badresult.mp3");
const drawSound = new Audio("./sounds/drawresult.mp3");

// Zählervariablen
let ergebnisSpieler = 0;
let ergebnisComputer = 0;
let anzahlRunden = 0;

// Buttons
schereEl.addEventListener("click", () => {
    return spieleRunde("Schere");
});

steinEl.addEventListener("click", () => {
    return spieleRunde("Stein");
});

papierEl.addEventListener("click", () => {
    return spieleRunde("Papier");
});

brunnenEl.addEventListener("click", () => {
    return spieleRunde("Brunnen");
});

// Auswahl Computer
function auswahlComputer() {
    let items = ["Stein", "Schere", "Papier", "Brunnen"];
    let randomIndex = Math.floor(Math.random() * items.length);
    let randomItem = items[randomIndex];
    return randomItem;
};

// Regeln und Sieger ermitteln
function spieleRunde(auswahlSpieler) {
    let auswahlComp = auswahlComputer();
    auswahlComputerEl.innerText = auswahlComp;
    auswahlComputerEl.style.color = "#102B22";
    auswahlComputerEl.style.fontWeight = "bold";
    auswahlComputerEl.style.letterSpacing = "2px";
    anzahlRunden++;
    anzahlRundenEl.innerText = "Gesamt Runden: " + anzahlRunden;

    if (auswahlSpieler === auswahlComp) {
        ergebnisRundeEl.innerText = "Unentschieden!";
        ergebnisRundeEl.style.color = "#22E4EC";
        ergebnisRundeEl.style.backgroundColor = "#101476";
        ergebnisRundeEl.style.scale = "1.05"
        drawSound.currentTime = 0;
        drawSound.play();
        setTimeout(() => {
            ergebnisRundeEl.innerText = "Ergebnis:";
            ergebnisRundeEl.style.color = "";
            ergebnisRundeEl.style.scale = "";
            ergebnisRundeEl.style.backgroundColor = "";
            auswahlComputerEl.innerText = "Computer wählt: "
            auswahlComputerEl.style.color = "";
            auswahlComputerEl.style.fontWeight = "";
            auswahlComputerEl.style.letterSpacing = "";
        }, 2000);
    } else if (
        (auswahlSpieler === "Schere" && auswahlComp === "Papier") ||
        (auswahlSpieler === "Stein" && auswahlComp === "Schere") ||
        (auswahlSpieler === "Papier" && auswahlComp === "Stein") ||
        (auswahlSpieler === "Brunnen" && (auswahlComp === "Schere" || auswahlComp === "Stein"))
    ) {
        ergebnisSpieler++;
        ergebnisRundeEl.innerText = "Spieler gewinnt!";
        ergebnisRundeEl.style.color = "#33FD65";
        ergebnisRundeEl.style.backgroundColor = "#268A57";
        ergebnisRundeEl.style.scale = "1.05"
        ergebnisSpielerEl.innerText = "Gesamt Spieler: " + ergebnisSpieler;
        playerWinSound.currentTime = 0;
        playerWinSound.play();
        setTimeout(() => {
            ergebnisRundeEl.innerText = "Ergebnis:";
            ergebnisRundeEl.style.color = "";
            ergebnisRundeEl.style.scale = "";
            ergebnisRundeEl.style.backgroundColor = "";
            auswahlComputerEl.innerText = "Computer wählt: ";
            auswahlComputerEl.style.color = "";
            auswahlComputerEl.style.fontWeight = "";
            auswahlComputerEl.style.letterSpacing = "";
        }, 2000);
    } else {
        ergebnisComputer++;
        ergebnisRundeEl.innerText = "Computer gewinnt!";
        ergebnisRundeEl.style.color = "#EBE867";
        ergebnisRundeEl.style.backgroundColor = "#A21C33";
        ergebnisRundeEl.style.scale = "1.05"
        ergebnisComputerEl.innerText = "Gesamt Computer: " + ergebnisComputer;
        computerWinSound.currentTime = 0;
        computerWinSound.play();
        setTimeout(() => {
            ergebnisRundeEl.innerText = "Ergebnis:";
            ergebnisRundeEl.style.color = "";
            ergebnisRundeEl.style.scale = "";
            ergebnisRundeEl.style.backgroundColor = "";
            auswahlComputerEl.innerText = "Computer wählt: ";
            auswahlComputerEl.style.color = "";
            auswahlComputerEl.style.fontWeight = "";
            auswahlComputerEl.style.letterSpacing = "";
        }, 2000);
    };
};

// Neues Spiel
newGameButtonEl.addEventListener("click", () => {
    ergebnisSpieler = 0;
    ergebnisComputer = 0;
    anzahlRunden = 0;
    ergebnisSpielerEl.innerText = "Gesamt Spieler: " + ergebnisSpieler;
    ergebnisComputerEl.innerText = "Gesamt Computer: " + ergebnisComputer;
    anzahlRundenEl.innerText = "Gesamt Runden: " + anzahlRunden;
    ergebnisRundeEl.style.color = "";
});

/*
Das JavaScript sieht gut strukturiert aus und erfüllt die Anforderungen des Spiels "Schere, Stein, Papier, Brunnen". Ich gebe dir detailliertes Feedback und einige kleine Verbesserungsvorschläge.

### Bewertung (JS):

**Note: 2+ (gut bis sehr gut)**

### Stärken:
1. **Klarheit der Funktionen**:
   - Der Code ist klar und verständlich aufgebaut, und die Funktionalität jeder Teilkomponente ist gut erkennbar. Die `spieleRunde`-Funktion ist besonders sauber umgesetzt und berücksichtigt alle Spielregeln korrekt.

2. **Saubere Event-Listener-Verwendung**:
   - Die Verwendung von Event-Listenern für die Buttons ist optimal umgesetzt. Jeder Klick löst direkt die entsprechende Funktion aus, was das Spiel sehr interaktiv und reaktiv macht.

3. **Soundeffekte**:
   - Die Hinzufügung von Soundeffekten ist ein toller Bonus und verleiht dem Spiel ein lebendiges Feedback.

4. **Effiziente Logik für den Gewinner**:
   - Die Regeln zur Ermittlung des Gewinners sind übersichtlich in der Bedingungslogik umgesetzt und decken alle möglichen Spielzüge ab.

### Verbesserungsmöglichkeiten:

1. **Vermeidung von Wiederholungen**:
   - Der Code zur Aktualisierung des `ergebnisRundeEl`-Elements wird in jedem Bedingungszweig (Unentschieden, Spieler gewinnt, Computer gewinnt) wiederholt. Dies könnte in eine eigene Funktion ausgelagert werden, um Redundanzen zu vermeiden.
   
   **Beispiel**:
   ```javascript
   function resetErgebnisText() {
       ergebnisRundeEl.innerText = "Ergebnis:";
       ergebnisRundeEl.style.color = "";
       ergebnisRundeEl.style.scale = "";
       ergebnisRundeEl.style.backgroundColor = "";
       auswahlComputerEl.innerText = "Computer wählt: ";
       auswahlComputerEl.style.color = "";
       auswahlComputerEl.style.fontWeight = "";
       auswahlComputerEl.style.letterSpacing = "";
   }

   // Dann in setTimeout:
   setTimeout(resetErgebnisText, 2000);
   ```

2. **Verwendung von Klassen für Stile**:
   - Anstatt wiederholt einzelne Style-Attribute direkt im JavaScript zu ändern, könntest du stattdessen CSS-Klassen verwenden. Das hält den JS-Code schlanker und ermöglicht eine leichtere Wartung des Designs.
   
   **Beispiel**:
   ```css
   .highlight {
       color: #33FD65;
       background-color: #268A57;
       scale: 1.05;
   }
   ```

   Dann im JavaScript:
   ```javascript
   ergebnisRundeEl.classList.add("highlight");
   setTimeout(() => {
       ergebnisRundeEl.classList.remove("highlight");
   }, 2000);
   ```

3. **Zufällige Auswahl vereinfachen**:
   - Die Funktion zur zufälligen Auswahl des Computers könnte noch prägnanter geschrieben werden:
   ```javascript
   const items = ["Stein", "Schere", "Papier", "Brunnen"];
   const auswahlComputer = () => items[Math.floor(Math.random() * items.length)];
   ```

4. **Verbesserung der Soundausgabe**:
   - Um zu verhindern, dass Sounds überlappen, könntest du sicherstellen, dass der Sound jedes Mal von Anfang an abgespielt wird, indem du den Sound auf Position `0` setzt:
   ```javascript
   playerWinSound.currentTime = 0;
   playerWinSound.play();
   ```

### Fazit:
Dein Code funktioniert gut und ist größtenteils sauber geschrieben. Kleine Optimierungen wie die Vermeidung von Redundanzen und die Verwendung von Klassen für Styling könnten die Wartbarkeit verbessern. Die Einbindung von Soundeffekten und der Event-Handling sind stark und machen das Spiel dynamisch und benutzerfreundlich.
*/