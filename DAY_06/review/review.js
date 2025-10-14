const pw = document.querySelector("#pw");
const repw = document.querySelector("#repw");
const btn = document.querySelector("#btn");
const message = document.querySelector("#massage");

// 입력 시마다 검사
[pw, repw].forEach((input) => {
  input.addEventListener("input", () => {
    if (pw.value === "" || repw.value === "") {
      message.innerText = "입력 해주세요 !";
      return;
    }

    if (pw.value === repw.value) {
      btn.disabled = false;
      message.innerText = "⭕일치⭕";
    } else {
      btn.disabled = true;
      message.innerText = "일치하지 않습니다";
    }
  });
});

// 버튼 클릭 시
btn.addEventListener("click", () => {
  alert("🎉비밀번호 확인 완료!");
});
