// Sendig Data to Server - JSON.stringify()
let myObj = {
  name: "John Doe",
  age: 34,
  city: "Quito",
};

var strMyJson = JSON.stringify(myObj);
console.log(strMyJson);

console.log(typeof myObj);
console.log(typeof strMyJson);

// Receving Data from Server - JSON.pasrse()
let strObj = '{"name": "Ajay Rign", "age": 28, "city": "New Delhi"}';

let jsonResp = JSON.parse(strObj);

console.log(jsonResp);

console.log(`Name: ${jsonResp.name}`);
console.log(`Age: ${jsonResp.age}`);
console.log(`City: ${jsonResp.city}`);

console.log(typeof strObj);
console.log(typeof jsonResp);
