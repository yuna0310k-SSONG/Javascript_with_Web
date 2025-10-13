// const a = new Date();
// console.log(a.getHours());
// console.log(a.getSeconds());

// 초기 시간 표시
const a = new Date();
const time = document.createElement("h3");
time.innerText = `현재 시간은 : ${a.getHours()}시 ${a.getMinutes()}분 ${a.getSeconds()}초`;
document.body.appendChild(time);

// 버튼 만들기
const btn = document.createElement("button");
btn.innerText = "시간 갱신";
document.body.appendChild(btn);

// 버튼 클릭 시 시간 갱신
btn.addEventListener("click", () => {
  const now = new Date();
  time.innerText = `현재 시간은 : ${now.getHours()}시 ${now.getMinutes()}분 ${now.getSeconds()}초`;
});
