// Call by value (primetive data type)
let a = 10;
let b = 15;

a = 20;

console.log(a);
console.log(b);

// Function example - Call by value
let num = 100;

function increment(number) {
  return ++number;
}

console.log(increment(num)); // 101
console.log(num); // 100

//Call by reference (non-primitive data type)
let empl1 = {
  name: "John Doe",
  age: 34,
};

let empl2 = empl1;

empl1.name = "QA Test";

// Update both objects
console.log(empl1);
console.log(empl2);

// Function example - Call by reference
let car = { name: "Fiat" };

function newName(carObject) {
  carObject.name = "BMW";
}

console.log(car);
newName(car);
console.log(car);
