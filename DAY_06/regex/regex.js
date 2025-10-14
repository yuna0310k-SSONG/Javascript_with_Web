const f = new RegExp("hello"); //정규 표현식

console.log(f.test("hello world!")); // ✅ true
console.log(f.test("bye bye!")); // ❌ false

const g = new RegExp("cat");
g.test("my cat"); // ✅ true (cat 있음)
g.test("your cat"); // ✅ true (cat 있음)
g.test("my dog"); // ❌ false (cat 없음)
g.test("my category"); // ✅ true (cat 들어있음!)

const h = /cat/; // 문자열 안에 'cat'이 들어있으면 true (어디에 있든 상관없음)
const i = /^cat/; // 문자열이 'cat'으로 시작해야 true (^는 '시작'을 의미)
const j = /cat$/; // 문자열이 'cat'으로 끝나야 true
const k = /^cat$/; // 문자열이 'cat'만 있어야 true
const L = /\bcat\b/; // 'cat'이 단어로만 있을 때 (word boundary)

console.log(/cat/.test("my cat"));

//------------------------------------------------------------------------------////
// 📅 Date 객체 생성
const a = new Date(); // 현재 날짜와 시간

// 🔹 기본 날짜 정보
const date = a.getDate(); // 일 (1~31)
const day = a.getDay(); // 요일 (0=일, 6=토)
const month = a.getMonth(); // 월 (0~11, 0은 1월)
// const year = a.getFullYear();  // 연도

// 🔹 시간 관련
const hours = a.getHours(); // 시 (0~23)
const minutes = a.getMinutes(); // 분 (0~59)
const seconds = a.getSeconds(); // 초 (0~59)

// 🔹 지역(Local) 기준 날짜/시간
const localString = a.toLocaleString(); // 로컬 날짜 + 시간
const localDate = a.toLocaleDateString(); // 로컬 형식의 날짜
const localTime = a.toLocaleTimeString(); // 로컬 형식의 시간

// 🔹 UTC(세계 표준시, ISO 8601 형식)
const iso = a.toISOString(); // "2025-10-14T01:20:00.000Z"
// const utcDate = a.getUTCDate();           // UTC 기준 일자
// const utcHours = a.getUTCHours();         // UTC 기준 시각

/*
// 🧠 출력 예시
console.log("=== 날짜 정보 ===");
console.log("연도:", year);
console.log("월:", month + 1); // 0부터 시작하므로 +1
console.log("일:", date);
console.log("요일:", day); // 0=일, 1=월 ... 6=토

console.log("\n=== 시간 정보 ===");
console.log("시:", hours);
console.log("분:", minutes);
console.log("초:", seconds);

console.log("\n=== 로컬 기준 ===");
console.log("로컬 날짜:", localDate);
console.log("로컬 시간:", localTime);
console.log("로컬 전체:", localString);

console.log("\n=== UTC / ISO ===");
console.log("UTC 날짜:", utcDate);
console.log("UTC 시:", utcHours);
console.log("ISO 문자열:", isoString);
*/

Math.round(3.6); // 4 (반올림)
Math.floor(3.6); // 3 (내림)
Math.ceil(3.6); // 4 (올림)
Math.random(); // 0 이상 1 미만의 랜덤값
