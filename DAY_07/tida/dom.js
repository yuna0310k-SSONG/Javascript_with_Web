const $ = (selector) => document.querySelector(selector);

export const input = {
  id: $("#idInput"),
  password: $("#passwordInput"),
  email: $("#emailInput"),
};

export const validation = {
  id: {
    engDigit: $("#idValEngDigit"),
    length: $("#idValLength"),
  },
  pw: {
    eng: $("#pwValEng"),
    digit: $("#pwValDigit"),
    speical: $("#pwValSpecial"),
    length: $("#pwValLength"),
  },
  email: {
    form: $("#emailValForm"),
  },
};
