/*
const r = document.querySelector("#r");
const o = document.querySelector("#o");
const y = document.querySelector("#y");
const g = document.querySelector("#g");
const b = document.querySelector("#b");
const p = document.querySelector("#p");

const arr = [r, o, y, g, b, p];
*/

import { keyframes, option } from "./animation.js";
import { arr } from "./query.js";
//.js 주의
// type="module" 주의

arr.forEach((v, i) => {
  v.animate(keyframes, { ...option, delay: 300 * i });
});
