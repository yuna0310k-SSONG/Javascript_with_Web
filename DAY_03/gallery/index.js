const first = document.querySelector("#first");
const second = document.querySelector("#second");
const third = document.querySelector("#third");
const fourth = document.querySelector("#fourth");
const represent = document.querySelector("#represent");

const albums = [
  { img: first, src: "img1.jpg" },
  { img: second, src: "img2.jpg" },
  { img: third, src: "img3.jpg" },
  { img: fourth, src: "img4.jpg" },
];

albums.forEach((v) => {
  v.img.addEventListener("click", () => {
    represent.src = v.src;
  });
});
