class student {
  #id;
  #name;

  constructor(id, name) {
    this.#id = id;
    this.#name = name;
  }
}
class colleger extends student {
  #major;
  #course;
  constructor(id, name, major) {
    super(id, name);
    this.#major = major;
    this.#course = [];
  }
  register(course) {
    this.#course.push(course);
  }
}

class HighSchoolstudent extends student {
  #grade;
  #classroom;
  constructor(id, name, grade) {
    super(id, name);
    this.#grade = grade;
    this.#classroom = [];
  }
  register(classroom) {
    this.#classroom.push(classroom);
  }
}
