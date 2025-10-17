class players {
  name;
  position;
  age;
  pay;
  constructor(name, position, age, pay) {
    this.name = name;
    this.position = position;
    this.age = age;
    this.pay = pay;
  }
  addposition(x) {
    this.position = x;
  }
}

const a = new players("유나", 25, 5000);
a.addposition("TOP");
console.log(a);

class Team {
  name;
  players;
  coach;
  constructor(name, coach) {
    this.name = name;
    this.players = [];
    this.coach = coach;
  }
  addplayer(x) {
    this.players.push(x);
  }
  delplayer(x) {
    this.players = this.players.filter((player) => player.name !== x);
  }
}
const b = new Team("유나네", "유나코치");

b.addplayer(new players("유나", "미드필더", 25, 5000));
b.addplayer(new players("이나", "미드필더", 25, 5000));
b.addplayer(new players("수아", "미드필더", 25, 5000));
b.delplayer("수아");

console.log(b);
