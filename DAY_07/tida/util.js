export const regex = {
  id: {
    engDigit: /^[a-zA-Z0-9]+$/,
    length: /^.{6,20}$/,
  },
  pw: {
    eng: /[a-zA-Z]+/,
    digit: /[0-9]+/,
    special: /[!@$%^*_+~]+/,
    length: /^.{8,20}$/,
  },
  email: {
    valid: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  },
};
