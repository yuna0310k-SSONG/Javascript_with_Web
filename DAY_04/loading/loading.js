const loading = document.querySelector("#loading");

window.addEventListener("load", () => {
  setTimeout(() => {
    loading.style.display = "none";
  }, 2000);
});
