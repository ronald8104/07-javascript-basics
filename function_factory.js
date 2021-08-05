// Factory function
function person(_name, _age) {
  return {
    name: _name,
    age: _age,
    run: function () {
      console.log(`${this.name} loves to run`);
    },
  };
}

let p1 = person("Ronald", 32);

console.log(p1);
console.log(p1.name);
console.log(p1.age);
console.log(p1.run());

let p2 = person("Avi", 21);

console.log(p2);
console.log(p2.name);
console.log(p2.age);
console.log(p2.run());

console.log(p2.constructor); // [Function: Object]

// Constructor function
function Person(_name, _age) {
  console.log(this);
  this.name = _name;
  this.age = _age;
  this.run = function () {
    console.log(`${this.name} loves to run`);
  };
}

let p3 = new Person("Avi", 21);

console.log(p3);
console.log(p3.name);
console.log(p3.age);
console.log(p3.run());

console.log(p3.constructor); //[Function: Person]
