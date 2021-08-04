function add(a, b) {
  return a + b;
}

console.log("Function expression: " + add(12, 34));

let add2 = (a, b) => {
  return a + b;
};

console.log("Fat Arrow function: " + add2(2, 56));

console.log("Immediately Invoke Function Expression:");

(function fullName(firsName, lastName) {
  return console.log(firsName + " " + lastName);
})("Ronald", "Ugas");

function one(x) {
  console.log("one");
  return x + 10;
}
function two(y) {
  console.log("two");
  return y + 25;
}
console.log("Call back function: " + one(two(10)));

let chanelName = (fn, ln) => {
  return console.log(`Chanel name: ${fn} ${ln}`);
};

chanelName("QA", "Let's Test");

let chanelNameFatArrow = (fn, ln) => console.log(`Chanel name: ${fn} ${ln}`);
chanelNameFatArrow("QA", "Ronald");

console.log("Functions are Firs Class Citizens");
function outer(innerFunc) {
  innerFunc();
}

function inner() {
  console.log("From inner function");
}

outer(inner);
