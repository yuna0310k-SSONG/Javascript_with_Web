// 경로 유틸(안전)
const IMG = (f) => new URL(`../img/${f}`, import.meta.url).href;

export const ASSETS = {
  mole: IMG("doodoo.png"),
  moleWow: IMG("doodoowow.png"),
  moleSad: IMG("doodoosad.png"),
  hole: IMG("hole.png"),
  bomb: IMG("bomb.png"),
  explode: IMG("explode.png"),
  gold: IMG("goldDoo.png"),
};

export const GAME = {
  rows: 3,
  cols: 3,
  duration: 20,
  minUp: 700,
  maxUp: 1200,
  gap: [400, 650],
  bombChance: 0.18,
  goldChance: 0.1,
  running: false,
  score: 0,
  combo: 0,
  last: -1,
  tTimer: null,
  tLoop: null,
  tHide: null,
};

export const refs = {
  board: null,
  scoreEl: null,
  comboEl: null,
  timeEl: null,
  startBtn: null,
  levelBtns: [],
  TIME_LABEL: "",
};

export const rand = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

export function getDurationFromInput() {
  const el = document.querySelector("#duration");
  if (!el) return null;
  const v = parseInt(el.value, 10);
  if (Number.isNaN(v)) return null;
  return Math.min(300, Math.max(5, v)); // 5~300 클램프
}

export function setTimeUI(v) {
  const { timeEl } = refs;
  if (timeEl) {
    if (["INPUT", "TEXTAREA"].includes(timeEl.tagName)) timeEl.value = v;
    else
      timeEl.textContent = refs.TIME_LABEL ? `${refs.TIME_LABEL} ${v}` : `${v}`;
  }
  const input = document.querySelector("#duration");
  if (input) input.value = v;
}

export function ensureDurationUI() {
  const { startBtn } = refs;
  if (document.querySelector("#duration") || !startBtn) return;
  const wrap = document.createElement("label");
  wrap.className = "duration-wrap";
  wrap.innerHTML = `시간: <input id="duration" type="number" min="5" max="300" value="20" placeholder="초 단위" /> s`;
  startBtn.parentNode.insertBefore(wrap, startBtn);
}

export function forceHideAll() {
  document.querySelectorAll(".hole").forEach((h) => {
    h.classList.remove("show", "gold-show", "bomb-show", "bomb-hit");
    h.querySelector(".gold")?.classList.add("is-hidden");
    h.querySelector(".bomb")?.classList.add("is-hidden");
    h.querySelector(".hit")?.classList.remove("active");
    const m = h.querySelector(".mole");
    if (m) m.src = ASSETS.mole;
  });
}

export function scheduleNext(ms, popOnce) {
  clearTimeout(GAME.tLoop);
  GAME.tLoop = setTimeout(() => {
    if (GAME.running) popOnce();
  }, ms);
}

export function setLevel(lv) {
  if (lv === "easy") {
    GAME.minUp = 1300;
    GAME.maxUp = 2000;
    GAME.gap = [900, 1200];
    GAME.duration = 30;
    GAME.bombChance = 0.1;
    GAME.goldChance = 0.15;
  } else if (lv === "hard") {
    GAME.minUp = 300;
    GAME.maxUp = 600;
    GAME.gap = [150, 300];
    GAME.duration = 15;
    GAME.bombChance = 0.3;
    GAME.goldChance = 0.08;
  } else {
    GAME.minUp = 700;
    GAME.maxUp = 1100;
    GAME.gap = [400, 600];
    GAME.duration = 20;
    GAME.bombChance = 0.18;
    GAME.goldChance = 0.12;
  }
  setTimeUI(GAME.duration);
}

export function pickHole() {
  const total = GAME.rows * GAME.cols;
  let i = rand(0, total - 1);
  if (i === GAME.last) i = (i + 1) % total;
  GAME.last = i;
  return document.querySelector(`.hole[data-idx="${i}"]`);
}

export function spawnSparkles(container, x, y, count = 10) {
  const colors = ["c1", "c2", "c3"];
  for (let i = 0; i < count; i++) {
    const s = document.createElement("div");
    s.className = `sparkle ${colors[rand(0, colors.length - 1)]}`;
    const size = rand(4, 8);
    s.style.cssText = `left:${x}px;top:${y}px;width:${size}px;height:${size}px;`;
    container.appendChild(s);
    const ang = Math.random() * Math.PI * 2,
      dist = rand(20, 60);
    const dx = Math.cos(ang) * dist,
      dy = Math.sin(ang) * dist;
    s.animate(
      [
        { transform: "translate(0,0) scale(1)", opacity: 1 },
        { transform: `translate(${dx}px,${dy}px) scale(0.2)`, opacity: 0 },
      ],
      { duration: 500, easing: "ease-out" }
    ).onfinish = () => s.remove();
  }
}
