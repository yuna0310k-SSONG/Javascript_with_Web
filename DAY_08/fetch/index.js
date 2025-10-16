// fetch(가져오다): 서버를 연결할때, 주로 사용
/*
fetch("https://dummyjson.com/products")
  .then((res) => res.json())
  .then((v) => {
    const newData = v.product.map((x) => ({ title: x.title }));
  })
  .then(console.log);
*/

const APIKEY = "6d1b3ceae29a17a2710c2ad71c7f2252";
const lat = 37.489; //위도
const long = 126.723; //경도

fetch(
  `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${APIKEY}`
)
  .then((res) => res.json())
  //   .then((v) => {
  //     const newData = v.product.map((x) => ({ title: x.title }));
  //   })
  .then(console.log);
