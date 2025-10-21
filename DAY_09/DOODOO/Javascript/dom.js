// dom.js
export function initRefs(refs) {
  refs.board = document.querySelector("#board");
  refs.scoreEl = document.querySelector("#score");
  refs.comboEl = document.querySelector("#combo");
  refs.timeEl = document.querySelector("#time");
  refs.startBtn = document.querySelector("#start");
  refs.levelBtns = Array.from(document.querySelectorAll(".level-btn"));
  refs.TIME_LABEL = refs.timeEl
    ? (refs.timeEl.textContent.match(/^\D+/)?.[0] || "").trim()
    : "";
}
