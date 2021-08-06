class MyNumbers {
  a = 1;
  #b = 2; // private
  static c = 3;
}

let n1 = new MyNumbers();

console.log(n1.a);
console.log(n1.b); // undefined
console.log(MyNumbers.c);
