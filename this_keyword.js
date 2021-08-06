// Type 1 - Method (Part of an object) - This refers to that object
// Type 2 - Functioin - This refers to Global object

// Global context
// Browser global object - window
// Node global object - global

// In web browsers, the window object is also the global object:
// Ejecutar en el browser
/*
console.log(this === window); // true

a = 37;
console.log(window.a); // 37

this.b = "MDN";
console.log(window.b); // "MDN"
console.log(b); // "MDN"
*/

// Type 1
// Example 1 - This refers to car object
const car = {
  name: "Toyota",
  start: function () {
    console.log(this);
    console.log(`Start: ${this.name}`);
  },
};

car.start();

// Example 2 - Add another method to car object
car.stop = function () {
  console.log(this);
  console.log(`Stop: ${this.name}`);
};

car.stop();

// Example - Constructor funtion - this referes to car's object
function Car(_name) {
  this.name = _name;
  console.log(this);
}

const car_bmw = new Car("BMW"); // this refers to empty object

// Example funtion - this referes to global object (window in browser)
// use "strict" -> undefined

function showThis() {
  console.log(this);
}

showThis();

const numbers = {
  list: [1, 3, 5, 2, 4],
  type: "number",
  show: function () {
    this.list.forEach(function (item) {
      console.log(`${this.type}: ${item}`); // undefined: 1
    });
  },
};

numbers.show();

const numbers2 = {
  list: [1, 3, 5, 2, 4],
  type: "number",
  show: function () {
    this.list.forEach(
      function (item) {
        console.log(`${this.type}: ${item}`); // Ronald: 1
      },
      { type: "Ronald" }
    );
  },
};

numbers2.show();

const numbers3 = {
  list: [1, 3, 5, 2, 4],
  type: "number",
  show: function () {
    this.list.forEach(function (item) {
      console.log(`${this.type}: ${item}`); // Ronald: 1
    }, this);
  },
};

numbers3.show();

// call, apply and bind methods
let person1 = {
  name: "Ronald",
  show: function () {
    console.log(this);
    console.log(this.name);
  },
};

let person2 = {
  name: "John",
};

console.log("call()");
person1.show.call(person2);

console.log("apply()");
person1.show.apply(person2);

let new_func = person1.show.bind(person2);
console.log("bind()");
new_func();
