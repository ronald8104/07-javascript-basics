class Person {
  constructor(_name, _age) {
    this.name = _name;
    this.age = _age;
  }

  speak() {
    console.log("I'm speaking... :-)");
  }

  info() {
    console.log(`{name: ${this.name}, age: ${this.age}}`);
  }
}

class Estudent extends Person {
  constructor(_name, _age, _materia) {
    super(_name, _age);
    this.materia = _materia;
  }
  showMateria() {
    console.log(this.materia);
  }
}

const est1 = new Estudent("Ronald", 43, "English");

est1.info();
est1.showMateria();
