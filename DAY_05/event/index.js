const input = document.querySelector("#input");
// const btn = document.querySelector("#btn");

/*
btn.addEventListener("click", () => {
  input.type = input.type === "password" ? "text" : "password";
});
*/
const span = document.querySelector("#span");

input.addEventListener("input", (e) => {
  const value = e.target.value;
  //   if (value.length > 5) {
  //     e.target.value = value.slice(0,5); // 0~4까지만 남기기
  //   } // maxlength="5" 으로 대체
  span.innerHTML = `${e.target.value.length} /5`;
});

// input 안에 무언가를 넣으면
// console.log(e.target); // <input id="input" type="text">
// e.target 은 이벤트가 발생한 “요소(태그)” 자체
//value는 사용자가 입력한 내용
