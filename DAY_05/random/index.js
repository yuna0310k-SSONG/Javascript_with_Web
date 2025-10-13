const title = document.querySelector("#title");
const input = document.querySelector("#input");
const btn = document.querySelector("#btn");
const btnReset = document.querySelector("#btnReset");
const answer = document.querySelector("#answer");
const chance = document.querySelector("#chance");

// 게임 상태
const game = {
  answer: Math.floor(Math.random() * 100) + 1,
  chances: 5,
  lastInput: null, // 🔹 직전 입력 저장
};
console.log("정답:", game.answer);

// Go 버튼 클릭 시 실행
btn.addEventListener("click", () => {
  const userNum = Number(input.value);

  // 입력이 비었을 때
  if (!input.value.trim()) {
    answer.innerText = "숫자를 입력하세요";
    answer.style.color = "red";
    return;
  }

  // 🔹 같은 숫자를 다시 입력했을 경우
  if (userNum === game.lastInput) {
    answer.innerText = "같은 숫자를 다시 입력했습니다 (기회 차감 안 됨)";
    answer.style.color = "gray";
    return; // 기회 차감 X
  } else if (userNum > 100 || userNum <= 0) {
    answer.innerText = "0이상 100 이하 수를 입력하세요";
    answer.style.color = "gray";
    return;
  } // 기회 차감 X

  // 🔹 새로운 입력이면 저장
  game.lastInput = userNum;

  if (game.chances <= 0) {
    answer.innerText = `기회가 없습니다! 정답은 ${game.answer} `;
    answer.style.color = "red";
    return;
  }

  if (userNum < game.answer) {
    answer.innerText = "UP ⬆️";
    answer.style.color = "blue";
  } else if (userNum > game.answer) {
    answer.innerText = "DOWN ⬇️";
    answer.style.color = "orange";
  } else if (userNum === game.answer) {
    answer.innerText = "정답! 축하합니다!";
    answer.style.color = "green";
    btn.disabled = true;
  } else {
    answer.innerText = "올바른 수를 입력해주세요";
    answer.style.color = "red";
    return;
  }

  game.chances--;
  chance.innerText = `남은 도전 기회 : ${game.chances}`;

  if (game.chances === 0 && userNum !== game.answer) {
    answer.innerText = `기회 끝! 정답은 ${game.answer} 💥`;
    answer.style.color = "red";
    title.innerText = "Reset을 눌러 새 게임을 시작하세요!";
    btn.disabled = true;
  }
});

// Reset 버튼 클릭 시 새 게임
btnReset.addEventListener("click", () => {
  window.location.reload(); // 현재 페이지 새로고침
});
