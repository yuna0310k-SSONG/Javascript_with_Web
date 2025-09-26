const num = document.createElement("p");
num.innerText = 0;
num.style.width = "20px";

const down = document.createElement("button");
down.innerText = "-";
down.addEventListener("click", () => {
  if (Number(num.innerText) > 0) {
    // 클릭할 때 검사
    num.innerText = Number(num.innerText) - 1;
  }
  num.style.color = +num.innerText > 10 ? "blue" : "black";
});

const up = document.createElement("button");
up.innerText = "+";
up.style.backgroundColor = "white";

up.addEventListener("click", () => {
  num.innerText = Number(num.innerText) + 1;
  num.style.color = +num.innerText > 10 ? "blue" : "black";
});

document.body.appendChild(down);
document.body.appendChild(num);
document.body.appendChild(up);
