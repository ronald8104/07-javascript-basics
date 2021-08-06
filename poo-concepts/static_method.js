class Person {
  constructor(_name, _age) {
    this.name = _name;
    this.age = _age;
    Person.count++;
  }

  set eats(_food) {
    this.food = _food;
  }

  get dinner() {
    console.log(`${this.name} eats ${this.food}`);
  }

  static speak() {
    console.log("I'm speaking... :-) from static method");
  }

  info() {
    console.log(`{name: ${this.name}, age: ${this.age}}`);
  }

  static get COUNT() {
    console.log(Person.count);
  }
}

// Static method
Person.speak();

// Properties
Person.count = 0;
const person1 = new Person("Ronald", 32);
Person.COUNT;

const person2 = new Person("Rorberto", 12);
Person.COUNT;
