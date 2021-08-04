console.log("The date object has about seven formatting methods.");

console.log("toString(): " + new Date().toString());
console.log("toDateString(): " + new Date().toDateString());
console.log("toLocaleString(): " + new Date().toLocaleString());
console.log("toLocaleDateString(): " + new Date().toLocaleDateString());
console.log("toGMTString(): " + new Date().toGMTString());
console.log("toUTCString(): " + new Date().toUTCString());
console.log("toISOString(): " + new Date().toISOString());

// "Friday, Jul 2, 2021"
let date = new Date().toLocaleDateString("en-us", {
  weekday: "long",
  year: "numeric",
  month: "short",
  day: "numeric",
});

console.log(date);

const currentMonth = new Date();
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
console.log(months[currentMonth.getMonth()]);

console.log("The toDateString() Method");
//"Fri Jul 02 2021"
let today = new Date().toDateString();
console.log(today);

console.log("The toLocaleDateString() Method");

const currentDate = new Date();
const options = {
  weekday: "long",
  year: "numeric",
  month: "short",
  day: "numeric",
};

//Freitag, 2. Juli 2021
console.log(currentDate.toLocaleDateString("de-DE", options));

// الجمعة، ٢ يوليو ٢٠٢١
console.log(currentDate.toLocaleDateString("ar-EG", options));

//Friday, Jul 2, 2021
console.log(currentDate.toLocaleDateString("en-us", options));

//martes, 3 de ago de 2021
console.log(currentDate.toLocaleDateString("es-ES", options));

console.log("You can also decide not to use either locales or options");
// "7/2/2021"
console.log("Locale: " + new Date().toLocaleDateString());
//"7/2/2021"
console.log("en-US locale: " + new Date().toLocaleDateString("en-US"));

// "Jul 2021 Friday"
console.log(
  new Date().toLocaleDateString("en-us", {
    weekday: "long",
    year: "numeric",
    month: "short",
  })
);

// "Jul 2021"
console.log(
  new Date().toLocaleDateString("en-us", { year: "numeric", month: "short" })
);
