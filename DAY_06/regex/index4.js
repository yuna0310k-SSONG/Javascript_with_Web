const a = /\d/; //숫자도 포함
const b = /^\d$/; //숫자 하나만
const c = /^\d+$/; //숫자만
/*
const f = /^01[016879]-\d{4}-\d{4}$/;

const phone = document.querySelector("#phone");
phone.addEventListener("input", () => {
  const { value } = phone;
  console.log(f.test(value));
});
*/
const birth = /^\d{2}(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])-[1-4]\d{6}$/;

const idnum = document.querySelector("#idnum");
idnum.addEventListener("input", () => {
  const { value } = idnum;
  console.log(birth.test(value));
});
