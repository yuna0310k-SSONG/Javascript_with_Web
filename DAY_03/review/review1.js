const capitalList = document.querySelector("#capitalList");
const capital = document.querySelector("#capital");
const desc = document.querySelector("#desc");

const data = [
  { nation: "England", capital: "London" },
  { nation: "japan", capital: "Tokyo" },
  { nation: "Frace", capital: "Faris" },
];

data.forEach((v) => {
  const newli = document.createElement("li");
  newli.innerText = v.capital;
  newli.id = v.capital;
  newli.addEventListener("click", () => {
    capital.innerText = v.capital;
    desc.innerText = `${v.capital}is 어쪄구 ${v.nation}`;
  });
  capitalList.appendChild(newli);
});
