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

const person1 = new Person("Ronald", 32);

console.log(person1.name);
console.log(person1.age);

person1.speak();
person1.info();
