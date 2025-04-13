
const whisperText = document.getElementById("whisper");
const audio = document.getElementById("bg-audio");
const phrases = [
  "Он уже здесь...",
  "Ты чувствуешь его дыхание?",
  "Он не уйдёт.",
  "Слишком поздно...",
  "Ты сделал это.",
];

let index = 0;

document.body.addEventListener("mousemove", (e) => {
  const x = (e.clientX / window.innerWidth - 0.5) * 20;
  const y = (e.clientY / window.innerHeight - 0.5) * 20;
  document.body.style.transform = `translate(${x}px, ${y}px)`;
});

setInterval(() => {
  whisperText.textContent = phrases[index];
  index = (index + 1) % phrases.length;
}, 4000);

window.addEventListener("click", () => {
  audio.play();
});
