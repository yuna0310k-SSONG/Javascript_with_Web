/*
const a = Math.abs(-10); // 10 (절댓값)
const b = Math.PI; // 3.141592653589793 (원주율)
const c = Math.round(3.6); // 4 (반올림)
const d = Math.floor(3.6); // 3 (내림)
const e = Math.ceil(3.6); // 4 (올림)
const f = Math.random(); // 0 이상 1 미만의 랜덤값
*/
//min ~ max 까지 돌려주는 함수
function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

console.log(getRandomArbitrary(2, 3));
// 예: 13.2541298462

//min ~ max 까지 정수를 돌려주는 함수
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
