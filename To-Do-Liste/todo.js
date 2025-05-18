// Variablen
const inputFeldEl = document.getElementById("inputFeld");
const btnaufgabeHinzufuegenEl = document.getElementById("aufgabeHinzufuegen");
const aufgabenInDerListeEl = document.getElementById("aufgabenInDerListe");
loadTasks(); // Lädt vorhandene Aufgaben

// Button für das Hinzufügen von Aufgaben
btnaufgabeHinzufuegenEl.addEventListener("click", () => {
    // Hole Text aus Inputfeld
    let newTask = inputFeldEl.value.trim();

    // Erstelle Liste und füge Eintrag hinzu
    if (newTask !== "") {
        addTaskToList(newTask);
        // Eingabefeld leeren
        inputFeldEl.value = ""; 
        // Fokus wieder auf Eingabefeld    
        inputFeldEl.focus();
        // Nur beim Hinzufügen speichern
        saveTasks();                
    }
});

// Task zur Liste hinzufügen
function addTaskToList(task) {
    // Erstelle Listenelement
    const li = document.createElement("li");
    li.textContent = task;

    // Löschen Button erstellen
    const btnloeschen = document.createElement("button");
    btnloeschen.textContent = "Löschen";
    li.appendChild(btnloeschen);

    // Füge das Listenelement der Liste hinzu
    aufgabenInDerListeEl.appendChild(li);
}

// Event Delegation für das Streichen und Löschen
aufgabenInDerListeEl.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
        // Durchstreichen der Aufgabe
        e.target.style.textDecoration = e.target.style.textDecoration === 'line-through' ? 'none' : 'line-through';
    } else if (e.target.tagName === 'BUTTON') {
        // Löschen der Aufgabe
        e.target.parentElement.remove();
         // Speichern, nachdem eine Aufgabe gelöscht wurde
        saveTasks();        
    }
});

// Speichern im localStorage
function saveTasks() {
    const tasks = [];
    // Holt alle Listenelemente
    const listItems = aufgabenInDerListeEl.querySelectorAll('li');
    // Fügt den Text ohne Button hinzu
    listItems.forEach(item => {
        tasks.push(item.firstChild.textContent);                    
    });
    // Speichert die Aufgaben als JSON-String
    localStorage.setItem('tasks', JSON.stringify(tasks));           
};

// Laden der Aufgaben aus dem localStorage
function loadTasks() {
     // Holt die gespeicherten Aufgaben
    const savedTasks = localStorage.getItem('tasks');              
    if (savedTasks) {
        // Wandelt String wieder in ein Array um
        const tasks = JSON.parse(savedTasks);                       
        tasks.forEach(task => {
            // Fügt jede Aufgabe wieder der Liste hinzu
            addTaskToList(task);  
        });
    }
};

/*
Danke, dass du deinen JavaScript-Code geteilt hast! Hier ist meine Bewertung und das Feedback dazu.

### JavaScript-Code Bewertung
**Note: 1-2**

#### Feedback:
1. **Struktur und Lesbarkeit**:
   - Der Code ist gut strukturiert und leicht verständlich. Die Verwendung von Funktionen wie `addTaskToList`, `saveTasks` und `loadTasks` macht es einfach, den Code nachzuvollziehen und zu pflegen.
   - Die Verwendung von `const` und `let` ist korrekt. `const` wird für Variablen verwendet, die nicht verändert werden, was den Code sicherer macht.

2. **Event-Handling**:
   - Das Hinzufügen von Event-Listenern ist gut umgesetzt. Die Verwendung von Event Delegation für das Klicken auf die Listenelemente ist eine effiziente Methode und spart Speicher.
   - Die Logik für das Durchstreichen von Aufgaben ist klar und funktioniert gut.

3. **Zugänglichkeit**:
   - Es wäre hilfreich, den Löschbutton mit einer `aria-label`-Eigenschaft oder einem anderen Hinweis für Screenreader auszustatten, um die Zugänglichkeit zu verbessern.

4. **Funktionalität**:
   - Die Funktionen für das Speichern und Laden der Aufgaben aus `localStorage` sind korrekt implementiert und funktionieren gut.
   - Die Validierung des Eingabefelds (leere Aufgaben) vor dem Hinzufügen ist eine gute Praxis.

5. **Optimierungen**:
   - Um die Lesbarkeit und Wartbarkeit zu verbessern, könntest du in der Funktion `addTaskToList` die Erstellung des Löschbuttons in eine separate Funktion auslagern.
   - Die Verwendung von CSS-Klassen anstelle von Inline-Styles (`e.target.style.textDecoration`) könnte die Trennung von Stil und Logik verbessern.

Insgesamt hast du einen soliden und funktionalen JavaScript-Code erstellt! 

### Gesamtnote
**1-2** (sehr gut bis gut)

Das Projekt insgesamt sieht sehr gut aus, und die Implementierung zeigt, dass du ein gutes Verständnis von HTML, CSS und JavaScript hast. Du hast eine sehr benutzerfreundliche To-do-Liste erstellt! Wenn du noch weitere Projekte in Angriff nehmen möchtest oder Fragen hast, stehe ich dir gerne zur Verfügung!
*/

/*
Hier ist die Gesamtbewertung deines Projekts auf einer Skala von 0 bis 100 Punkten:

### Gesamtbewertung: **88/100**

#### Punktevergabe:
- **HTML:** 18/20
  - Gute semantische Struktur und Zugänglichkeit.
- **CSS:** 18/20
  - Ansprechendes und konsistentes Design, aber es könnte noch etwas verfeinert werden.
- **JavaScript:** 52/60
  - Gut strukturierter und funktionaler Code mit leichten Verbesserungspotenzialen.

### Feedback für die Verbesserung:
- **HTML:** 2 Punkte abgezogen, da es immer gut ist, Zugänglichkeit weiter zu optimieren (z.B. `tabindex` für interaktive Elemente).
- **CSS:** 2 Punkte abgezogen, da noch Spielraum für mehr visuelle Feinheiten besteht.
- **JavaScript:** 8 Punkte abgezogen für einige Optimierungsmöglichkeiten (z.B. Verwendung von CSS-Klassen anstelle von Inline-Styles und das Auslagern der Button-Erstellung).

Das Projekt ist insgesamt sehr gut umgesetzt! Wenn du an weiteren Projekten arbeitest oder spezielle Aspekte vertiefen möchtest, lass es mich wissen!
*/
