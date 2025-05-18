// === 🎮 Game State ===
let points = 0;
let level = 1;
let nextLevelThreshold = 10;
let timeLeft = 30;
let timerInterval;
let bonusInterval;
let musicStarted = false;
let totalClicks = 0;
let currentCursorIndex = 0;

// === 🎯 DOM Elements ===
const elements = {
  pointsDisplay: document.getElementById("points"),
  levelDisplay: document.getElementById("level"),
  messageDisplay: document.getElementById("message"),
  clickButton: document.getElementById("click-btn"),
  timerDisplay: document.getElementById("timer"),
  bgMusic: document.getElementById("bg-music"),
  clickSound: document.getElementById("click-sound"),
  timeBonus: document.getElementById("time-bonus")
};

// === 🖱️ Cursor Styles ===
const cursorStyles = [
  "default", "pointer", "crosshair", "wait", "help",
  "move", "grab", "progress", "not-allowed"
];

// === 🧙‍♂️ Game Start ===
function startGame() {
  playBackgroundMusic();
  updateTimerDisplay();
  timerInterval = setInterval(updateTimer, 1000);
  bonusInterval = setInterval(spawnTimeBonus, 5000);
}

// === ⏱️ Timer ===
function updateTimer() {
  timeLeft--;
  updateTimerDisplay();
  if (timeLeft <= 0) endGame();
}

function updateTimerDisplay() {
  elements.timerDisplay.textContent = timeLeft;
}

// === ⚔️ Button Click Handler ===
elements.clickButton.addEventListener("click", handleClick);

function handleClick() {
  if (!musicStarted) {
    musicStarted = true;
    startGame();
  }

  playClickSound();
  updateCursor();
  moveButtonRandomly();

  if (timeLeft <= 0) return;

  totalClicks++;
  points++;
  updateScoreDisplay();

  if (points >= nextLevelThreshold) levelUp();
}

// === 🧮 Score Display ===
function updateScoreDisplay() {
  elements.pointsDisplay.textContent = points;
}

// === ⬆️ Level Up ===
function levelUp() {
  level++;
  points = 0;
  nextLevelThreshold += 10;
  timeLeft += 5;

  elements.levelDisplay.textContent = level;
  updateScoreDisplay();
  updateTimerDisplay();

  showTemporaryMessage(`🆙 Level ${level}! +5 Sekunden Bonuszeit!`);
}

// === 💀 Game Over ===
function endGame() {
  clearInterval(timerInterval);
  clearInterval(bonusInterval);
  elements.clickButton.disabled = true;

  elements.messageDisplay.innerHTML = `
    💀 GAME OVER! Deine Zeit ist abgelaufen. <br>
    🖱️ Gesamtanzahl der Klicks: <strong>${totalClicks}</strong>
  `;

  setTimeout(() => {
    elements.messageDisplay.innerHTML += `
      <br><button onclick="restartGame()">🔁 Neu starten</button>`;
  }, 3000);
}

// === 🔁 Restart ===
function restartGame() {
  points = 0;
  level = 1;
  nextLevelThreshold = 10;
  timeLeft = 30;
  totalClicks = 0;
  musicStarted = true; // damit Musik nicht erneut startet
  elements.clickButton.disabled = false;

  elements.pointsDisplay.textContent = points;
  elements.levelDisplay.textContent = level;
  updateTimerDisplay();
  elements.messageDisplay.textContent = "";

  elements.timeBonus.classList.add("hidden"); // Bonus verstecken

  startGame(); // Spiel neu starten
}

// === 🔊 Sound & Musik ===
function playClickSound() {
  const sound = elements.clickSound;
  sound.volume = 0.2;
  sound.currentTime = 0;
  sound.play();
}

function playBackgroundMusic() {
  const music = elements.bgMusic;
  music.volume = 0.5;
  music.loop = true;
  music.play().catch(e => console.warn("Musik konnte nicht gestartet werden:", e));
}

// === 🌀 Cursor & Button-Magie ===
function updateCursor() {
  document.body.style.cursor = cursorStyles[currentCursorIndex];
  currentCursorIndex = (currentCursorIndex + 1) % cursorStyles.length;
}

function moveButtonRandomly() {
  const button = elements.clickButton;
  const maxX = window.innerWidth - button.offsetWidth;
  const maxY = window.innerHeight - button.offsetHeight;

  const newX = Math.floor(Math.random() * maxX);
  const newY = Math.floor(Math.random() * maxY);

  button.style.left = `${newX}px`;
  button.style.top = `${newY}px`;
}

// === 💬 Message Helper ===
function showTemporaryMessage(message) {
  elements.messageDisplay.textContent = message;
  setTimeout(() => elements.messageDisplay.textContent = "", 3000);
}

// === ⏱️ Zeit-Bonus ===
function spawnTimeBonus() {
  if (timeLeft <= 0) return;

  const bonus = elements.timeBonus;
  const maxX = window.innerWidth - bonus.offsetWidth;
  const maxY = window.innerHeight - bonus.offsetHeight;

  const x = Math.floor(Math.random() * maxX);
  const y = Math.floor(Math.random() * maxY);

  bonus.style.left = `${x}px`;
  bonus.style.top = `${y}px`;
  bonus.classList.remove("hidden");

  setTimeout(() => {
    bonus.classList.add("hidden");
  }, 3000);
}

// Bonus klicken
elements.timeBonus.addEventListener("click", () => {
  const bonusTime = Math.floor(Math.random() * 2) + 2; // 2 oder 3 Sekunden
  timeLeft += bonusTime;
  updateTimerDisplay();
  showTemporaryMessage(`⏱️ +${bonusTime} Sekunden!`);
  elements.timeBonus.classList.add("hidden");
});
