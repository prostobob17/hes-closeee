
const startButton = document.getElementById("start-button");
const mainContent = document.getElementById("main-content");
const startScreen = document.getElementById("start-screen");
const whisper = document.getElementById("whisper");
const seeButton = document.getElementById("see-button");
const prayButton = document.getElementById("pray-button");
const seeSection = document.getElementById("see-section");
const praySection = document.getElementById("pray-section");
const bgAudio = document.getElementById("bg-audio");

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
  bgAudio.play();
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
  prayButton.style.display = "none";
});

prayButton.addEventListener("click", () => {
  bgAudio.pause();
  praySection.classList.remove("hidden");
  seeSection.classList.add("hidden");
  seeButton.style.display = "none";
});

// Эффект на курсор
document.addEventListener("mousemove", (e) => {
  const x = (e.clientX / window.innerWidth - 0.5) * 30;
  const y = (e.clientY / window.innerHeight - 0.5) * 30;
  document.body.style.filter = `contrast(1.1) brightness(0.95) hue-rotate(${x + y}deg)`;
});


// Плавное движение кнопок за курсором
const buttons = document.querySelectorAll("button");
document.addEventListener("mousemove", (e) => {
  buttons.forEach(btn => {
    const rect = btn.getBoundingClientRect();
    const dx = (e.clientX - (rect.left + rect.width / 2)) / 50;
    const dy = (e.clientY - (rect.top + rect.height / 2)) / 50;
    btn.style.transform = `translate(${dx}px, ${dy}px)`;
  });
});
