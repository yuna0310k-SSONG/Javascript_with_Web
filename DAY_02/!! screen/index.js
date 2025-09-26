const btn = document.querySelector("#menu");
const screen = document.querySelector("#screen");

btn.addEventListener("click", () => {
  screen.classList.toggle("show");
  screen.classList.toggle("hidden");
});
