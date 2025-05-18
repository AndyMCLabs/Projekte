// Buttons
const checkButtonEl = document.getElementById("checkButton");
const inputTextEl = document.getElementById("inputText");
const ergebnisEl = document.getElementById("ergebnis");
const resetButtonEl = document.getElementById("resetButton");
checkButtonEl.disabled = true; // Button deaktivieren

// Button aktivieren
inputTextEl.addEventListener("input", () => {
    checkButtonEl.disabled = false;

    // Kontrolle, ob Iputfeld leer ist
    if (inputTextEl.value === "") {
        ergebnisEl.innerText = "Bitte Text eingeben!";
    };
});

// Listener
checkButtonEl.addEventListener("click", () => {
    ausgabeInput();
});

// Funktion, Text umwandeln, prüfen, Ergebnis
function ausgabeInput() {
    let ausgabe = inputTextEl.value; // Hole Text aus Eingabefeld uns speichere in Variable
    ausgabe = ausgabe.replace(/\s+/g, ''); // Entferne Leerzeichen
    ausgabe = ausgabe.toLowerCase(); // Umwandeln in Kleinbuchstaben

    let reverseText = ausgabe.split('').reverse().join(''); // Text umkehren

    // Ausgabe Ergebnis
    if (ausgabe === reverseText) {
        ergebnisEl.innerText = "Das ist ein Palindrom!";
        ergebnisEl.style.backgroundColor = "#1A070E";
        ergebnisEl.style.color = "#48EC09";
    } else {
        ergebnisEl.innerText = "Das ist kein Palindrom!";
        ergebnisEl.style.backgroundColor = "#1A070E";
        ergebnisEl.style.color = "#EC4A29";
    }
    automaticReset();
};

// Reset Button
resetButtonEl.addEventListener("click", () => {
    inputTextEl.value = "";
    ergebnisEl.innerText = "Bitte Text eingeben!";
    ergebnisEl.style.backgroundColor = "";
    ergebnisEl.style.color = "";
});

// Automatischer Reset
function automaticReset() {
    setTimeout(() => {
        inputTextEl.value = "";
        ergebnisEl.innerText = "Bitte Text eingeben!";
        ergebnisEl.style.backgroundColor = "";
        ergebnisEl.style.color = "";
    }, 5000)
};

/*
Danke, dass du deinen JavaScript-Code geteilt hast! Hier ist mein Feedback und die Bewertung:

### **Feedback zum JavaScript-Code**

1. **Logik und Struktur (Note: 1)**
   - Die Struktur des Codes ist gut organisiert, mit klaren Funktionen und Event-Listenern. Das macht den Code leicht verständlich und wartbar.
   - Die Verwendung von Funktionen wie `ausgabeInput()` und `automaticReset()` ist eine gute Praxis, um den Code modular zu halten.

2. **Interaktivität (Note: 1)**
   - Die Deaktivierung des „Prüfen“-Buttons, bis der Benutzer Text eingibt, ist eine ausgezeichnete Benutzerführung. Das verbessert die Benutzererfahrung erheblich.
   - Die Logik zur Überprüfung, ob der Text ein Palindrom ist, funktioniert einwandfrei und ist klar implementiert.

3. **Eingabeverarbeitung (Note: 1)**
   - Die Eingabeverarbeitung, einschließlich der Entfernung von Leerzeichen und der Umwandlung in Kleinbuchstaben, ist gut umgesetzt und sorgt dafür, dass die Überprüfung zuverlässig ist.
   - Die Umkehrung des Textes mit `split()`, `reverse()` und `join()` ist eine effektive Methode, um das Palindrom zu überprüfen.

4. **Fehlerbehandlung und Benutzerfeedback (Note: 1)**
   - Die Ausgabe von Ergebnissen und die Verwendung von Farben zur Unterscheidung zwischen positiven und negativen Ergebnissen sind gut gemacht. Das gibt dem Benutzer eine klare Rückmeldung.
   - Die automatische Rücksetzung ist eine interessante Idee, auch wenn sie etwas unkonventionell ist. Es könnte hilfreich sein, dem Benutzer auch eine Option zum Deaktivieren dieser Funktion zu bieten.

5. **Lesbarkeit und Kommentare (Note: 1)**
   - Der Code enthält hilfreiche Kommentare, die die Funktionsweise der verschiedenen Abschnitte erklären. Das macht es einfacher, den Code nachzuvollziehen.

### **Gesamtbewertung für JavaScript: 1**
Dein JavaScript-Code ist klar strukturiert, gut organisiert und interaktiv. Du hast viele gute Praktiken umgesetzt, die zu einer positiven Benutzererfahrung beitragen.

### **Zusammenfassung der Gesamtbewertung**
- **HTML:** 1
- **CSS:** 1
- **JavaScript:** 1

### **Gesamtnote: 1**
Herzlichen Glückwunsch! Du hast ein großartiges Projekt erstellt. Du hast die Konzepte gut verstanden und umgesetzt. Wenn du noch weitere Projekte oder Ideen hast, an denen du arbeiten möchtest, lass es mich wissen!
*/