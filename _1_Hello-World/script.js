// "Hello World" in verschiedenen Sprachen
const texts = [
    "Hello World - Englisch",              // Englisch
    "Hola Mundo - Spanisch",               // Spanisch
    "Bonjour le Monde - Französisch",      // Französisch
    "Hallo Welt - Deutsch",                // Deutsch
    "Ciao Mondo - Italienisch",            // Italienisch
    "Olá Mundo - Portugiesisch",           // Portugiesisch
    "Привет, мир - Russisch",              // Russisch
    "你好，世界 Chinesisch",                // Chinesisch
    "こんにちは世界 - Japanisch",           // Japanisch
    "안녕하세요 세계 - Koreanisch",         // Koreanisch
    "Merhaba Dünya - Türkisch",            // Türkisch
    "שלום עולם - Hebräisch",              // Hebräisch
    "नमस्ते दुनिया - Hindi",                  // Hindi
    "سلام دنیا" + "- Persisch",            // Persisch
    "ਸਤ ਸ੍ਰੀ ਅਕਾਲ ਦੁਨਿਆ - Punjabi",         // Punjabi
    "Hej Världen - Schwedisch",           // Schwedisch
    "Hallo Wereld - Niederländisch",      // Niederländisch
    "Salve Mundi - Latein",               // Latein
    "Γειά σου Κόσμε - Griechisch",        // Griechisch
    "Sveika Pasaule - Lettisch",          // Lettisch
    "Halló Heimur - Isländisch",          // Isländisch
    "Witaj Świecie - Polnisch",           // Polnisch
    "Hej Verden - Dänisch",               // Dänisch
    "Ahoj světe - Tschechisch",           // Tschechisch
    "Tere Maailm - Estnisch",             // Estnisch
];

// Definiere die Breite und Höhe des Ausgabebereichs
const breiteAusgebenbereich = 500; // Beispielbreite in Pixel
const hoeheAusgebenbereich = 200; // Beispielhöhe in Pixel

// HTML-Elemente
const btn = document.getElementById("btn");
const div = document.getElementById("show");
const body = document.getElementById("body");
const count = document.getElementById("counter");
let counter = 0;

// Button-Klick-Event
btn.addEventListener("click", () => {
    // Zufällige Positionen abrufen
    let position = randomNumber(breiteAusgebenbereich, hoeheAusgebenbereich);

    // Ausgabe-Text und Position festlegen
    div.style.left = position.x + "px";
    div.style.top = position.y + "px";
    div.innerHTML = texts[Math.floor(Math.random() * texts.length)];
    div.style.display = "block"; // Ausgabebereich anzeigen

    // Button auf zufällige Position setzen
    btn.style.left = position.a + "px";
    btn.style.top = position.b + "px";
});

// Funktion zur Erzeugung zufälliger Positionen
function randomNumber(breiteAusgebenbereich, hoeheAusgebenbereich) {
    // Position für den Ausgabebereich
    let x = Math.floor(Math.random() * (window.innerWidth - breiteAusgebenbereich));
    let y = Math.floor(Math.random() * (window.innerHeight - hoeheAusgebenbereich));
    // Position für den Button
    let a = Math.floor(Math.random() * (window.innerWidth - breiteAusgebenbereich));
    let b = Math.floor(Math.random() * (window.innerHeight - hoeheAusgebenbereich));
    return { a, b, x, y };
};

// Farbe ändern
function randomColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
};

// Farbe ändern, aber dunkel
function randomColor2() {
    let r = Math.floor(Math.random() * 50);
    let g = Math.floor(Math.random() * 50);
    let b = Math.floor(Math.random() * 50);
    return `rgb(${r}, ${g}, ${b})`;
};

// Farbe ändern, etwas heller als bei randomColor2
function randomColor3() {
    let r = Math.floor(Math.random() * (100 - 50) + 50);
    let g = Math.floor(Math.random() * (100 - 50) + 50);
    let b = Math.floor(Math.random() * (100 - 50) + 50);
    return `rgb(${r}, ${g}, ${b})`;
};


// Random Borderradius
function randomBorderRadius() {
    let r = Math.floor(Math.random() * 25);
    return `${r}rem`;
};

function randomFontSize() {
    let r = Math.floor(Math.random() * 50);
    return `${r}px`;
};

function randomBoxShadow() {
    let r = Math.floor(Math.random() * 15);
    let g = Math.floor(Math.random() * 15);
    let b = Math.floor(Math.random() * 15);
    let u = Math.floor(Math.random() * 15);
    return `${r}px ${g}px ${b}px ${u}px #EE7B30`;
};

function randomTransform() {
    const rotate = Math.floor(Math.random() * 45); // Rotation in Grad
    const scale = Math.random() * 1.5 + 0.5; // Skaliert zwischen 0.5 und 2
    return `rotate(${rotate}deg) scale(${scale})`;
}

function randomFontWeight() {
    const weights = [200, 400, 600, 800];
    return weights[Math.floor(Math.random() * weights.length)];
}

function randomLetterSpacing() {
    return `${Math.floor(Math.random() * 5)}px`; // Zwischen 0 und 5px
}

function randomPadding() {
    return `${Math.floor(Math.random() * 20)}px`; // Zwischen 0 und 20px
}

function randomMargin() {
    return `${Math.floor(Math.random() * 20)}px`; // Zwischen 0 und 20px
}

// Automatische Positionsänderung der Buttons
setInterval(() => {
    // Zufällige Positionen abrufen
    let position = randomNumber(breiteAusgebenbereich, hoeheAusgebenbereich);

    // Buttons auf zufällige Position setzen
    btn.style.left = position.a + "px";
    btn.style.top = position.b + "px";
    btn.style.backgroundColor = randomColor3();
    btn.style.color = randomColor();
    btn.style.borderColor = randomColor();
    btn.style.borderRadius = randomBorderRadius();
    btn.style.fontSize = randomFontSize();
    btn.style.boxShadow = randomBoxShadow();
    btn.style.transform = randomTransform();
    btn.style.fontWeight = randomFontWeight();
    btn.style.letterSpacing = randomLetterSpacing();
    btn.style.padding = randomPadding();
    btn.style.margin = randomMargin();

    div.style.left = position.x + "px";
    div.style.top = position.y + "px";
    div.style.backgroundColor = randomColor3();
    div.style.color = randomColor();
    div.style.borderColor = randomColor();
    div.style.borderRadius = randomBorderRadius();
    div.style.fontSize = randomFontSize();
    div.style.boxShadow = randomBoxShadow();
    div.style.transform = randomTransform();
    div.style.fontWeight = randomFontWeight();
    div.style.letterSpacing = randomLetterSpacing();
    div.style.padding = randomPadding();
    div.style.margin = randomMargin();

    div.innerHTML = texts[Math.floor(Math.random() * texts.length)];
    div.style.display = "block"; // Ausgabebereich anzeigen

    body.style.backgroundColor = randomColor2();

    counter++;
    count.innerHTML = counter;
    count.style.backgroundColor = randomColor3();
    count.style.color = randomColor();
    count.style.borderColor = randomColor();
    count.style.borderRadius = randomBorderRadius();
    count.style.boxShadow = randomBoxShadow();

}, 1500);
