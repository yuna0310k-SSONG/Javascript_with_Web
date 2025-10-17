class car {
  #name;
  #speed;
  constructor(name) {
    this.#name = name;
    this.#speed = 0;
  }
  speedup(x) {
    this.#speed = this.#speed + x;
  }
  speeddown(x) {
    if (this.#speed - x < 0) {
      this.#speed = 0;
    } else {
      this.#speed = this.#speed - x;
    }
  }
}
const a = new car("붕붕이");
a.speedup(50);
a.speeddown(60);
console.log(a); //3
