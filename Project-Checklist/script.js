"use strict"

// Funktion zum Speichern des Pseudo-Codes im localStorage
function saveCode() {
    const pseudoCode = document.getElementById("pseudoCode").value;
    localStorage.setItem("pseudoCode", pseudoCode);
    alert("Pseudo-Code wurde gespeichert!");
}

// Funktion zum Laden des gespeicherten Pseudo-Codes aus dem localStorage
function loadCode() {
    const savedCode = localStorage.getItem("pseudoCode");
    if (savedCode) {
        document.getElementById("pseudoCode").value = savedCode;
        alert("Gespeicherter Pseudo-Code wurde geladen!");
    } else {
        alert("Kein gespeicherter Pseudo-Code gefunden.");
    }
}