// 랜덤 시간 함수 (1~5초)
const makeRandomTime = (min, max) =>
  (Math.floor(Math.random() * (max - min + 1)) + min) * 1000;

// 🐇🐢🐎 각각 비동기 작업 (도착 시간 랜덤)

const rabbit = () =>
  new Promise((success) => setTimeout(() => success("🐇"), makeRandomTime()));
const turtle = () =>
  new Promise((success) => setTimeout(() => success("🐢"), makeRandomTime()));
const horse = () =>
  new Promise((success) => setTimeout(() => success("🐎"), makeRandomTime()));
const fox = () =>
  new Promise((success) =>
    setTimeout(() => success("🦊 여우"), makeRandomTime())
  );
const elephant = () =>
  new Promise((success) =>
    setTimeout(() => success("🐘 코끼리"), makeRandomTime())
  );
const dog = () =>
  new Promise((success) =>
    setTimeout(() => success("🐶 강아지"), makeRandomTime())
  );

const racers = [rabbit(), turtle(), horse(), fox(), elephant(), dog()];

// 🏁 race: 가장 빨리 끝나는 Promise의 결과만 반환
Promise.race([rabbit(), turtle(), horse(), fox(), elephant(), dog()]).then(
  (v) => {
    console.log("🏆 승자:", v);
  }
);
/*`
// 🏁 all: 모든 Promise가 끝나야 결과 배열 반환
Promise.all([rabbit(), turtle(), horse()]).then((v) => {
  console.log("🏁 모든 참가자 도착!", v);
});
*/
