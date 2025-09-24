const liList = document.querySelector("#liList");
const title = document.querySelector("#title");
const sub = document.querySelector("#sub");
const section = document.querySelector("#section");

const data = [
  { title: "Home", sub: "home 어쪄구 저쪄궁", color: "violet" },
  { title: "News", sub: "News 어쪄구 저쪄궁", color: "yellowgreen" },
  { title: "contact", sub: "contact 저쪄궁", color: "skyblue" },
  { title: "About", sub: "About 어쪄구 저쪄궁", color: "pink" },
];

data.forEach((v) => {
  const newli = document.createElement("li");
  newli.innerText = v.title;
  newli.id = v.title;

  newli.addEventListener("click", () => {
    // 1. 모든 li 배경을 흰색으로 초기화
    liList.querySelectorAll("li").forEach((li) => {
      li.style.backgroundColor = "white";
    });

    // 2. 클릭한 li만 색 적용
    title.innerText = v.title;
    sub.innerText = v.sub;
    newli.style.backgroundColor = v.color;

    // 3. section 배경도 클릭한 색으로 적용
    section.style.backgroundColor = v.color;
  });

  liList.appendChild(newli);
});

// data.forEach((v) => {
//   const newli = document.createElement("li");
//   newli.innerText = v.title;
//   newli.id = v.title;

//   newli.addEventListener("click", () => {
//     title.innerText = v.title;
//     sub.innerText = v.sub;
//     newli.style.backgroundColor = v.color;
//     section.style.backgroundColor = v.color;
//   });

//   newli.style.backgroundColor = "white";
//   // newli.style.backgroundColor === section.style.backgroundColor
//   //   ? v.color
//   //   : "white";

//   liList.appendChild(newli);
// });
