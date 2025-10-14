// 버튼
const btn = document.querySelector("#btn");

//버튼 상태 바꾸는 함수
function updateButtonState() {
  const all = [
    id_type,
    id_length,
    pw_type,
    pw_num,
    pw_special,
    pw_length,
    email_type,
  ];
  const allGreen = all.every((el) => el.style.color === "green");

  btn.disabled = !allGreen; // 전부 green이면 활성화
  btn.style.backgroundColor = allGreen ? "green" : "rgb(168, 167, 167)";
}

// ID 검사
id.addEventListener("input", () => {
  const value = id.value;
  const pattern = /^[a-zA-Z0-9]+$/;

  const isValidType = pattern.test(value);
  const isValidLength = value.length >= 6 && value.length <= 20;

  id_type.style.color = isValidType ? "green" : "rgb(168, 167, 167)";
  id_length.style.color = isValidLength ? "green" : "rgb(168, 167, 167)";
  updateButtonState();
});

// PW 검사
pw.addEventListener("input", () => {
  const value = pw.value;

  const hasLetter = /[a-zA-Z]/.test(value);
  const hasNumber = /\d/.test(value);
  const hasSpecial = /[!@$%^*_+~]/.test(value);
  const validLength = value.length >= 8 && value.length <= 20;

  pw_type.style.color = hasLetter ? "green" : "rgb(168, 167, 167)";
  pw_num.style.color = hasNumber ? "green" : "rgb(168, 167, 167)";
  pw_special.style.color = hasSpecial ? "green" : "rgb(168, 167, 167)";
  pw_length.style.color = validLength ? "green" : "rgb(168, 167, 167)";
  updateButtonState();
});

// 🔸 이메일 검사
email.addEventListener("input", () => {
  const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const isValidEmail = pattern.test(email.value);

  email_type.style.color = isValidEmail ? "green" : "rgb(168, 167, 167)";
  updateButtonState();
});
