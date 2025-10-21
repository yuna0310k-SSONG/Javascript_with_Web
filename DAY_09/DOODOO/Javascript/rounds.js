// rounds.js
import {
  ASSETS,
  GAME,
  refs,
  rand,
  pickHole,
  forceHideAll,
  scheduleNext,
  spawnSparkles,
} from "./config.js";

export function popOnce() {
  if (!GAME.running) return;

  // 남은 상태 있으면 강제 초기화(겹침 차단)
  forceHideAll();

  const hole = pickHole();
  if (!hole) {
    scheduleNext(200, popOnce);
    return;
  }

  // 유령 리스너 차단: hit 교체
  const oldHit = hole.querySelector(".hit");
  const hit = oldHit.cloneNode(true);
  oldHit.replaceWith(hit);

  const mole = hole.querySelector(".mole");
  const gold = hole.querySelector(".gold");
  const bomb = hole.querySelector(".bomb");

  // 라운드 준비
  hole.classList.remove("show", "gold-show", "bomb-show", "bomb-hit");
  gold.classList.remove("gold-fly");
  gold.classList.add("is-hidden");
  bomb.classList.add("is-hidden");
  hit.classList.add("active");

  const r = Math.random();
  const isBomb = r < GAME.bombChance;
  const isGold = !isBomb && r < GAME.bombChance + GAME.goldChance;

  if (isBomb) {
    bomb.classList.remove("is-hidden");
    hole.classList.add("bomb-show"); // ✅ .show 붙이지 않음
  } else if (isGold) {
    gold.classList.remove("is-hidden");
    hole.classList.add("gold-show"); // ✅ .show 붙이지 않음
  } else {
    hole.classList.add("show"); // 🐹 일반 두더지일 때만 .show
  }

  let hitOnce = false;
  const upTime = rand(GAME.minUp, GAME.maxUp);

  // 혹시 이전 hide 타이머 살아있으면 취소 → 단일 흐름 보장
  clearTimeout(GAME.tHide);

  const endRound = () => {
    hit.classList.remove("active");
    hole.classList.remove("show", "gold-show", "bomb-show", "bomb-hit");
    gold.classList.add("is-hidden");
    bomb.classList.add("is-hidden");
  };

  const onHit = () => {
    if (hitOnce || !GAME.running) return;
    hitOnce = true;

    // 이 라운드의 hide 타이머 취소 후 즉시 처리
    clearTimeout(GAME.tHide);
    hit.classList.remove("active");

    if (isBomb) {
      GAME.score = 0;
      GAME.combo = 0;
      refs.scoreEl.textContent = 0;
      refs.comboEl.textContent = 0;

      hole.classList.add("bomb-hit");
      setTimeout(() => {
        endRound();
        scheduleNext(rand(GAME.gap[0], GAME.gap[1]), popOnce);
      }, 450);
    } else if (isGold) {
      GAME.score = GAME.score === 0 ? 2 : GAME.score * 2;
      GAME.combo++;
      refs.scoreEl.textContent = GAME.score;
      refs.comboEl.textContent = GAME.combo;

      gold.classList.add("gold-fly"); // CSS 애니메이션
      const rect = hole.getBoundingClientRect();
      spawnSparkles(hole, rect.width / 2, rect.height / 2, 10);

      setTimeout(() => {
        endRound();
        scheduleNext(rand(GAME.gap[0], GAME.gap[1]), popOnce);
      }, 600);
    } else {
      mole.src = ASSETS.moleWow;
      GAME.score++;
      GAME.combo++;
      refs.scoreEl.textContent = GAME.score;
      refs.comboEl.textContent = GAME.combo;

      setTimeout(() => {
        mole.src = ASSETS.mole;
        endRound();
        scheduleNext(rand(GAME.gap[0], GAME.gap[1]), popOnce);
      }, 400);
    }
  };

  hit.addEventListener("click", onHit, { once: true });

  // 미스/시간만료 → 여기서만 다음 라운드 예약(단일)
  GAME.tHide = setTimeout(() => {
    if (!hitOnce) {
      hit.classList.remove("active");
      if (!isBomb) {
        GAME.combo = 0;
        refs.comboEl.textContent = 0;
        mole && (mole.src = ASSETS.moleSad);
      }
    }
    endRound();
    scheduleNext(rand(GAME.gap[0], GAME.gap[1]), popOnce);
  }, upTime);
}
