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

function postAnimal(animal, callback) {
  setTimeout(() => {
    animals.push(animal);
    callback();
  }, 2000);
}

// Sin el callback solo se muestran los 2 valores iniciales del arreglo
postAnimal({ type: "Herbivorous", example: "Bull" }, getAnimals);

//getAnimals(); // habilitar sin la funcion de callback
