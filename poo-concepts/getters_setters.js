class Person {
  constructor(_name, _age) {
    this.name = _name;
    this.age = _age;
  }

  set eats(_food) {
    this.food = _food;
  }

  get dinner() {
    console.log(`${this.name} eats ${this.food}`);
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
person1.eats = "Pizza";
person1.dinner;
