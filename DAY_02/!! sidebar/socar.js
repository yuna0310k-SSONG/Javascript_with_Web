const hamburger = document.querySelector("#hamburger");
const close = document.querySelector("#close");
const sidebar = document.querySelector("#sidebar");

hamburger.addEventListener("click", () => {
  sidebar.classList.remove("hidden");
});

close.addEventListener("click", () => {
  sidebar.classList.add("hidden");
});
