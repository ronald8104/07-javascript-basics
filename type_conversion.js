// false
console.log(Boolean(false));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(NaN));
console.log(Boolean(0));
console.log(Boolean(""));

// true
console.log(Boolean(true));
console.log(Boolean(1));
console.log(Boolean(" "));

// string to int
console.log(parseInt("123test")); // 123
console.log(parseInt("111", 2));
console.log(parseInt("12t3est")); // 12
console.log(parseInt("test")); // Nan

console.log(parseInt("0xF", 16));
console.log(parseInt("F", 16));
console.log(parseInt("17", 8));
console.log(parseInt(021, 8));
console.log(parseInt("015", 10)); // but `parseInt(015, 8)` will return 13)
console.log(parseInt(15.99, 10));
console.log(parseInt("15,123", 10));
console.log(parseInt("FXX123", 16));
console.log(parseInt("1111", 2));
console.log(parseInt("15 * 3", 10));
console.log(parseInt("15e2", 10));
console.log(parseInt("15px", 10));
console.log(parseInt("12", 13));

// string to float
console.log(parseFloat("12.3test")); // 12.3
console.log(parseFloat("11.2t4est")); // 12.3
console.log(parseFloat("test")); // 12.3

console.log(Number("123"));
console.log(Number("123.3"));
console.log(Number("12a"));
console.log(Number("a1"));
console.log(Number());

// string to boolean
console.log(JSON.parse("false"));
console.log(JSON.parse("true"));
console.log(Boolean("true"));
console.log(Boolean("any"));
console.log(Boolean("false")); // true
console.log(Boolean(""));

// string to array
let string = "Hi there!";

const usingSplit = string.split("");
const usingSpread = [...string];
const usingArrayFrom = Array.from(string);
const usginObjAssign = Object.assign([], string);

console.log(usingSplit);
console.log(usingSpread);
console.log(usingArrayFrom);
console.log(usginObjAssign);

// Number to string
console.log(String(30));
console.log(typeof String(30));

let num = 30;
console.log(`${num}`);
console.log("" + num);

console.log(!!num); // true
console.log(!!0); // false

console.log(Array.from(String(12345), Number));
console.log(Array.from(String(12345), String));

// string to Object
let obj = Object.prototype.valueOf.call(String(1234));
console.log(obj);
console.log(obj[2]); // position 2
console.log(obj.length);

// boolean to string
console.log(true.toString());
console.log(false.toString());

console.log(+true); // 1
console.log(+false); // 0
console.log(Number(true)); // 1
console.log(Number(false)); // 0
