var sum = function (num1) {
  var num2 = 20;
  return num1 + num2;
};

console.log(sum(10));

var num1 = 10;

var sum2 = function () {
  var num3 = 20;
  return num1 + num3;
};

console.log(sum2());
console.dir(sum2);

var outerAdd = function (num) {
  var innerAdd = function (num4) {
    return num + num4;
  };
  return innerAdd;
};

let a = outerAdd(5);
console.dir(a);

// Lexical scoping
function init() {
  var name = "Mozilla"; // name is a local variable created by init

  function displayName() {
    // displayName() is the inner function, a closure
    console.log(name); // use variable declared in the parent function
  }

  displayName();
}

init();
