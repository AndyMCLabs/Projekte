// Konstanten definieren
const INITIAL_PLAYER_HEALTH = 100;
const MAX_HEALTH_INCREMENT = 2; // Erhöhung der maximalen Gesundheit
const CRITICAL_HIT_CHANCE = 0.1; // 10%
const HEAL_CHANCE = 0.3; // 30%
const MIN_HEAL_AMOUNT = 5;
const MAX_HEAL_AMOUNT = 20;

// Spielstatus
let playerLevel = 1;
let maxHealth = INITIAL_PLAYER_HEALTH;
let playerHealth = maxHealth;
let monsterHealth = 0;
let monsterName = "";

// HTML-Elemente referenzieren
const levelDisplay = document.getElementById("level");
const healthDisplay = document.getElementById("health");
const monsterNameDisplay = document.getElementById("monster-name");
const monsterHealthDisplay = document.getElementById("monster-health");
const gameMessage = document.getElementById("game-message");

// Charakter-Klasse
class Character {
    constructor(name, health, maxHealth) {
        this.name = name;
        this.health = health;
        this.maxHealth = maxHealth;
    }

    heal(amount) {
        this.health = Math.min(this.health + amount, this.maxHealth);
    }
}

// Funktionen

// Spiel speichern
function saveGame() {
    const gameState = {
        playerLevel: playerLevel,
        playerHealth: playerHealth,
        currentWeapon: currentWeapon
    };
    localStorage.setItem("WoWGameSave", JSON.stringify(gameState));
    gameMessage.textContent = "Spiel gespeichert!";
}

// Spiel laden
function loadGame() {
    const savedGame = JSON.parse(localStorage.getItem("WoWGameSave"));
    if(savedGame) {
        playerLevel = savedGame.playerLevel;
        playerHealth = savedGame.playerHealth;
        currentWeapon = savedGame.currentWeapon;
        levelDisplay.textContent = `Level: ${playerLevel}`;
        healthDisplay.textContent = `Gesundheit: ${playerHealth}`;
        gameMessage.textContent = "Spielstand geladen!";
        generateMonster();
    } else {
        gameMessage.textContent = "Kein gespeicherter Spielstand gefunden!";
    }
}

document.getElementById("save-button").addEventListener("click", saveGame);
document.getElementById("load-button").addEventListener("click", loadGame);

// Modifizierte Monster-Generierung mit zunehmender Schwierigkeit
function generateMonster() {
    const monsters = ["Kobold", "Gnoll", "Murloc", "Felsriese", "Oger"];
    const bossMonsters = ["Schwarzdrache", "Erzdämon", "Leitender Hexenmeister"];

    if (playerLevel % 5 === 0) {
        monsterName = bossMonsters[Math.floor(Math.random() * bossMonsters.length)];
        monsterHealth = Math.floor(Math.random() * (200 + playerLevel * 10)) + 150; // Boss hat viel mehr Gesundheit
        monsterDamage = calculateDamage(15, 20 + playerLevel * 3); // Starker Angriff für Boss
        gameMessage.textContent = `Ein Boss ist erschienen! Bereite dich auf den Kampf gegen ${monsterName} vor!`;
    } else {
        monsterName = monsters[Math.floor(Math.random() * monsters.length)];
        monsterHealth = Math.floor(Math.random() * (50 + playerLevel * 5)) + 50; // Monster-Gesundheit steigt mit Level
        monsterDamage = calculateDamage(5, 10 + playerLevel * 2); // Monster verursacht mehr Schaden mit steigendem Level
    }

    monsterNameDisplay.textContent = `Monster: ${monsterName}`;
    monsterHealthDisplay.textContent = `Gesundheit: ${monsterHealth}`;
}

// Waffenobjekte mit unterschiedlichen Schadenswerten
const weapons = {
    "Schwert": { minDamage: 10, maxDamage: 25 },
    "Axt": { minDamage: 15, maxDamage: 30 },
    "Bogen": { minDamage: 8, maxDamage: 20 }
};

// Standardwaffe
let currentWeapon = "Schwert";

// Waffe wechseln
function changeWeapon(newWeapon) {
    currentWeapon = newWeapon;
    gameMessage.textContent = `Du hast nun ${currentWeapon} ausgerüstet.`;
}

// Schaden berechnen
function calculateDamage(minDamage, maxDamage) {
    return Math.floor(Math.random() * (maxDamage - minDamage + 1)) + minDamage;
}

// Spieler greift an mit aktueller Waffe
function attack() {
    if(monsterHealth > 0) {
        const weapon = weapons[currentWeapon];
        // Chance für kritischen Treffer
        const isCriticalHit = Math.random() < CRITICAL_HIT_CHANCE; // 10% Chance auf einen kritischen Treffer
        let attackDamage = calculateDamage(weapon.minDamage, weapon.maxDamage);

        // Erhöhe den Schaden für kritischen Treffer
        if(isCriticalHit) {
            attackDamage = Math.floor(attackDamage * 1.5); // 150% des normalen Schadens
            gameMessage.textContent += " Kritischer Treffer!";
        }

        monsterHealth -= attackDamage;
        gameMessage.textContent += ` Du greifst das Monster an und fügst ${attackDamage} Schaden zu!`;

        if(monsterHealth <= 0) {
            monsterHealth = 0;
            monsterHealthDisplay.textContent = `Gesundheit: ${monsterHealth}`;
            gameMessage.textContent = `Du hast ${monsterName} besiegt!`;
            levelUp();
        } else {
            monsterHealthDisplay.textContent = `Gesundheit: ${monsterHealth}`;
            setTimeout(() => {
                monsterAttack();
            }, 4000);
        }
    }
}

// Monster-Angriff aktualisieren mit zufälliger Spezialfähigkeit
function monsterAttack() {
    if(playerHealth > 0) {
        const monsterAttackDamage = calculateDamage(0, monsterDamage);
        playerHealth -= monsterAttackDamage;
        gameMessage.textContent = `${monsterName} greift an und verursacht ${monsterAttackDamage} Schaden!`;

        if(playerHealth <= 0) {
            playerHealth = 0;
            gameMessage.textContent = `Du wurdest von ${monsterName} besiegt...`;
            endGame();
        } else {
            healthDisplay.textContent = `Gesundheit: ${playerHealth}`;
            monsterSpecialAbility(); // Möglichkeit für das Monster, sich zu heilen
        }
    }
}

// Monster-Spezialfähigkeit: Chance auf Heilung
function monsterSpecialAbility() {
    if(Math.random() < HEAL_CHANCE && monsterHealth > 0) { // 30% Chance auf Heilung
        const healAmount = Math.floor(Math.random() * 20) + 10;
        monsterHealth += healAmount;
        gameMessage.textContent = `${monsterName} heilt sich um ${healAmount} Punkte!`;
        monsterHealthDisplay.textContent = `Gesundheit: ${monsterHealth}`;
    }
}

// Spieler heilt sich
function heal() {
    if(playerHealth < maxHealth) {
        let healAmount = Math.floor(Math.random() * (MAX_HEAL_AMOUNT - MIN_HEAL_AMOUNT + 1)) + MIN_HEAL_AMOUNT;
        playerHealth += healAmount;
        if(playerHealth > maxHealth) {
            playerHealth = maxHealth;
        }
        healthDisplay.textContent = `Gesundheit: ${playerHealth}`;
        gameMessage.textContent = `Du heilst dich um ${healAmount} Punkte!`;
    } else {
        gameMessage.textContent = "Deine Gesundheit ist bereits voll!";
    }
    setTimeout(() => {
        monsterAttack();
    }, 4000);
}

// Level-Up System
function levelUp() {
    playerLevel++;
    levelDisplay.textContent = `Level: ${playerLevel}`;

    // Erhöhung der maximalen Gesundheit
    maxHealth += MAX_HEALTH_INCREMENT;
    playerHealth = maxHealth; // Spielerheilkraft auf die neue maximale Gesundheit setzen
    healthDisplay.textContent = `Gesundheit: ${playerHealth} (Max: ${maxHealth})`;
    gameMessage.textContent = `Du bist auf Level ${playerLevel} aufgestiegen! Deine maximale Gesundheit ist jetzt ${maxHealth}.`;

    // Generiere ein neues Monster für das nächste Level
    generateMonster();
}

// Event-Listener für Buttons
document.getElementById("attack-button").addEventListener("click", attack);
document.getElementById("heal-button").addEventListener("click", heal);

// Spiel starten mit einem ersten Monster
generateMonster();
