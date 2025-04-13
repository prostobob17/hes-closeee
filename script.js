
const startButton = document.getElementById("start-button");
const mainContent = document.getElementById("main-content");
const startScreen = document.getElementById("start-screen");
const whisper = document.getElementById("whisper");
const seeButton = document.getElementById("see-button");
const prayButton = document.getElementById("pray-button");
const seeSection = document.getElementById("see-section");
const praySection = document.getElementById("pray-section");

const phrases = [
  "Он уже рядом...",
  "Ты чувствуешь, как он дышит?",
  "Он слышит твои мысли.",
  "Слишком поздно уйти.",
  "Ты открыл дверь."
];

startButton.addEventListener("click", () => {
  startScreen.classList.add("hidden");
  mainContent.classList.remove("hidden");
});

let i = 0;
setInterval(() => {
  if (!mainContent.classList.contains("hidden")) {
    whisper.textContent = phrases[i];
    i = (i + 1) % phrases.length;
  }
}, 4000);

seeButton.addEventListener("click", () => {
  seeSection.classList.remove("hidden");
  praySection.classList.add("hidden");
});

prayButton.addEventListener("click", () => {
  document.getElementById("bg-audio").pause();
  praySection.classList.remove("hidden");
  seeSection.classList.add("hidden");
});
