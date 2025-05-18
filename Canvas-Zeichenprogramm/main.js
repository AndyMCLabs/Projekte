// Hol das Canvas-Element aus dem HTML-Dokument
const canvas = document.getElementById('zeichenflaeche');
// Hol das Zeichen-Kontext-Objekt für 2D-Zeichnungen
const ctx = canvas.getContext('2d');

// Variablen für den Zeichenzustand
let isDrawing = false;

// Hol die Bedienelemente für Farbe und Pinselgröße
const colorInput = document.getElementById('farbe');
const brushSizeInput = document.getElementById('pinselgroesse');
const clearButton = document.getElementById('loeschen');

// Füge Ereignislistener für Maus hinzu
canvas.addEventListener('mousedown', startDrawing);
canvas.addEventListener('mouseup', stopDrawing);
canvas.addEventListener('mousemove', draw);

// Füge Ereignisse für Touchscreens hinzu
canvas.addEventListener('touchstart', startTouchDrawing);
canvas.addEventListener('touchend', stopDrawing);
canvas.addEventListener('touchmove', touchDraw, { passive: false });

// Funktion zum Starten des Zeichnens mit der Maus
function startDrawing(event) {
    isDrawing = true;
    setDrawingProperties();
    draw(event); // Erster Punkt sofort gezeichnet
}

// Funktion zum Stoppen des Zeichnens
function stopDrawing() {
    isDrawing = false;
    ctx.beginPath(); // Startet einen neuen Pfad
}

// Funktion zum Zeichnen mit der Maus
function draw(event) {
    if (!isDrawing) return;
    updateBrushProperties(event);
}

// Funktion zum Starten des Zeichnens bei Touch
function startTouchDrawing(event) {
    event.preventDefault(); // Verhindert Standardaktionen wie Scrollen
    isDrawing = true;
    touchDraw(event); // Zeichnet bei Berührung
}

// Funktion zum Zeichnen bei Touch
function touchDraw(event) {
    event.preventDefault();
    if (!isDrawing) return;

    const touch = event.touches[0];
    const x = touch.clientX - canvas.offsetLeft;
    const y = touch.clientY - canvas.offsetTop;

    ctx.lineTo(x, y);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(x, y);
}

// Funktion zum Aktualisieren der Pinselgröße und Farbe
function updateBrushProperties(event) {
    ctx.lineWidth = brushSizeInput.value;
    ctx.strokeStyle = colorInput.value;

    ctx.lineTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop);
}

// Funktion zum Löschen des Canvas
clearButton.addEventListener('click', () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Löscht den gesamten Canvas-Inhalt
});

// Funktion zum Setzen der Zeichen-Eigenschaften
function setDrawingProperties() {
    ctx.lineCap = 'round'; // Optionale Linienkappe
    ctx.lineWidth = brushSizeInput.value;
    ctx.strokeStyle = colorInput.value;
}
