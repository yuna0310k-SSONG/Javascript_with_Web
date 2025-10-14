const a = /ca+t/; // a가 1개 이상
console.log(a.test("my new caaaat")); // true ✅
console.log(a.test("ct")); // false ❌

const b = /ca?t/; // a가 있어도 되고 없어도 됨
console.log(b.test("cat")); // true ✅
console.log(b.test("ct")); // true ✅
console.log(b.test("caaat")); // false ❌

const c = /ca{2}t/; // a가 정확히 2개
console.log(c.test("caaat")); // false ❌
console.log(c.test("caat")); // true ✅

const d = /ca{2,}t/; // a가 2개 이상
console.log(d.test("caaaat")); // ✅ true (4개)

const e = /ca{2,4}t/; // a가 2개 이상 4개 미만
console.log(e.test("caaaat")); // ✅ true (4개)
