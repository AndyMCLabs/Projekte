// ==========================================================
// 1. Variablen und Konstanten
// ==========================================================

/**
 * Deklaration einer variablen Zahl
 */
let number = 5;  // Let erlaubt die Änderung des Werts

/**
 * Deklaration einer konstanten Zahl
 */
const pi = 3.14; // Const verhindert die Neuzuweisung der Variablen


// ==========================================================
// 2. Funktionen
// ==========================================================

/**
 * Eine einfache Funktion, die zwei Zahlen addiert
 * @param {number} a - Erste Zahl
 * @param {number} b - Zweite Zahl
 * @returns {number} - Das Ergebnis der Addition
 */
function add(a, b) {
  return a + b;
}

// Funktionsaufruf
let sum = add(3, 4); // Ergebnis: 7


// ==========================================================
// 3. Bedingungen (If, Else, Switch)
// ==========================================================

/**
 * Beispiel einer einfachen If-Bedingung
 */
if (number > 10) {
  console.log('Nummer ist größer als 10');
} else {
  console.log('Nummer ist kleiner oder gleich 10');
}

/**
 * Beispiel einer Switch-Anweisung
 */
let day = 3;
switch (day) {
  case 1:
    console.log('Montag');
    break;
  case 2:
    console.log('Dienstag');
    break;
  case 3:
    console.log('Mittwoch');
    break;
  default:
    console.log('Ungültiger Tag');
}


// ==========================================================
// 4. Arrays
// ==========================================================

/**
 * Ein einfaches Array von Zahlen
 */
let numbers_ = [1, 2, 3, 4, 5];

/**
 * Zugriff auf ein Element im Array
 */
let firstNumber = numbers_[0];  // 1

/**
 * Array-Methode: map
 * Wendet eine Funktion auf jedes Element des Arrays an
 */
let doubled = numbers_.map(num => num * 2);  // [2, 4, 6, 8, 10]


// ==========================================================
// 5. Objekte
// ==========================================================

/**
 * Ein einfaches Objekt
 */
let person_ = {
  name: 'Max',
  age: 30,
  greet: function() {
    console.log('Hallo ' + this.name);
  }
};

/**
 * Zugriff auf Objekt-Eigenschaften
 */
let personName = person_.name;  // 'Max'

/**
 * Methode des Objekts aufrufen
 */
person.greet();  // 'Hallo Max'


// ==========================================================
// 6. Schleifen
// ==========================================================

/**
 * Eine einfache for-Schleife
 */
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

/**
 * Eine forEach-Schleife (besser für Arrays)
 */
numbers.forEach((num) => {
  console.log(num);
});


/**
 * Eine while-Schleife
 */
let count = 0;
while (count < 5) {
  console.log(count);
  count++;
}


// ==========================================================
// 7. Asynchrone Operationen (Promises, async/await)
// ==========================================================

/**
 * Eine einfache Funktion, die eine Promise zurückgibt
 */
function fetchData() {
  return new Promise((resolve, reject) => {
    let success = true;
    if (success) {
      resolve('Daten erfolgreich geladen!');
    } else {
      reject('Fehler beim Laden der Daten');
    }
  });
}

/**
 * Verwenden von async/await
 */
async function loadData() {
  try {
    const result = await fetchData();
    console.log(result);  // 'Daten erfolgreich geladen!'
  } catch (error) {
    console.log(error);  // 'Fehler beim Laden der Daten'
  }
}

// Funktionsaufruf
loadData();


// ==========================================================
// 8. Event-Listener
// ==========================================================

/**
 * Hinzufügen eines Event-Listeners auf einen Button
 */
let button = document.querySelector('button');
button.addEventListener('click', () => {
  console.log('Button wurde geklickt!');
});


// ==========================================================
// 9. DOM Manipulation
// ==========================================================

/**
 * Ändern des Textes eines Elements
 */
let heading = document.querySelector('h1');
heading.textContent = 'Neuer Titel';

// Einfügen eines neuen Elements in den DOM
let newDiv = document.createElement('div');
newDiv.textContent = 'Dies ist ein neues div-Element!';
document.body.appendChild(newDiv);

// ==========================================================
// 10. String-Methoden
// ==========================================================

/**
 * String in Kleinbuchstaben umwandeln
 */
let lowerCaseString = "Hallo WELT".toLowerCase();  // 'hallo welt'

/**
 * String in Großbuchstaben umwandeln
 */
let upperCaseString = "Hallo WELT".toUpperCase();  // 'HALLO WELT'

/**
 * Substring (Teil eines Strings) extrahieren
 */
let substring = "Hallo Welt".substring(0, 5);  // 'Hallo'

/**
 * String auf ein bestimmtes Zeichen hin durchsuchen
 */
let containsWord = "Hallo Welt".includes("Welt");  // true

/**
 * String ersetzen
 */
let newString = "Hallo Welt".replace("Welt", "JavaScript");  // 'Hallo JavaScript'

// ==========================================================
// 11. Array-Methoden
// ==========================================================

/**
 * Filtert ein Array basierend auf einer Bedingung
 */
let evenNumbers = numbers.filter(num => num % 2 === 0);  // [2, 4]

// Array sortieren
let sortedNumbers = numbers.sort((a, b) => a - b);  // [1, 2, 3, 4, 5]

// Array umkehren
let reversedNumbers = numbers.reverse();  // [5, 4, 3, 2, 1]

// Reduzieren (Summieren von Zahlen)
let sumOfNumbers = numbers.reduce((acc, num) => acc + num, 0);  // 15

// ==========================================================
// 12. Arrow Functions
// ==========================================================

/**
 * Eine einfache Arrow Function, die zwei Zahlen multipliziert
 */
const multiply = (a, b) => a * b;

/**
 * Eine Arrow Function ohne Parameter
 */
const greet = () => console.log('Hallo Welt!');

// ==========================================================
// 13. Destrukturierung
// ==========================================================

/**
 * Destrukturierung von Arrays
 */
let [first, second] = [10, 20, 30];
console.log(first);  // 10
console.log(second); // 20

/**
 * Destrukturierung von Objekten
 */
let person__ = { name: 'Max', age: 30 };
let { name_, age } = person__;
console.log(name_);  // 'Max'
console.log(age);   // 30

// ==========================================================
// 14. Ternärer Operator
// ==========================================================

/**
 * Eine kurze Form der if-else-Bedingung
 */
let result = (number > 10) ? 'Größer als 10' : 'Kleiner oder gleich 10';
console.log(result);  // 'Kleiner oder gleich 10'

// ==========================================================
// 15. Set und Map
// ==========================================================

/**
 * Ein Set (alle Elemente sind einzigartig)
 */
let uniqueNumbers = new Set([1, 2, 3, 3, 4]);
console.log(uniqueNumbers);  // Set { 1, 2, 3, 4 }

/**
 * Ein Map (Schlüssel-Wert-Paare)
 */
let user = new Map();
user.set('name', 'Max');
user.set('age', 30);

console.log(user.get('name'));  // 'Max'
console.log(user.has('age'));   // true

// ==========================================================
// 16. Spread Operator
// ==========================================================

/**
 * Kopieren eines Arrays mit Spread Operator
 */
let newNumbers = [...numbers];  // [1, 2, 3, 4, 5]

/**
 * Kombinieren von Arrays
 */
let combinedArray = [...numbers, 6, 7];  // [1, 2, 3, 4, 5, 6, 7]

/**
 * Kombinieren von Objekten
 */
let newPerson = { ...person, city: 'Berlin' };
console.log(newPerson);  // { name: 'Max', age: 30, city: 'Berlin' }

// ==========================================================
// 17. Konstruktorfunktionen und Klassen
// ==========================================================

/**
 * Eine einfache Konstruktorfunktion
 */
function Person(name, age) {
    this.name = name;
    this.age = age;
  }
  
  const person1 = new Person('Max', 30);
  console.log(person1.name);  // 'Max'
  
  /**
   * Eine Klasse (ES6 Syntax)
   */
  class Animal {
    constructor(name, species) {
      this.name = name;
      this.species = species;
    }
  
    speak() {
      console.log(`${this.name} sagt: Hallo!`);
    }
  }
  
  const dog = new Animal('Bello', 'Hund');
  dog.speak();  // 'Bello sagt: Hallo!'

// ==========================================================
// 18. Bedeutung von 'this'
// ==========================================================

/**
 * Beispiel mit einer Methode innerhalb eines Objekts
 */
const person2 = {
    name: 'Max',
    greet: function() {
      console.log(`Hallo, mein Name ist ${this.name}`);
    }
  };
  
  person2.greet();  // 'Hallo, mein Name ist Max'
  
  /**
   * Beispiel mit einer Arrow Function (bindet 'this' nicht)
   */
  const person3 = {
    name: 'Julia',
    greet: () => {
      console.log(`Hallo, mein Name ist ${this.name}`); // 'this' verweist auf den globalen Kontext, daher leer
    }
  };
  
  person3.greet();  // 'Hallo, mein Name ist undefined'

// ==========================================================
// 19. Debouncing und Throttling
// ==========================================================

/**
 * Debouncing: Verzögert die Ausführung einer Funktion, bis eine bestimmte Zeit ohne Aufruf verstrichen ist
 */
function debounce(func, delay) {
    let timer;
    return function (...args) {
      clearTimeout(timer);
      timer = setTimeout(() => func.apply(this, args), delay);
    };
  }
  
  const handleResize = debounce(() => console.log('Fenstergröße geändert!'), 500);
  window.addEventListener('resize', handleResize);
  
  /**
   * Throttling: Führt eine Funktion nur alle n Millisekunden aus
   */
  function throttle(func, limit) {
    let lastFunc;
    let lastRan;
    return function () {
      const context = this;
      const args = arguments;
      if (!lastRan) {
        func.apply(context, args);
        lastRan = Date.now();
      } else {
        clearTimeout(lastFunc);
        lastFunc = setTimeout(() => {
          if (Date.now() - lastRan >= limit) {
            func.apply(context, args);
            lastRan = Date.now();
          }
        }, limit - (Date.now() - lastRan));
      }
    };
  }

// ==========================================================
// 20. Fehlerbehandlung mit 'try/catch'
// ==========================================================

/**
 * Beispiel für eine Fehlerbehandlung mit try/catch
 */
try {
    let result = someNonExistentFunction();
  } catch (error) {
    console.error('Fehler aufgetreten:', error);
  }

// ==========================================================
// 21. Array Destrukturierung
// ==========================================================

/**
 * Destrukturierung eines Arrays mit Rest-Operator
 */
let [firstElement, secondElement, ...rest] = [1, 2, 3, 4, 5];
console.log(firstElement);  // 1
console.log(rest);          // [3, 4, 5]

// ==========================================================
// 22. Array.reduce() mit mehreren Argumenten
// ==========================================================

/**
 * Berechnung des Produkts aller Elemente in einem Array
 */
let numbers = [2, 3, 4];
let product = numbers.reduce((acc, num) => acc * num, 1);
console.log(product);  // 24 (2 * 3 * 4)

// ==========================================================
// 23. Object.assign()
// ==========================================================

/**
 * Ein Objekt kopieren
 */
let person___ = { name: 'Max', age: 30 };
let copyPerson = Object.assign({}, person___);
console.log(copyPerson);  // { name: 'Max', age: 30 }

/**
 * Mehrere Objekte zusammenführen
 */
let personDetails = { gender: 'male' };
let mergedPerson = Object.assign({}, person, personDetails);
console.log(mergedPerson);  // { name: 'Max', age: 30, gender: 'male' }

// ==========================================================
// 24. Globaler Error Handler
// ==========================================================

/**
 * Fehler im globalen Kontext (z. B. unhandled errors) behandeln
 */
window.onerror = function(message, source, lineno, colno, error) {
    console.error(`Fehler aufgetreten: ${message} in Zeile ${lineno}`);
    return true;  // Verhindert das Anzeigen des Standard-Fehlermeldungsdialoges
  };

// ==========================================================
// 25. Modale Fenster (Popups)
// ==========================================================

/**
 * Ein einfaches modales Fenster erstellen
 */
function openModal() {
    let modal = document.createElement('div');
    modal.style.position = 'fixed';
    modal.style.top = '50%';
    modal.style.left = '50%';
    modal.style.transform = 'translate(-50%, -50%)';
    modal.style.background = '#fff';
    modal.style.padding = '20px';
    modal.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    modal.innerHTML = `<p>Dies ist ein modales Fenster!</p><button onclick="closeModal()">Schließen</button>`;
    document.body.appendChild(modal);
  }
  
  function closeModal() {
    let modal = document.querySelector('div');
    modal.remove();
  }
  
  // Modales Fenster öffnen
  openModal();

// ==========================================================
// 26. Debouncing für Eingabefelder
// ==========================================================

/**
 * Eingabefeld mit Debouncing, um unnötige Anfragen zu vermeiden
 */
function debounce(func, delay) {
    let timeout;
    return function (...args) {
      clearTimeout(timeout);
      timeout = setTimeout(() => func(...args), delay);
    };
  }
  
  let searchInput = document.querySelector('#search');
  
  const handleSearch = debounce((event) => {
    console.log('Suche:', event.target.value);
  }, 500);
  
  searchInput.addEventListener('input', handleSearch);

// ==========================================================
// 27. Verwenden von `localStorage`
// ==========================================================

/**
 * Speichern von Daten im Local Storage
 */
localStorage.setItem('user', JSON.stringify({ name: 'Max', age: 30 }));

/**
 * Abrufen von Daten aus dem Local Storage
 */
let userData = JSON.parse(localStorage.getItem('user'));
console.log(userData);  // { name: 'Max', age: 30 }

/**
 * Löschen von Daten im Local Storage
 */
localStorage.removeItem('user');

// ==========================================================
// 28. Verwenden von `sessionStorage`
// ==========================================================

/**
 * Speichern von Daten für die Sitzung
 */
sessionStorage.setItem('sessionData', 'Daten für die Sitzung');

/**
 * Abrufen von Daten aus dem Session Storage
 */
let sessionData = sessionStorage.getItem('sessionData');
console.log(sessionData);  // 'Daten für die Sitzung'

/**
 * Löschen von Daten im Session Storage
 */
sessionStorage.removeItem('sessionData');

// ==========================================================
// 29. Zufallszahl generieren
// ==========================================================

/**
 * Zufallszahl zwischen min (inklusive) und max (exklusive) generieren
 */
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
  
  let randomNumber = getRandomNumber(1, 10);  // z.B. 4
  console.log(randomNumber);

// ==========================================================
// 30. Verwenden von `fetch` für HTTP-Anfragen
// ==========================================================

/**
 * Eine HTTP-Anfrage durchführen (GET)
 */
fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Fehler:', error));

/**
 * Eine HTTP-Anfrage durchführen (POST)
 */
fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ title: 'Neuer Beitrag', body: 'Text', userId: 1 })
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Fehler:', error));

// ==========================================================
// 31. URL-Parameter auslesen
// ==========================================================

/**
 * URL-Parameter auslesen
 */
function getQueryParameter(param) {
    let urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
  }
  
  let userId = getQueryParameter('userId');
  console.log(userId);  // Gibt den Wert des Parameters 'userId' in der URL zurück

// ==========================================================
// 32. Verwendung von `setTimeout` und `setInterval`
// ==========================================================

/**
 * setTimeout - Funktion einmalig nach einer Verzögerung ausführen
 */
setTimeout(() => {
    console.log('Dies erscheint nach 2 Sekunden!');
  }, 2000);
  
  /**
   * setInterval - Funktion in regelmäßigen Abständen ausführen
   */
  let counter = 0;
  let intervalId = setInterval(() => {
    counter++;
    console.log(`Counter: ${counter}`);
    if (counter === 5) {
      clearInterval(intervalId);  // Stoppt den Interval
    }
  }, 1000);

// ==========================================================
// 33. Import/Export in Modulen
// ==========================================================

// In einer Datei (z. B. person.js)
export const person = {
    name: 'Max',
    age: 30
  };
  
  // In einer anderen Datei (z. B. main.js)
  import { person } from './person.js';
  console.log(person.name);  // 'Max'

// ==========================================================
// 34. Verwendung von `Math` für mathematische Operationen
// ==========================================================

/**
 * Quadratwurzel einer Zahl
 */
let squareRoot = Math.sqrt(16);  // 4

/**
 * Maximale Zahl in einem Array finden
 */
let maxNumber = Math.max(10, 20, 30, 40);  // 40

/**
 * Minimum in einem Array finden
 */
let minNumber = Math.min(10, 20, 30, 40);  // 10

/**
 * Runden einer Zahl
 */
let roundedNumber = Math.round(3.6);  // 4

// ==========================================================
// 35. String-Template Literals
// ==========================================================

/**
 * String mit eingebetteten Variablen
 */
let name = 'Max';
let greeting = `Hallo, mein Name ist ${name}`;
console.log(greeting);  // 'Hallo, mein Name ist Max'

/**
 * Multiline-String
 */
let multilineString = `Dies ist
ein mehrzeiliger
String.`;
console.log(multilineString);

// ==========================================================
// 36. Event Delegation
// ==========================================================

/**
 * Event Delegation: Ein Event-Listener wird auf einem Eltern-Element
 * platziert, anstatt auf jedes einzelne Kind-Element.
 * Dies ist besonders nützlich bei dynamisch hinzugefügten Elementen.
 */
document.querySelector('#parent').addEventListener('click', function(event) {
    if (event.target && event.target.matches('button')) {
      console.log('Button wurde geklickt:', event.target);
    }
  });

// ==========================================================
// 37. Async/Await mit Fehlerbehandlung
// ==========================================================

/**
 * Async/Await für asynchrone HTTP-Anfragen und Fehlerbehandlung.
 */
async function fetchData() {
    try {
      let response = await fetch('https://jsonplaceholder.typicode.com/posts');
      let data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Fehler beim Abrufen der Daten:', error);
    }
  }
  
  fetchData();

// ==========================================================
// 38. Konvertieren von JSON in ein JavaScript-Objekt und zurück
// ==========================================================

/**
 * JSON in ein JavaScript-Objekt umwandeln
 */
let jsonString = '{"name": "Max", "age": 30}';
let person = JSON.parse(jsonString);
console.log(person);  // { name: 'Max', age: 30 }

/**
 * JavaScript-Objekt in JSON umwandeln
 */
let jsonObject = JSON.stringify(person);
console.log(jsonObject);  // '{"name":"Max","age":30}'

// ==========================================================
// 39. Funktion für tiefe Objekt-Kopie
// ==========================================================

/**
 * Eine tiefgehende Kopie eines Objekts erstellen
 * Damit wird sichergestellt, dass auch verschachtelte Objekte kopiert werden.
 */
function deepClone(obj) {
    return JSON.parse(JSON.stringify(obj));
  }
  
  let original = { name: 'Max', details: { age: 30, city: 'Berlin' } };
  let clone = deepClone(original);
  
  clone.details.age = 31;  // Ändert nur die Kopie, nicht das Original
  
  console.log(original.details.age);  // 30 (unverändert)
  console.log(clone.details.age);     // 31

// ==========================================================
// 40. Verzögertes Ausführen einer Funktion (setTimeout)
// ==========================================================

/**
 * Eine Funktion nach einer Verzögerung ausführen
 */
setTimeout(() => {
    console.log('Dies passiert nach 3 Sekunden.');
  }, 3000);  // 3000 Millisekunden (3 Sekunden)
  
