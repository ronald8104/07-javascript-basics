//Compare objects

const unordered1 = {
  b: "foo",
  c: "bar",
  a: "baz",
};

const unordered2 = {
  c: "bar",
  a: "baz",
  b: "foo",
};

console.log(JSON.stringify(unordered1) === JSON.stringify(unordered2));

const ordered1 = {};
const ordered2 = {};

Object.keys(unordered1)
  .sort()
  .forEach((key) => {
    // callback fuction
    ordered1[key] = unordered1[key];
  });

Object.keys(unordered2)
  .sort()
  .forEach((key) => {
    // callback fuction
    ordered2[key] = unordered2[key];
  });

console.log(ordered1);
console.log(ordered2);

console.log(ordered1 === ordered2);
console.log(JSON.stringify(ordered1) === JSON.stringify(ordered2));

// Compare arrays
let array1 = [1, 4, 5, 3, 2];
let array2 = [5, 2, 4, 3, 1];

console.log("Comparing number arrays");
console.log(array1 === array2);
console.log(array1.sort().toString() === array2.sort().toString());

let strArray1 = ["a", "d", "c", "e", "b"];
let strArray2 = ["c", "d", "a", "b", "e"];

console.log("Comparing string arrays");
console.log(strArray1 === strArray2);

console.log(strArray1.sort().toString() === strArray2.sort().toString());
console.log(
  strArray1.sort().toString().toLocaleLowerCase() ===
    strArray2.sort().toString().toLocaleLowerCase()
);
