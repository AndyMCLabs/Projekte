// HTML Elemente
const bodyEl = document.querySelector("body");

// Buttons
const randomBackgroundBtn = document.getElementById("randomBackgroundColor");
const generateRandomElBtn = document.getElementById("generateRendomElement");
const unhideBtn = document.getElementById("unhide");

// Eventlistener für Button Background
randomBackgroundBtn.addEventListener("click", () => {
    bodyEl.style.backgroundColor = getRandomColor();
});

// Eventlistener für Button Element
generateRandomElBtn.addEventListener("click", () => {
    generateRandomElement();
});

// Eventlistener für Button unhide
unhideBtn.addEventListener("click", () => {
    unhideColorCodes();
});

// Funktion zufällige Farbe
function getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Funktion zufälliges Element
function generateRandomElement() {
    // Erstellen eines neuen Div-Elements
    const newElement = document.createElement("div");

    // Zufällige Eigenschaften festlegen
    const randomHeight = Math.floor(Math.random() * 300) + 50;
    const randomWidth = Math.floor(Math.random() * 300) + 50;
    const randomBorderRadius = Math.floor(Math.random() * 50);
    const randomColor = getRandomColor();
    const randomDegree = Math.floor(Math.random() * 360);
    const randomPositionX = Math.floor(Math.random() * (window.innerWidth - randomWidth));
    const randomPositionY = Math.floor(Math.random() * (window.innerHeight - randomHeight));

    // Stile und Positionen anwenden
    newElement.style.height = `${randomHeight}px`;
    newElement.style.width = `${randomWidth}px`;
    newElement.style.borderRadius = `${randomBorderRadius}%`;
    newElement.style.backgroundColor = randomColor;
    newElement.style.transform = `rotate(${randomDegree}deg)`;
    newElement.style.position = "absolute";
    newElement.style.left = `${randomPositionX}px`;
    newElement.style.top = `${randomPositionY}px`;

    // Neues Element zum Body hinzufügen
    bodyEl.appendChild(newElement);
}

