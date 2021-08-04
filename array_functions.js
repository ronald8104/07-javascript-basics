let arrayNumbers = [20, 10, 20, 40, 50];

console.log(
  "Array length: " + arrayNumbers.length + " and elements: " + arrayNumbers
);

//push() add at the end and return the number of array items
console.log("Add element at the end with push()");
console.log("Array length: " + arrayNumbers.push(65));
console.log(arrayNumbers);

//unshift() add at the end and return the number of array items
console.log("Add element at the start with unshift()");
console.log("Array length: " + arrayNumbers.unshift(25));
console.log(arrayNumbers);

//Removes elements from an array and, if necessary,
//inserts new elements in their place, returning the deleted elements.
console.log(
  "Add element at index = 2 with splice() and adding elements: 33, 34, 35"
);
//Example with 0 delete
arrayNumbers.splice(2, 0, 33, 34, 35);
console.log("Array length: " + arrayNumbers.length);
console.log(arrayNumbers);

console.log(
  "Delete 3 elements at index = 2 with splice() and adding elements: 43, 44, 45"
);
//Example with 1 delete (index = 1)
arrayNumbers.splice(2, 3, 43, 44, 45);
console.log("Array length: " + arrayNumbers.length);
console.log(arrayNumbers);

//pop() removes the last element and return it
console.log("Removes the last element pop()");
console.log("Remove element: " + arrayNumbers.pop());
console.log(arrayNumbers);

//shift() removes the first element and return it
console.log("Removes the first element with shift()");
console.log("Remove element: " + arrayNumbers.shift());
console.log(arrayNumbers);

let arr1 = [3, 7];
let arr2 = [2, 5];
let arr3 = [9, 6];

function showArray(message, value) {
  console.log(`${message} [${value.toString().replace(/,/g, ", ")}]`);
}

showArray("Array1: ", arr1);
showArray("Array2: ", arr2);
showArray("Array3: ", arr3);

//concat() combines two or more arrays.
let newArray = arr1.concat(arr2, arr3);
showArray("Combines arrays:", newArray);

let employees = [
  {
    id: 100,
    name: "John Doe",
    deptId: 201,
    age: 34,
    tenure: 7,
    joingYear: 2013,
    isMale: true,
  },
  {
    id: 101,
    name: "Ajay Singh",
    deptId: 202,
    age: 24,
    tenure: 17,
    joingYear: 2003,
    isMale: true,
  },
  {
    id: 102,
    name: "Mathew Joseph",
    deptId: 203,
    age: 42,
    tenure: 3,
    joingYear: 2017,
    isMale: true,
  },
  {
    id: 103,
    name: "Rahul Dev",
    deptId: 203,
    age: 29,
    tenure: 5,
    joingYear: 2015,
    isMale: true,
  },
  {
    id: 104,
    name: "Tina Rez",
    deptId: 204,
    age: 28,
    tenure: 2,
    joingYear: 2018,
    isMale: false,
  },
];

let employees2 = employees;
//Determines whether the specified callback function returns true for any element of an array.
console.log(
  "Some employee has age > 34: " + employees.some((empl) => empl.age > 34)
);
console.log(
  "Some employee has age > 54: " + employees.some((empl) => empl.age > 54)
);

//Determines whether all the members of an array satisfy the specified test.
console.log(
  "Every employee has age > 20: " + employees.every((empl) => empl.age > 20)
);
console.log(
  "Every employee has age > 28: " + employees.every((empl) => empl.age > 28)
);

let emplDpt203 = employees.filter((empl) => empl.deptId === 203);
console.log("Number of employees from dpt 203: " + emplDpt203.length);
console.log(emplDpt203);
//console.log(employees);

console.log("Name of employees from dpt 203: ");
for (let index = 0; index < emplDpt203.length; index++) {
  const name = emplDpt203[index].name;
  console.log(name);
}

emplDpt203.forEach((employee) => {
  console.log(employee);
});

emplDpt203.forEach((e) => {
  console.log(e.name);
});

let unordered_number_list = [2, 4, 8, 6, 3];
let unordered_string_list = ["rat", "bat", "cat"];

//Sorts an array in place.
console.log("Sort array asc by default with sort()");
console.log(unordered_number_list.sort());
console.log(unordered_string_list.sort());

//Reverses the elements in an array in place.
console.log("Sort array in desc order with sort().reverse()");
console.log(unordered_number_list.sort().reverse());
console.log(unordered_string_list.sort().reverse());

console.log("Sorting employees Asc by joing year");
employees.sort((empl1, empl2) => empl1.joingYear - empl2.joingYear);
console.log(employees);

console.log("Sorting employees Desc by joing year");
employees2.sort((empl1, empl2) => empl2.joingYear - empl1.joingYear);
console.log(employees2);

console.log("Sorting employees Asc by name");
employees.sort((empl1, empl2) => {
  if (empl1.name < empl2.name) return -1;
  if (empl1.name > empl2.name) return 1;
  return 0;
});
console.log(employees);

console.log("Sorting employees Desc by name");
employees.sort((empl1, empl2) => {
  if (empl1.name > empl2.name) return -1;
  if (empl1.name < empl2.name) return 1;
  return 0;
});
console.log(employees);

console.log(arrayNumbers);
console.log(
  arrayNumbers.reduce((accumulator, currentValue) => accumulator + currentValue)
);

let chars = ["a", "b", "c"];
console.log(chars);
console.log(
  chars.reduce((total, val) => {
    return total + val;
  })
);

console.log("slice() Returns a copy of a section of an array.");
console.log(arrayNumbers);
console.log(arrayNumbers.slice(2, 5));
console.log(arrayNumbers.slice(2, 15));
