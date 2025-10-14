/*
console.log("=== 1️⃣ i : 대소문자 구분 없음 (ignoreCase) ===");
const regex_i = /cat/i;
console.log(regex_i.test("CAT")); // true
console.log(regex_i.test("Cat")); // true
console.log(regex_i.test("dog")); // false

console.log("\n=== 2️⃣ g : 전체(global) 검색 ===");
const str_g = "cat dog cat dog cat";
console.log(str_g.match(/cat/g)); // ["cat", "cat", "cat"]
*/

const news = document.querySelector("#news");
const find = document.querySelector("#find");
const hasword = document.querySelector("#hasword");
const count = document.querySelector("#count");

find.addEventListener("input", () => {
  const valueRegex = new RegExp(`\\b${word.value}\\b`, "gi"); //특수 사항

  const test = valueRegex.test(news.value);
  hasword.innerHTML = valueRegex.test(news.value) ? "있음" : "없음";
  count.innerText = `${news.value.match(valueRegex).length}개`;
});
