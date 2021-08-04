console.log("Character access: charAt()");
console.log("cat".charAt(1));
console.log("cat"[1]);

console.log("Comparing strings");

let a = "a";
let b = "b";
let compareStrings = (a, b) => {
  if (a < b) {
    // true
    return `[${a}] is less than [${b}]`;
  } else if (a > b) {
    return `[${a}] is greater than [${b}]`;
  } else {
    return `[${a}] and [${b}]  are equal.`;
  }
};
console.log(compareStrings(a, b));

function isEqualIgnoreCase(str1, str2) {
  return str1.toUpperCase() === str2.toUpperCase();
}

console.log("Are equal? " + isEqualIgnoreCase("test", "TeSt"));

console.log(typeof "foo"); // Logs "string"
console.log(typeof new String("foo")); // Logs "object"

console.log(eval("2 + 2")); // string primitive returns the number 4
console.log(eval(new String("2 + 2"))); // String object returns the string "2 + 2"

// A String object can always be converted to its primitive
let s2 = new String("2 + 2");
console.log(eval(s2.valueOf()));

let string = "This is a string() for testing.";
console.log(string.length);
console.log(string.charAt(1));
console.log(string.concat(" Hi!"));
console.log(string.includes("is"));
console.log(string.endsWith("ing"));
console.log(string.endsWith("."));
console.log(string.indexOf(" "));
console.log(string.lastIndexOf(" "));
console.log(string.match(/(\b\w+\b)/g));

const regexp = /t(e)(st(\d?))/g;
const str = "test1test2";

const array = [...str.matchAll(regexp)];

// expected output: Array ["test1", "e", "st1", "1"]
console.log(array[0]);

// expected output: Array ["test2", "e", "st2", "2"]
console.log(array[1]);
