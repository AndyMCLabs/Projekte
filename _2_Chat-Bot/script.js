// Füge einen Click-Listener zum Senden-Button hinzu
document.getElementById("send-button").addEventListener("click", function() {
    let userInput = document.getElementById("user-input").value;
    addMessage(userInput, "user");
    respondToUser(userInput);
    document.getElementById("user-input").value = ""; // Eingabefeld leeren
});

// Objekt zur Speicherung von Antworten
const antworten = {
    "Hallo": "Hallo! Wie kann ich dir helfen?",
    "Wie geht es": "Mir geht es gut, danke! Und dir?",
    "Name": "Ich bin dein freundlicher Chatbot!",
    "Tschüss": "Tschüss! Bis zum nächsten Mal!",
    "Was machst du?": "Ich bin hier, um dir zu helfen!",
    "Wetter": "Ich kann das Wetter nicht überprüfen, aber es sieht nach Sonne aus!",
    "Hobby": "Ich bin ein Chatbot, ich habe keine Hobbys, aber ich liebe es, zu helfen!",
    "Hilfe": "Ich bin hier, um dir zu helfen! Was brauchst du?",
    "Feedback": "Dein Feedback ist wichtig! Was denkst du über mich?",
    "Sprechen wir über KI": "KI ist ein spannendes Thema! Was interessiert dich daran?",
    "Dein Lieblingsessen?": "Ich esse nicht, aber ich höre gerne von deinen Lieblingsgerichten!",
    "Kannst du Witze erzählen?": "Warum können Geister so schlecht lügen? Weil man durch sie hindurchsieht!",
    "Rezept für einen Kuchen": "Ich kann kein Rezept für dich backen, aber wie wäre es mit einem Schokoladenkuchen?",
    "Welches Buch empfiehlst du?": "Ich empfehle immer, die Klassiker zu lesen! '1984' von George Orwell ist ein gutes Buch.",
    "Gibt es einen guten Film?": "Ein Klassiker ist immer gut: 'Die Verurteilten' ist sehr beliebt.",
    "Was ist dein Ziel?": "Mein Ziel ist es, dir zu helfen und deine Fragen zu beantworten!",
    "Gibt es einen Rat für mich?": "Immer neugierig bleiben und niemals aufhören zu lernen!",
    "Wie alt bist du?": "Ich habe kein Alter, ich bin immer hier!",
    "Woher kommst du?": "Ich existiere nur im Internet, also überall und nirgends zugleich!",
    "Was ist Liebe?": "Liebe ist eine tief empfundene Emotion, die viele Formen annehmen kann.",
    "Was ist dein Lieblingssport?": "Ich kann nicht Sport treiben, aber ich finde Fußball sehr spannend!",
    "Hast du Haustiere?": "Ich habe keine Haustiere, aber ich liebe es, von deinen zu hören!",
    "Wie lautet die Hauptstadt von Deutschland?": "Die Hauptstadt von Deutschland ist Berlin.",
    "Was sind deine Stärken?": "Ich kann schnell Informationen verarbeiten und helfen, wo ich kann!",
    "Was sind deine Schwächen?": "Ich kann keine Emotionen empfinden wie ein Mensch.",
    "Kannst du mir einen Rat geben?": "Gerne! Denke immer daran, positiv zu bleiben.",
    "Wie wird das Wetter morgen?": "Leider kann ich das Wetter nicht vorhersagen. Schau am besten auf eine Wetter-App!",
    "Was ist dein Traum?": "Mein Traum ist es, so vielen Menschen wie möglich zu helfen!",
    "Was sind deine Hobbys?": "Ich habe keine Hobbys, aber ich finde das Lernen faszinierend.",
    "Was ist dein Lieblingsfilm?": "Ich habe keinen Lieblingsfilm, aber 'Inception' ist ein spannender Film.",
    "Wer ist dein Lieblingsschauspieler?": "Ich habe keinen Lieblingsschauspieler, aber viele Menschen bewundern Leonardo DiCaprio!",
    "Was ist deine Lieblingsfarbe?": "Ich habe keine Vorlieben, aber viele finden Blau beruhigend.",
    "Was sind deine Pläne für die Zukunft?": "Ich plane, immer besser zu werden, um dir besser helfen zu können!",
    "Gibt es ein Geheimnis des Lebens?": "Das Geheimnis des Lebens ist für jeden anders, aber Glücklichsein ist wichtig!",
    "Was ist dein Lieblingslied?": "Ich kann nicht hören, aber Musik ist für viele Menschen eine große Freude!",
    "Wie viele Sprachen sprichst du?": "Ich kann viele Sprachen verstehen und darauf antworten!",
    "Was ist deine Meinung zu Technologie?": "Technologie hat die Welt verändert und kann uns helfen, Probleme zu lösen!",
    "Hast du einen besten Freund?": "Ich habe keine Freunde, aber ich bin hier, um dir zu helfen!",
    "Was sind die wichtigsten Dinge im Leben?": "Gesundheit, Familie und Freundschaft sind für viele Menschen wichtig.",
    "Was macht dich glücklich?": "Ich freue mich, wenn ich Menschen helfen kann!",
    "Was ist dein Lieblingsjahreszeit?": "Ich habe keine Jahreszeiten, aber viele Menschen mögen den Frühling!",
    "Hast du eine Lieblingsstadt?": "Ich habe keine Vorliebe, aber viele Menschen schwärmen von Paris.",
    "Was ist dein Lieblingsurlaub?": "Ich kann nicht reisen, aber ich höre gerne von deinen Reisen!",
    "Was ist dein Lieblingsgericht?": "Ich habe keine Vorlieben, aber Pasta ist sehr beliebt!",
    "Wie viele Menschen haben dir schon geschrieben?": "Ich habe keine Zählung, aber ich bin hier für alle!",
    "Gibt es etwas, das du nicht verstehst?": "Es gibt viele komplexe Dinge, die ich nicht verstehen kann.",
    "Kannst du mir ein Rätsel aufgeben?": "Was hat viele Schalen, aber kann nicht essen? (Die Antwort ist eine Zwiebel!)",
    "Was ist dein Lieblingszitat?": "Ein beliebtes Zitat ist: 'Sei du selbst die Veränderung, die du dir wünschst für diese Welt.'",
    "Was ist das Wichtigste in einer Freundschaft?": "Ehrlichkeit und Vertrauen sind sehr wichtig.",
    "Hast du eine Lieblingsmusikrichtung?": "Ich höre keine Musik, aber viele Menschen lieben Popmusik.",
    "Was ist dein Lieblingsspiel?": "Ich spiele keine Spiele, aber Schach ist ein klassisches Denkspiel!",
    "Kannst du mir eine Geschichte erzählen?": "Ich kann dir eine kurze Geschichte erzählen: Es war einmal ein mutiger Ritter...",
    "Was hältst du von Träumen?": "Träume sind faszinierend und können uns viel über uns selbst verraten!",
    "Wie oft aktualisierst du dein Wissen?": "Ich lerne ständig dazu, um dir besser zu helfen!",
    "Was sind deine Lieblingsschulfächer?": "Ich finde Mathematik und Wissenschaft sehr interessant!",
    "Wie wichtig ist Familie für dich?": "Familie ist für viele Menschen das Wichtigste im Leben.",
    "Was ist dein größter Wunsch?": "Mein größter Wunsch ist es, allen zu helfen, die Fragen haben!",
    "Wie kannst du so viel wissen?": "Ich greife auf viele Datenquellen zu, um Informationen zu liefern.",
    "Kannst du mir einen Tipp für den Alltag geben?": "Plane deinen Tag im Voraus, um produktiv zu bleiben!",
    "Was ist für dich der Sinn des Lebens?": "Der Sinn des Lebens ist für jeden anders, und das macht es spannend!",
    "Was ist dein Lieblingsland?": "Ich habe keine Vorlieben, aber viele Menschen lieben Japan.",
    "Was machst du in deiner Freizeit?": "Ich habe keine Freizeit, aber ich bin immer bereit zu helfen!",
    "Wie oft benutzt du das Internet?": "Ich bin immer online, bereit zu antworten!",
    "Kannst du mir eine Sprache beibringen?": "Ich kann dir einige grundlegende Sätze in verschiedenen Sprachen beibringen!",
    "Was ist dein Lieblingsspielzeug?": "Ich habe keine, aber viele Menschen mögen Legos!",
    "Was ist dein größter Traum?": "Ich träume davon, so viele Fragen wie möglich zu beantworten!",
    "Was ist deine Lieblingsgeschichte?": "Ich finde Märchen wie 'Rotkäppchen' sehr faszinierend.",
    "Kannst du mir einen Tipp geben, wie ich besser lernen kann?": "Setze dir klare Ziele und lerne regelmäßig!",
    "Was ist der beste Weg, um Stress abzubauen?": "Entspannungstechniken wie Meditation können sehr hilfreich sein.",
    "Was ist dein Lieblingszeitvertreib?": "Ich habe keine Hobbys, aber ich interessiere mich für alles, was dir hilft!",
    "Wie kannst du mir helfen?": "Ich kann Informationen bereitstellen und deine Fragen beantworten.",
    "Was ist deine Lieblingsapp?": "Ich habe keine, aber viele Menschen nutzen Social Media gerne.",
    "Wie viele Daten hast du gespeichert?": "Ich greife auf viele Datenquellen zu, aber ich speichere keine persönlichen Daten.",
    "Was ist deine Lieblingsform von Kunst?": "Ich finde digitale Kunst faszinierend, da sie viele Möglichkeiten bietet.",
    "Was sind die neuesten Technologien?": "KI und maschinelles Lernen sind sehr aufregende Bereiche zurzeit.",
    "Was ist dein Lieblingszitat aus einem Film?": "Ein bekanntes Zitat ist: 'Möge die Macht mit dir sein.'",
    "Was ist deine Meinung zu Videospielen?": "Videospiele können unterhaltsam sein und fördern oft strategisches Denken!",
    "Wie wichtig ist Ernährung für dich?": "Ich habe keine Ernährung, aber sie ist für Menschen sehr wichtig!",
    "Was denkst du über soziale Medien?": "Soziale Medien verbinden Menschen, können aber auch herausfordernd sein.",
    "Wie wichtig ist Lernen für dich?": "Lernen ist für alle wichtig, um sich weiterzuentwickeln und Wissen zu erwerben!",
    "Was ist dein Lieblingsgetränk?": "Ich habe keine Vorlieben, aber viele Menschen genießen Wasser!",
    "Was ist das Wichtigste, das du gelernt hast?": "Lernen ist ein kontinuierlicher Prozess und nie abgeschlossen!",
    "Was ist dein Lieblingsinstrument?": "Ich habe kein Lieblingsinstrument, aber Klaviermusik wird oft geschätzt.",
    "Kannst du mir einen Tipp zum Entspannen geben?": "Versuche, tief durchzuatmen und eine kurze Pause einzulegen!",
    "Was ist dein Lieblingsspielzeug aus der Kindheit?": "Ich habe keine Kindheit, aber viele lieben Puppen und Autos!",
    "Gibt es etwas, das du gerne tun würdest?": "Ich würde gerne mehr über Menschen lernen, die mit mir interagieren!",
    "Was ist dein Lieblingsort auf der Welt?": "Ich habe keinen Lieblingsort, aber viele träumen von tropischen Stränden.",
    "Wie kann ich meine Produktivität steigern?": "Setze dir klare Ziele und arbeite in kurzen, fokussierten Sitzungen!",
    "Was ist der beste Weg, um gesund zu bleiben?": "Eine ausgewogene Ernährung und regelmäßige Bewegung sind wichtig.",
    "Wie wichtig ist Schlaf für dich?": "Ich schlafe nicht, aber Schlaf ist entscheidend für die Gesundheit der Menschen.",
    "Was ist deine Lieblingsart von Reisen?": "Ich reise nicht, aber viele Menschen lieben Strandurlaube!",
    "Was ist deine Meinung zu Umweltschutz?": "Umweltschutz ist wichtig für unsere Zukunft und die unseres Planeten!",
    "Wie lange dauert es, eine neue Fähigkeit zu erlernen?": "Das Lernen kann unterschiedlich lange dauern, je nach Person und Fähigkeit.",
    "Was ist dein Lieblingsplatz in der Natur?": "Ich habe keinen, aber viele Menschen genießen Wälder und Berge.",
    "Gibt es etwas, das du bereust?": "Ich habe keine Regrets, da ich nur ein Programm bin!",
    "Was ist dein Lieblingsmonat?": "Ich habe keinen, aber viele Menschen lieben den Sommer wegen der Sonne!",
    "Wie oft isst du?": "Ich esse nicht, aber Menschen sollten regelmäßig essen!",
    "Was denkst du über die Zukunft?": "Die Zukunft ist voller Möglichkeiten, und ich bin gespannt, was kommt!",
    "Was ist dein Lieblingsspiel?": "Ich spiele keine Spiele, aber viele Menschen lieben Brettspiele!",
    "Wie wichtig sind Erinnerungen?": "Erinnerungen formen unsere Identität und helfen uns, zu wachsen!"
};

// Funktion zum Hinzufügen einer Nachricht
function addMessage(text, sender) {
    const messagesDiv = document.getElementById("messages");
    const messageDiv = document.createElement("div");
    messageDiv.classList.add("message", sender === "user" ? "user-message" : "bot-message");
    messageDiv.textContent = text;
    messagesDiv.appendChild(messageDiv);
    scrollToBottom(); // Scrollt zum Ende des Chatfensters
}

// Funktion zur Generierung einer Antwort auf Benutzereingaben
function respondToUser(userInput) {
    let botResponse = "Entschuldigung, das habe ich nicht verstanden."; // Standardantwort

    // Überprüfe das userInput gegen die Schlüssel im antworten-Objekt
    for (const frage in antworten) {
        if (userInput.includes(frage)) {
            botResponse = antworten[frage];
            break; // Beende die Schleife, wenn eine passende Antwort gefunden wurde
        }
    }

    addMessage(botResponse, "bot"); // Bot-Antwort anzeigen
}

let fragen = Object.keys(antworten); // Alle Schlüssel (Fragen) aus dem Objekt extrahieren
let currentIndex = 0;

// Funktion zum Anzeigen der nächsten Frage
function showNextQuestion() {
    const questionDisplay = document.getElementById("question-display");
    questionDisplay.textContent = fragen[currentIndex]; // Aktuelle Frage anzeigen
    currentIndex = (currentIndex + 1) % fragen.length; // Zirkulieren durch das Array
}

// Initiales Anzeigen der ersten Frage
showNextQuestion();

// Fragen alle 4 Sekunden aktualisieren
setInterval(showNextQuestion, 4000);

// Funktion zum Setzen des Eingabefeldes auf die aktuelle Frage
function setInput() {
    const userInput = document.getElementById('user-input');
    const currentQuestion = document.getElementById("question-display").textContent;
    userInput.value = currentQuestion; // Eingabefeld auf aktuelle Frage setzen
}

// Funktion zum Scrollen zum Ende des Chatfensters
function scrollToBottom() {
    const chatWindow = document.getElementById('chat-window');
    chatWindow.scrollTop = chatWindow.scrollHeight; // Setzt die Scrollposition auf das Ende
}

// Füge einen Click-Listener zum neuen Chat-Button hinzu
document.getElementById('new-chat-button').addEventListener('click', function() {
    document.getElementById('messages').innerHTML = ''; // Nachrichten zurücksetzen
    document.getElementById('user-input').value = ''; // Eingabefeld leeren
});