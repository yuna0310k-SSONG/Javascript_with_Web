const time = function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min * 1000;
};

console.log("오늘의 점메추");
setTimeout(() => {
  console.log("시원한 아아");
}, time(1, 10));
setTimeout(() => {
  console.log("맛점");
}, time(1, 10) + 1000);
