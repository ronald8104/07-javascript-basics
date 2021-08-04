let array = [3, 6, 8, 5];

console.log("Total elements: " + array.length);

console.log("Show array[] elements in for loop");
for (let index = 0; index < array.length; index++) {
  const element = array[index];
  console.log(element);
}

console.log("Show array[] elements with forEach()");
array.forEach((value) => console.log(value));

//Original array do not change
let sum = 0;
function addItems(currentValue) {
  sum += currentValue;
}

array.forEach(addItems);
console.log("The sum is: " + sum);

//Changing values in the original array
function multByTen(currentValue, index, arr) {
  arr[index] = currentValue * 10;
}

array.forEach(multByTen);
console.log(array);

console.log("Using map()");
/**
 * map() return a new array with the result of calling
 * a function for every element array
 */
let arrayMultFive = array.map((value) => value * 5);
console.log(arrayMultFive);
