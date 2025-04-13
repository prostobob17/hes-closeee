
const audio = document.getElementById("bg-audio");
const whisperText = document.getElementById("whisper");
const phrases = [
  "Он уже здесь...",
  "Ты чувствуешь его дыхание?",
  "Он не уйдёт.",
  "Слишком поздно...",
  "Ты сделал это.",
];

let index = 0;
setInterval(() => {
  whisperText.textContent = phrases[index];
  index = (index + 1) % phrases.length;
}, 4000);

document.getElementById("see").addEventListener("click", () => {
  document.getElementById("see-text").classList.remove("hidden");
  document.getElementById("see-text").textContent =
    "до скорого времени, лицо его будет засекречено.\nГрядет anokaldsflсNNNс.\nЯ уже слышу гул, но он не приятный, он пугающий.\nВЫ ТАКОГО ЕЩЕ НЕ СЛЫШАЛИ.\nВы все будете завидовать глухим, а зрячие — слепым.";
});

document.getElementById("pray").addEventListener("click", () => {
  audio.pause();
  document.getElementById("pray-text").classList.remove("hidden");
  document.getElementById("pray-text").textContent = "ты больше не один...";
});

setTimeout(() => {
  document.getElementById("end-text").classList.remove("hidden");
}, 5040);
