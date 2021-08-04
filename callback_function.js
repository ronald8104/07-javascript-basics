//A callback function is a function passed into another function as an argument,
//which is then invoked inside the outer function to complete some kind of routine or action.
let calculate = function (num1, num2, typeOfOperation) {
  if (typeOfOperation.toLowerCase() === "add") {
    return num1 + num2;
  }
  if (typeOfOperation.toLowerCase() === "sub") {
    return num1 - num2;
  }
  if (typeOfOperation.toLowerCase() === "multiply") {
    return num1 * num2;
  }
};

console.log(calculate(4, 6, "Multiply"));
console.log(calculate(4, 6, "ADD"));
console.log(calculate(4, 6, "Sub"));

// Using callback function
let add = (num1, num2) => num1 + num2;
let sub = (num1, num2) => num1 - num2;
let multiply = (num1, num2) => num1 * num2;

let calc = function (num1, num2, callback) {
  return callback(num1, num2);
};

console.log(calc(4, 6, multiply));
console.log(calc(4, 6, add));
console.log(calc(4, 6, sub));

// Another way
console.log(calc(7, 6, (num1, num2) => num1 + num2));

// Javascript is a Single threaded
console.log("Sample of non blocking Asynchronous Calls");

setTimeout(() => {
  console.log("Withing setTimeout()"); //It print after 2 seg
}, 2000);

console.log("After setTimeout()");

let a = 10;

setTimeout(() => {
  ++a;
}, 2000);

console.log("The value is: ");
console.log(a); //print 10 because the function increment value after that
