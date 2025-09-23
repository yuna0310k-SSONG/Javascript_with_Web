const btn = document.createElement("button");
btn.innerText = "테스트";
btn.addEventListener("click", () => {
  alert("알림");
});
document.body.appendChild(btn);

const div = document.createElement("div");
div.innerText = "점메추";
div.addEventListener("click", () => {
  alert("오늘 점심은 ??");
});
document.body.appendChild(div);

//콜라 버튼 클릭하면 사이다로 바뀌는 코드
const coke = document.createElement("button");
coke.innerText = "콜라";
coke.addEventListener("click", () => {
  coke.innerText = "사이다";
});
document.body.appendChild(coke);

// 버튼 만들고 누를때마다 바뀌는 코드
const icon = document.createElement("button");
icon.innerText = "😶";
icon.addEventListener("click", () => {
  icon.innerText = icon.innerText === "😶" ? "😍" : "😶";
});
document.body.appendChild(icon);

// 버튼 클릭시 배경색 바꾸기
const check = document.createElement("button");
check.innerText = "✔";
check.style.backgroundColor = "white";
check.style.border = "none";
check.style.borderRadius = "1px";
check.style.transition = "0.5s";

check.addEventListener("click", () => {
  check.style.backgroundColor =
    check.style.backgroundColor === "white" ? "skyblue" : "white";
});
document.body.appendChild(check);
