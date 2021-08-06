// async: Un solo mesero puede atender a varios clientes

let animals = [
  { type: "Herbivorous", example: "Deer" },
  { type: "Carnivorous", example: "Tier" },
];

function getAnimals() {
  setTimeout(() => {
    let output = "";

    animals.forEach((animal) => {
      let text = `<li>${animal.type} - ${animal.example}</li>`;
      output += text;
    });

    document.body.innerHTML = output;
  }, 1000);
}

function postAnimal(animal) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      animals.push(animal);

      const error = false; //poner en true para simular error

      if (!error) {
        resolve();
      } else {
        reject("Somethig was wrong");
      }
    }, 2000);
  });
}

postAnimal({ type: "Herbivorous", example: "Bull" })
  .then(getAnimals)
  .catch((error) => console.log(error));
