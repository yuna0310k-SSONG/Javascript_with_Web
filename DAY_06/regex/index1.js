/*const hasCat = /cat/;

const myStr = " my happy cat";
console.log(myStr.match(hasCat));
*/
const input = document.querySelector("#input");
const p = document.querySelector("#p");

input.addEventListener("input", () => {
  if (input.value.match(/\bcat\b/)) {
    p.innerHTML = "😻야옹😻";
  } else {
    p.innerHTML = "고양이 없음";
  }
});
