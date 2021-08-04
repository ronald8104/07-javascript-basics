let car = {
  color: "purple",
  type: "minivan",
  registration: new Date("2012-02-03"),
  capacity: 7,
};

console.log("Car data:");
console.log(car);
console.log(`Registration date: ${car.registration}`);

let cars = [
  {
    color: "purple",
    type: "minivan",
    registration: new Date("2017-01-03"),
    capacity: 7,
  },
  {
    color: "red",
    type: "station wagon",
    registration: new Date("2018-03-03"),
    capacity: 5,
  },
];

console.log("Add a new object at the start - Array.unshift()");
let new_car = {
  color: "red",
  type: "cabrio",
  registration: new Date("2016-05-02"),
  capacity: 2,
};
cars.unshift(new_car);
show_all_cars(cars);

function show_all_cars(cars) {
  console.log("All cars data:");
  console.log(cars);
}

console.log("Add a new object at the end - Array.push()");
cars.push(new_car);

show_all_cars(cars);

console.log("Add a new object in the middle - Array.splice()");
cars.splice(4, 0, new_car);

show_all_cars(cars);

console.log("Looping through an array of objects");
console.log("Find an object in an array by its values - Array.find()");

//This function returns the first matching element:
let car_red = cars.find((car) => car.color === "red");
console.log("Car red:");
console.log(car_red);

let car_purple_index = cars.findIndex((car) => car.color === "purple");
console.log(`Car purple index: ${car_purple_index}`);

console.log("Searching for multiple values");

let car_red_cabrio = cars.find(
  (car) => car.color === "red" && car.type === "cabrio"
);
console.log(car_red_cabrio);

let array = [1, 2, 3, 4, 5, 6, 7];

array.find(function (value, index) {
  // Delete element 5 on first iteration
  if (index === 0) {
    console.log("Deleting array[5] with value ", array[5]);
    delete array[5];
  }
  // Element 5 is still visited even though deleted
  console.log("Visited index ", index, " with value ", value);
});

console.log("Transform objects of an array - Array.map()");

let sizes = cars.map((car) => {
  if (car.capacity <= 3) {
    return "small";
  }
  if (car.capacity <= 5) {
    return "medium";
  }
  return "large";
});

console.log(sizes);

console.log(
  "It's also possible to create a new object if we need more values:"
);

let carsProperties = cars.map((car) => {
  let properties = {
    capacity: car.capacity,
    size: "large",
  };

  if (car.capacity <= 5) {
    properties["size"] = "medium";
  }
  if (car.capacity <= 3) {
    properties["size"] = "small";
  }
  return properties;
});

console.log(carsProperties);

console.log("Add a property to every object of an array - Array.forEach()");

cars.forEach((car) => {
  car["size"] = "large";
  if (car.capacity <= 5) {
    car["size"] = "medium";
  }
  if (car.capacity <= 3) {
    car["size"] = "small";
  }
});

show_all_cars(cars);

console.log("Sort an array by a property - Array.sort()");
console.log("Sorting the cars based on their capacity in descending order");

let sortedCars = cars.sort((c1, c2) =>
  c1.capacity < c2.capacity ? 1 : c1.capacity > c2.capacity ? -1 : 0
);
console.log(sortedCars);

let sortedCarsAsc = cars.sort((c1, c2) => c1.capacity - c2.capacity);
console.log(sortedCarsAsc);

let sortedCarsDesc = cars.sort((c1, c2) => c2.capacity - c1.capacity);
console.log(sortedCarsDesc);

console.log(
  "Checking if objects in array fulfill a condition - Array.every(), Array.includes()"
);

//You may remember the function Array.includes which is similar to Array.some(),
//but works only for primitive types.
console.log(
  "Is there a Car [color = red and type = cabrio] -> " +
    cars.some((car) => car.color === "red" && car.type === "cabrio")
);

console.log(
  "Is there a Car [capacity > 4] -> " + cars.every((car) => car.capacity >= 4)
);
