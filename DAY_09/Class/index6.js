class unit {
  #name;
  #emoji;
  #hp;
  constructor(name, emoji, hp) {
    this.#name = name;
    this.#emoji = emoji;
    this.#hp = hp;
  }
  attack(name, emoji) {
    console.log(`${emoji}${name}이(가) 공격했다`);
  }
  attack(hp) {
    console.log(`남은 HP :${hp}`);
  }
}

class hero extends unit {
  #skills;
  constructor(name, emoji, hp, skills) {
    super(name, emoji, hp);
    this.#skills = skills;
  }
  activate() {
    console.log(`${this.#skills}이 발동 했다`);
  }
}
class monster extends unit {
  #skills;
  constructor(name, emoji, hp, skills) {
    super(name, emoji, hp, skills);
    this.#skills = skills;
  }
}
