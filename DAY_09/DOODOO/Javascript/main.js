import {
  GAME,
  refs,
  ensureDurationUI,
  setTimeUI,
  setLevel,
  forceHideAll,
} from "./config.js";
import { initRefs } from "./dom.js"; // 👈 추가된 부분
import { createBoard } from "./board.js";
import { popOnce } from "./rounds.js";

window.addEventListener("DOMContentLoaded", () => {
  // 🔹 초기 refs 설정 분리
  initRefs(refs);

  ensureDurationUI();

  // 난이도 선택
  let selectedLevel = "normal";
  refs.levelBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      if (GAME.running) return;
      refs.levelBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      selectedLevel = btn.dataset.level;
    });
  });

  function startGame() {
    if (GAME.running) return;
    GAME.running = true;

    refs.startBtn.disabled = true;
    refs.levelBtns.forEach((b) => (b.disabled = true));

    GAME.score = 0;
    GAME.combo = 0;
    refs.scoreEl.textContent = 0;
    refs.comboEl.textContent = 0;

    // 사용자 입력 먼저
    const rawInput = document.querySelector("#duration")?.value ?? "";
    const userSeconds = (() => {
      const n = parseInt(rawInput, 10);
      if (Number.isNaN(n)) return null;
      return Math.min(300, Math.max(5, n));
    })();

    // 난이도 세팅
    setLevel(selectedLevel);

    // duration 덮어쓰기
    const seconds = userSeconds ?? GAME.duration;
    GAME.duration = seconds;
    setTimeUI(seconds);

    // 데드라인 타이머
    const deadline = Date.now() + seconds * 1000;
    function tick() {
      const leftMs = deadline - Date.now();
      const left = Math.max(0, Math.ceil(leftMs / 1000));
      setTimeUI(left);
      if (!GAME.running) return;
      if (left <= 0) return endGame();
      clearTimeout(GAME.tTimer);
      GAME.tTimer = setTimeout(tick, 200);
    }
    clearTimeout(GAME.tTimer);
    clearInterval(GAME.tTimer);
    tick();

    if (!document.querySelector(".hole")) createBoard();
    popOnce();
  }

  function endGame() {
    GAME.running = false;
    refs.startBtn.disabled = false;
    refs.levelBtns.forEach((b) => (b.disabled = false));

    clearInterval(GAME.tTimer);
    clearTimeout(GAME.tTimer);
    clearTimeout(GAME.tLoop);
    clearTimeout(GAME.tHide);

    forceHideAll();
    setTimeUI(0);
    alert(`게임 끝! 점수: ${GAME.score} (최대 콤보: ${GAME.combo})`);
  }

  createBoard();
  refs.startBtn.addEventListener("click", startGame);
});
