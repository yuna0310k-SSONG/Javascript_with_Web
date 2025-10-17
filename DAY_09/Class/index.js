const a1 = {
  name: "아메리카노",
  price: 4800,
  shots: 2,
  size: "tall",
  discount: function (balance) {
    this.price = this.price * balance;
  },
};
const a2 = {
  name: "아메리카노",
  price: 5300,
  shots: 3,
  size: "grande",
  discount: function (balance) {
    this.price = this.price * balance;
  },
};
const a3 = {
  name: "아이스 라떼",
  price: 6600,
  shots: 4,
  size: "grande",
  discount: function (balance) {
    this.price = this.price * balance;
  },
};

//클래스는 오브젝트 만들어주는 문법 with 함수까지

class Coffee {
  name;
  price;
  shots;

  constructor(a, b, c) {
    this.name = a;
    this.price = b;
    this.shots = c;
  }
}

const a = new Coffee("아메리카노", 4000, 2);
const b = new Coffee("라떼", 5000, 2);
console.log(a);
console.log(b);

class Soccer {
  name;
  players;
  coach;
  Founded;
  constructor(name, coach, Founded) {
    this.name = name;

    this.coach = coach;
    this.Founded = Founded;
    this.players = [];
  }
  registerPlayers(name, num) {
    this.players.push({ name, num });
  }
}
const yuna = new Soccer("FC유나", "유나", 2025);
yuna.registerPlayer("여진", 7);
yuna.registerPlayer("숑", 1);
yuna.registerPlayer("콩", 2);
