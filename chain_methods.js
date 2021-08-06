class Person {
  constructor(_name) {
    this.name = _name;
  }

  walk() {
    console.log(`${this.name} walk()`);
  }

  run() {
    console.log(`${this.name} run()`);
  }

  swim() {
    console.log(`${this.name} swim()`);
  }
}

const p1 = new Person("Ronald");

p1.walk();
p1.run();
p1.swim();

// chain methods
class Person2 {
  constructor(_name) {
    this.name = _name;
  }

  walk() {
    console.log(`${this.name} walk()`);
    return this;
  }

  run() {
    console.log(`${this.name} run()`);
    return this;
  }

  swim() {
    console.log(`${this.name} swim()`);
    return this;
  }
}

const p2 = new Person2("Ronald");

p2.run().walk().swim();
p2.swim().walk().run();
p2.walk().swim().run();
