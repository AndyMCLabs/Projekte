//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - // 
/* Denke immer daran: Ein gut strukturierter Code mit klar benannten Funktionen und einer logischen Reihenfolge spart dir im Nachhinein viel Zeit und Nerven! */
//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //        

// 1. Global Variables
// Definiere hier globale Variablen, die im gesamten Code verwendet werden sollen.
// Diese sollten sparsam verwendet werden, um Konflikte zu vermeiden.
const randomButton = document.getElementById("beispiel-Button");
const buttonCode = document.getElementById("buttonCodeText");


// 2. Constants
// Definiere hier Konstanten (z.B. API-URLs, statische Werte, etc.), die im Code verwendet werden und sich nicht ändern sollen.


// 3. Utility Functions
// Schreibe hier wiederverwendbare Funktionen, die spezifische Aufgaben erfüllen, 
// wie z.B. das Formatieren von Daten, Validierungen oder ähnliche allgemeine Operationen.


// 4. Initialization Function
// Funktion, die bei Start des Programms oder bei Laden der Seite aufgerufen wird.
// Hier kann z.B. die Initialisierung von Variablen, das Laden von Daten oder das Einrichten von Event-Listenern stattfinden.


// 5. Main Functions
// Dies sind die Kernfunktionen des Programms.
// Jede Hauptfunktion sollte eine spezifische Aufgabe haben, um den Code sauber und verständlich zu halten.

function generateRandomButton() {
   console.log("Button wurde geklickt!");

   // Hintergrundfarbe
   const randomColorR = Math.floor(Math.random() * 256)
   const randomColorG = Math.floor(Math.random() * 256)
   const randomColorB = Math.floor(Math.random() * 256)
   const randomColor = `rgb(${randomColorR}, ${randomColorG}, ${randomColorB})`
   randomButton.style.backgroundColor = randomColor;

   // Breite des Buttons
   const randomWidth = Math.floor(Math.random() * (300 - 100) + 100);
   randomButton.style.width = `${randomWidth}px`;

   // Höhe des Buttons
   const randomHeight = Math.floor(Math.random() * (80 - 20) + 20);
   randomButton.style.height = `${randomHeight}px`;

   // Random Border Radius
   const randomBorderRadius = Math.floor(Math.random() * 50);
   randomButton.style.borderRadius = `${randomBorderRadius}px`;

   // Random Border
   const randomBorder = Math.floor(Math.random() * 5);
   const randomColorR2 = Math.floor(Math.random() * 256)
   const randomColorG2 = Math.floor(Math.random() * 256)
   const randomColorB2 = Math.floor(Math.random() * 256)
   const randomColor2 = `rgb(${randomColorR2}, ${randomColorG2}, ${randomColorB2})`
   randomButton.style.backgroundColor = randomColor;
   randomButton.style.border = `${randomBorder}px solid ${randomColor2}`;

   // Random Textfarbe
   const randomColorR3 = Math.floor(Math.random() * 256)
   const randomColorG3 = Math.floor(Math.random() * 256)
   const randomColorB3 = Math.floor(Math.random() * 256)
   const randomColor3 = `rgb(${randomColorR3}, ${randomColorG3}, ${randomColorB3})`
   randomButton.style.color = randomColor3;

   // Random Box Shadow
   const randomBoxShadow = Math.floor(Math.random() * 10);
   randomButton.style.boxShadow = `0 0 ${randomBoxShadow}px ${randomColor3}`;
   randomButton.style.textShadow = `0 0 ${randomBoxShadow}px ${randomColor3}`;

   // Random Fontfamily
   const randomFont = Math.floor(Math.random() * 5);
   if (randomFont === 0) {
      randomButton.style.fontFamily = "Arial";
   } else if (randomFont === 1) {
      randomButton.style.fontFamily = "Verdana";
   } else if (randomFont === 2) {
      randomButton.style.fontFamily = "Helvetica";
   } else if (randomFont === 3) {
      randomButton.style.fontFamily = "Times New Roman";
   } else if (randomFont === 4) {
      randomButton.style.fontFamily = "Courier New";
   }
   else {
      randomButton.style.fontFamily = "Georgia";
   }

   // Random Fontsize
   const randomFontSize = Math.floor(Math.random() * (15 - 10) + 10);
   randomButton.style.fontSize = `${randomFontSize}px`;

   // Ausgabe des Random-Button-Codes
   buttonCode.innerText = 
  `background-color: ${randomColor};\n` +
  `width: ${randomWidth}px;\n` +
  `height: ${randomHeight}px;\n` +
  `border-radius: ${randomBorderRadius}px;\n` +
  `border: ${randomBorder}px solid ${randomColor2};\n` +
  `color: ${randomColor3};\n` +
  `box-shadow: 0 0 ${randomBoxShadow}px ${randomColor3};\n` +
  `text-shadow: 0 0 ${randomBoxShadow}px ${randomColor3};\n` +
  `font-family: ${randomButton.style.fontFamily};\n` + 
  `font-size: ${randomFontSize}px`;
};

// 6. Event Listeners
// Definiere hier Event-Listener für DOM-Elemente wie Buttons, Formulare oder Links.
// Diese Listener lösen bestimmte Funktionen aus, wenn Nutzer mit der Seite interagieren.


// 7. API Calls
// Wenn deine Anwendung Daten von einer API abruft oder sendet, dann sind hier die Funktionen dafür.
// Diese können fetch() oder XMLHttpRequest verwenden, um HTTP-Requests zu verwalten.


// 8. Error Handling
// Funktionen für das Error-Handling und Logging.
// Hier kannst du Fehlermeldungen formatieren oder Nutzer über Probleme informieren.


// 9. DOM Manipulation
// Funktionen zur Manipulation der HTML-Elemente auf der Seite.
// Hier geht es um das Einfügen, Entfernen oder Ändern von DOM-Elementen.


// 10. Event-Driven Logic
// Logik, die auf bestimmten Nutzeraktionen basiert.
// Dies könnte Code sein, der als Reaktion auf Klicks, Eingaben oder andere Interaktionen ausgeführt wird.


// 11. Clean-Up Functions
// Funktionen zum Bereinigen des Codes oder der Anwendung (z.B. das Entfernen von Event-Listenern oder das Freigeben von Speicher).
// Diese sind nützlich, um den Speicherverbrauch zu minimieren und die Effizienz zu steigern.


// 12. Module Exports (wenn du mit Modulen arbeitest)
// Exportiere Funktionen oder Variablen hier, wenn du die Datei als Modul verwenden möchtest.


// 13. Run Code
// Hier kannst du die Initialisierungsfunktion und/oder Hauptfunktionen aufrufen, um das Programm zu starten.
