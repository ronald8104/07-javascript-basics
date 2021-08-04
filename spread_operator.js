// Assume you have the following object:

const adrian = {
  fullName: "Adrian Oprea",
  occupation: "Software developer",
  age: 31,
  website: "https://oprea.rocks",
};

console.log(adrian);

// Let’s assume you want to create a new object(person)
// with a different name and website, but the same occupation and age.
// You could do this by specifying only the properties you want
// and use the spread operator for the rest, like below:
const bill = {
  ...adrian,
  fullName: "Bill Gates",
  website: "https://microsoft.com",
};

console.log(bill);

const numbers1 = [1, 2, 3, 4, 5];
const numbers2 = [...numbers1, 1, 2, 6, 7, 8];
// this will be [1, 2, 3, 4, 5, 1, 2, 6, 7, 8]
console.log(numbers1);
console.log(numbers2);

const numbers3 = [...numbers1, 1, 2, ...numbers1, 6, 7, 8, ...numbers1];
console.log(numbers3.length);
console.log(numbers3);

// the rest operator enables the developer to create functions
// that can take an indefinite number of arguments

// Let’s assume you want to create a function that calculates the sum of all its arguments
function sum(...numbers) {
  return numbers.reduce((accumulator, current) => {
    return (accumulator += current);
  });
}

console.log(sum(1, 2));
console.log(sum(1, 2, 5));
console.log(sum(1, 2, 5, 6, 4));
