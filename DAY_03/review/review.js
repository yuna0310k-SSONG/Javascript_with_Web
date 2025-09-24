const btnLondon = document.querySelector("#btnLondon");
const btnParis = document.querySelector("#btnParis");
const btnTokyo = document.querySelector("#btnTokyo");

const London = document.querySelector("#London");
const Paris = document.querySelector("#Paris");
const Tokyo = document.querySelector("#Tokyo");

btnLondon.addEventListener("click", () => {
  London.classList.toggle("hidden");
  Paris.classList.add("hidden");
  Tokyo.classList.add("hidden");
});
btnParis.addEventListener("click", () => {
  Paris.classList.toggle("hidden");
  London.classList.add("hidden");
  Tokyo.classList.add("hidden");
});
btnTokyo.addEventListener("click", () => {
  Tokyo.classList.toggle("hidden");
  London.classList.add("hidden");
  Paris.classList.add("hidden");
});
