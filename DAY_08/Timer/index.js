const ready = document.querySelector("#ready");
const go = document.querySelector("#go");

const countdown = (n) => {
  if (n === 0) {
    ready.innerHTML = "🚀";

    return;
  }
  ready.innerHTML = `발사 ${n}초전`;
  setTimeout(() => countdown(n - 1), 1000);
};
go.addEventListener("click", () => countdown(5));
// location.reload();
