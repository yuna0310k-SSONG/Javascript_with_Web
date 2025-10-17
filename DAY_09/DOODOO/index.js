const board = document.querySelector("#board");
const scoreEl = document.querySelector("#score");
const comboEl = document.querySelector("#combo");
const timeEl = document.querySelector("#time");
const startBtn = document.querySelector("#start");

// 이미지 경로
const ASSETS = {
  mole: "./doodoo.png", // 🐹 두더지 이미지
  hole: "./hole.png", // 🕳️ 구멍 이미지
};

const GAME = {
  rows: 3,
  cols: 3,
  duration: 30,
  minUp: 700,
  maxUp: 1200,
  gap: [400, 650],
  running: false,
  score: 0,
  combo: 0,
  last: -1,
  tTimer: null,
  tLoop: null,
};

function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function createBoard() {
  board.innerHTML = "";
  const total = GAME.rows * GAME.cols;
  for (let i = 0; i < total; i++) {
    const hole = document.createElement("article");
    hole.className = "hole";
    hole.dataset.idx = i;

    const holeImg = document.createElement("img");
    holeImg.className = "hole-img";
    holeImg.src = ASSETS.hole;

    const mole = document.createElement("img");
    mole.className = "mole";
    mole.src = ASSETS.mole;

    const hit = document.createElement("button");
    hit.className = "hit";
    hit.type = "button";

    hole.append(holeImg, mole, hit);
    board.appendChild(hole);
  }
}

function pickHole() {
  const total = GAME.rows * GAME.cols;
  let i = rand(0, total - 1);
  if (i === GAME.last) i = (i + 1) % total;
  GAME.last = i;
  return document.querySelector(`.hole[data-idx="${i}"]`);
}

function popOnce() {
  if (!GAME.running) return;
  const hole = pickHole();
  const hit = hole.querySelector(".hit");
  let hitOnce = false;
  hole.classList.add("show");

  const upTime = rand(GAME.minUp, GAME.maxUp);

  const onHit = () => {
    if (hitOnce || !GAME.running) return;
    hitOnce = true;
    GAME.score++;
    GAME.combo++;
    scoreEl.textContent = GAME.score;
    comboEl.textContent = GAME.combo;
    hole.classList.add("flash");
    setTimeout(() => hole.classList.remove("show", "flash"), 200);
  };
  hit.addEventListener("click", onHit, { once: true });

  setTimeout(() => {
    if (!hitOnce) {
      GAME.combo = 0;
      comboEl.textContent = 0;
    }
    hole.classList.remove("show", "flash");
  }, upTime);

  const gap = rand(GAME.gap[0], GAME.gap[1]);
  GAME.tLoop = setTimeout(popOnce, gap);
}

function startGame() {
  if (GAME.running) return;
  GAME.running = true;
  startBtn.disabled = true;
  GAME.score = 0;
  GAME.combo = 0;
  scoreEl.textContent = 0;
  comboEl.textContent = 0;
  timeEl.textContent = GAME.duration;

  let remain = GAME.duration;
  GAME.tTimer = setInterval(() => {
    remain--;
    timeEl.textContent = remain;
    if (remain <= 0) endGame();
  }, 1000);

  popOnce();
}

function endGame() {
  GAME.running = false;
  startBtn.disabled = false;
  clearInterval(GAME.tTimer);
  clearTimeout(GAME.tLoop);
  document
    .querySelectorAll(".hole")
    .forEach((h) => h.classList.remove("show", "flash"));
  alert(`게임 끝! 점수: ${GAME.score} (최대 콤보: ${GAME.combo})`);
}

createBoard();
startBtn.addEventListener("click", startGame);
