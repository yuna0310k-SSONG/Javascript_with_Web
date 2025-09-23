/*const a = document.querySelector(".box");
console.log(a);

a.innerText = "텐동";
*/

//htnl에서 id는 # / class는 .

const num = document.querySelector("#num");

const down = document.querySelector("#down");
down.style.border = "none";
down.addEventListener("click", () => {
  if (Number(num.innerText) > 0) {
    // 클릭할 때 검사
    num.innerText = Number(num.innerText) - 1;
  }
  if (+num.innerText > 5) {
    up.classList.add("overFive");
  } else if (+num.innerText < 3) {
    down.classList.add("underthree");
  } else if (+num.innerText > 3) {
    down.classList.remove("underthree");
  } else {
    up.classList.remove("overFive");
  }
  num.style.color = +num.innerText > 10 ? "blue" : "black";
});

const up = document.querySelector("#up");
up.style.border = "none";
up.addEventListener("click", () => {
  num.innerText = Number(num.innerText) + 1;
  num.style.color = +num.innerText > 10 ? "blue" : "black";
  // up.className = +num.innerText > 5 ? "myButton overFive" : "myButton";
  // console.log(up.className);
  if (+num.innerText > 5) {
    up.classList.add("overFive");
  } else if (+num.innerText < 3) {
    down.classList.add("underthree");
  } else if (+num.innerText > 3) {
    down.classList.remove("underthree");
  } else {
    up.classList.remove("overFive");
  }
});
