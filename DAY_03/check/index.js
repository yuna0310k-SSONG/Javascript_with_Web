const checkbox = document.querySelector("#checkbox");

const confirmBtn = document.querySelector("#confirm");

checkbox.addEventListener(
  "click",
  () => (confirmBtn.disabled = !checkbox.checked)
);
