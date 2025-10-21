// board.js
import { ASSETS, GAME, refs } from "./config.js";

export function createBoard() {
  const { board } = refs;
  if (!board) return;
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

    const gold = document.createElement("img");
    gold.className = "gold is-hidden";
    gold.src = ASSETS.gold;

    const bomb = document.createElement("img");
    bomb.className = "bomb is-hidden";
    bomb.src = ASSETS.bomb;

    const hit = document.createElement("button");
    hit.className = "hit"; // 클릭 가능 여부는 CSS .hit.active로 제어

    hole.append(holeImg, mole, gold, bomb, hit);
    board.appendChild(hole);
  }
}
