let fruits = ["Apple", "Mango", "Banana"];

for (const f of fruits) {
  console.log(f);
}

const getPromise = (time) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Promise resolve in ${time} ms`);
    }, time);
  });
};

let asyncArray = [getPromise(1000), getPromise(2000), getPromise(3000)];

// Este tipo de arreglo se va a ejecutar lo más rápido posible
for (const aa of asyncArray) {
  console.log(aa); // Promise { <pending> }
}

const asyncLoop = async (asyncArray) => {
  for await (const aa of asyncArray) {
    console.log(aa);
  }
};

asyncLoop(asyncArray);

asyncArray = [getPromise(6000), getPromise(2000), getPromise(3000)];

console.log("Wait 6 sec"); // Se muestra antes por no es async
asyncLoop(asyncArray);
