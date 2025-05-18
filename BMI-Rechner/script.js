// Konstanten für BMI-Grenzwerte
const UNTERGEWICHT_MAX = 18.5;
const NORMALGEWICHT_MAX = 24.9;
const UEBERGEWICHT_MAX = 29.9;

// BMI berechnen
function berechneBMI() {
    let koerperGewicht = parseFloat(document.getElementById("gewicht").value); // Wert als Zahl umwandeln
    let koerperGroesse = parseFloat(document.getElementById("groesse").value); // Wert als Zahl umwandeln

    // Größe von cm in Meter umrechnen
    let groesseInMetern = koerperGroesse / 100;

    // BMI berechnen
    let bmi = koerperGewicht / (groesseInMetern * groesseInMetern);

    // Ergebnis auf 2 Nachkommastellen runden und anzeigen
    document.getElementById("ergebnis").innerText = bmi.toFixed(2);
    
    // Ausführung Funktion
    checkValue(koerperGewicht, koerperGroesse);
    setBackgroundColorByBMI(bmi);
};

// farbliche Ausgabe des Ergebnisses
function setBackgroundColorByBMI(bmi) {
    let ergebnisElement = document.getElementById("ergebnis"); // Referenz auf das Element erstellen
    let empfehlung = document.getElementById("empfehlung");
    if (bmi <= UNTERGEWICHT_MAX) {
        ergebnisElement.style.backgroundColor = "red"; // Untergewicht
        empfehlung.innerText = "Bei Untergewicht ist es wichtig, den Körper auf gesunde Weise zu unterstützen, um das Gewicht langsam und nachhaltig zu erhöhen. Es ist immer ratsam, einen Arzt oder Ernährungsberater zu konsultieren, um einen individuellen Ernährungsplan zu erstellen."
    } else if (bmi <= NORMALGEWICHT_MAX) {
        ergebnisElement.style.backgroundColor = "green"; // Normalgewicht
        empfehlung.innerText = "Bei Normalgewicht ist es wichtig, das Gleichgewicht zwischen einer gesunden Ernährung und ausreichender Bewegung aufrechtzuerhalten, um das Wohlbefinden zu fördern."
    } else if (bmi <= UEBERGEWICHT_MAX) {
        ergebnisElement.style.backgroundColor = "yellow"; // Übergewicht
        empfehlung.innerText = "Bei Übergewicht ist es wichtig, eine gesunde und nachhaltige Herangehensweise zu wählen, um das Gewicht schrittweise zu reduzieren und die Gesundheit zu fördern."
    } else {
        ergebnisElement.style.backgroundColor = "red"; // Adipositas
        empfehlung.innerText = "Bei Adipositas ist es wichtig, einen langfristigen und strukturierten Ansatz zu wählen, um das Gewicht zu reduzieren und gesundheitliche Risiken zu verringern."
    };
};

function checkValue(koerperGewicht, koerperGroesse) {
    if (koerperGewicht <= 0) {
        document.getElementById("ergebnis").innerText = "Größe und Gewicht muss mehr als 0 sein."
    };

    if (koerperGroesse <= 0) {
        document.getElementById("ergebnis").innerText = "Größe und Gewicht muss mehr als 0 sein."
    };
}

// Eventlistener Button
document.getElementById('berechneBMI').addEventListener('click', berechneBMI);


