//자바 스크립트로 버튼 만들기

const btn = document.createElement("button");
btn.innerText = "월요일";
document.body.appendChild(btn);

const tomorrow = document.createElement("div");
tomorrow.innerText = "내일은 화요일";
document.body.appendChild(tomorrow);

const coupang = document.createElement("a");
coupang.innerText = " 쿠팡이동";

document.body.appendChild(coupang);
