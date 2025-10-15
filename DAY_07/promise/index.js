const a = new Promise((success, fail) => {
  const num = +prompt("숫자입력");
  if (num >= 0) success("약과");
  else fail("초콜릿");
});

a.then((v) => console.log(`${v}꿀맛`)).catch((v) => console.log(`${v}노맛`));
