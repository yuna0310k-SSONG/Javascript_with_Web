class student {
  #id;
  #name;
  #major;
  #course;
  constructor(id, name, major) {
    this.#id = id;
    this.#name = name;
    this.#major = major;
    this.#course = [];
  }
  addcourse(x) {
    this.#course.push(x);
  }
}
class course {
  #name;
  #professer;
  #time;
  constructor(name, professer, time) {
    this.#name = name;
    this.#professer = professer;
    this.#time = time;
  }
}

const a = new student(12345, "유나", "컴공과");
a.addcourse(new course("Python", "전수효", 2));
console.log(a);
