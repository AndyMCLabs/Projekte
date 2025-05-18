document.getElementById('random-button').addEventListener('click', function() {
    // Liste der verfügbaren Webseiten (Dateinamen)
    const pages = [
        'seite1.html', 
        'seite2.html', 
        'seite3.html']; // Ergänze hier deine Dateien

    // Wähle eine zufällige Seite
    const randomPage = pages[Math.floor(Math.random() * pages.length)];

    // Öffne die zufällige Seite
    window.open(randomPage, '_blank');
});
