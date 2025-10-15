import { input, validation } from "./dom.js";
import { regex } from "./util.js";

input.id.addEventListener("input", () => {
  const { value } = input.id;
  validation.id.engDigit.style.color = regex.id.engDigit.test(value) ? "green" : "red";
  validation.id.length.style.color = regex.id.length.test(value) ? "green" : "red";
});

input.password.addEventListener("input", () => {
  const { value } = input.password;
  validation.pw.eng.style.color = regex.pw.eng.test(value) ? "green" : "red";
  validation.pw.digit.style.color = regex.pw.digit.test(value) ? "green" : "red";
  validation.pw.speical.style.color = regex.pw.special.test(value) ? "green" : "red";
  validation.pw.length.style.color = regex.pw.length.test(value) ? "green" : "red";
});

input.email.addEventListener("input", () => {
  const { value } = input.email;
  validation.email.form.style.color = regex.email.valid.test(value) ? "green" : "red";
});
