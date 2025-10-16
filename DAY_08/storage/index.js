// localStorage.setItem("사탕연회비", "5천원"); // 저장
// localStorage.getItem("사탕연회비");

const save = document.querySelector("#save");
const input = document.querySelector("#input");
const myconsole = document.querySelector("#console");

save.addEventListener("click", () => {
  if (localStorage.getItem("사탕리스트")) {
    const list = localStorage.getItem("사탕리스트");
    localStorage.setItem("사탕리스트", list + "," + input.value);
    input.value = "";
  } else {
    localStorage.setItem("사탕리스트", input.value); // 저장
    input.value = "";
  }
});

myconsole.addEventListener("click", () => {
  const list = localStorage.getItem("사탕리스트");
  console.log(list);
});
