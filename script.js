// ===== СЧЁТЧИК ДНЕЙ ВМЕСТЕ =====
// Дата начала отношений: 13 апреля 2026
const startDate = new Date(2026, 3, 13);

function updateTimer() {
  const now = new Date();
  // Считаем "чистые" дни: обнуляем время у обеих дат
  const startDay = new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate());
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const days = Math.floor((today - startDay) / (1000 * 60 * 60 * 24));

  document.getElementById("timer").innerText =
    "Мы вместе уже " + days + " дней ❤️";
}
updateTimer();
// Обновляем раз в минуту — если открыто в полночь, число само перескочит
setInterval(updateTimer, 60000);

// ===== КНОПКА С ОДНИМ ПОСТОЯННЫМ СООБЩЕНИЕМ =====
document.getElementById("loveButton").onclick = function () {
  const secret = document.getElementById("secret");

  // Небольшая анимация "перезапуска"
  secret.style.display = "none";
  secret.innerText = "Ты делаешь меня счастливым просто тем, что ты есть 💋";

  setTimeout(() => {
    secret.style.display = "block";
  }, 30);
};

// ===== ПАДАЮЩИЕ СЕРДЕЧКИ =====
function createHeart() {
  const heart = document.createElement("div");
  const emojis = ["❤️", "💖", "💕", "💗", "💘", "🌸"];
  heart.innerText = emojis[Math.floor(Math.random() * emojis.length)];
  heart.style.position = "fixed";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.top = "-60px";
  heart.style.fontSize = Math.random() * 20 + 18 + "px";
  heart.style.pointerEvents = "none";
  heart.style.zIndex = "9999";
  heart.style.transition = "transform 5s linear, opacity 5s linear";
  document.body.appendChild(heart);

  setTimeout(() => {
    heart.style.transform = "translateY(110vh) rotate(360deg)";
    heart.style.opacity = "0";
  }, 50);

  setTimeout(() => heart.remove(), 5100);
}
setInterval(createHeart, 700);

// ===== КЛИК В ЛЮБОМ МЕСТЕ — СЕРДЕЧКО =====
document.addEventListener("click", function (e) {
  // Не спамим сердечком, если кликнули по кнопке
  if (e.target.id === "loveButton") return;

  const burst = document.createElement("div");
  burst.innerText = "💖";
  burst.style.position = "fixed";
  burst.style.left = e.clientX + "px";
  burst.style.top = e.clientY + "px";
  burst.style.fontSize = "30px";
  burst.style.pointerEvents = "none";
  burst.style.zIndex = "9999";
  burst.style.transition = "transform 0.8s, opacity 0.8s";
  document.body.appendChild(burst);

  setTimeout(() => {
    burst.style.transform = "translateY(-80px) scale(1.8)";
    burst.style.opacity = "0";
  }, 20);

  setTimeout(() => burst.remove(), 900);
});

// ===== ЗАГОЛОВОК ВКЛАДКИ: "Специально Для Любимой Девчули" =====
const titleWords = ["Специально", "Для", "Любимой", "Девчули"];
const fullTitle = titleWords.join(" ");
let titleIndex = 0;

// Первое значение ставим сразу — целиком
document.title = fullTitle;

// Дальше — по одному слову каждые 2 секунды, по кругу
setInterval(() => {
  document.title = titleWords[titleIndex];
  titleIndex = (titleIndex + 1) % titleWords.length;
}, 2000);