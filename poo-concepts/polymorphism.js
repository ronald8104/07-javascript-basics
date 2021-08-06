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

  languageKnown() {
    console.log("Spanish, English");
  }
}

class Tester extends Person {
  constructor(_name, _age, _materia) {
    super(_name, _age);
    this.langeage = _materia;
  }

  showMateria() {
    console.log(this.materia);
  }

  languageKnown() {
    super.languageKnown();
    console.log("C#, Java, Javascript");
  }
}

const tester1 = new Tester("Ronald", 32, "Dev");

tester1.languageKnown();
