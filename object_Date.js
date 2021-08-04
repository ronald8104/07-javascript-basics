let date = new Date();
console.log(date); // 2021-08-04T19:37:50.897Z

date = new Date(2019, 2, 14, 09, 32, 55);
console.log(date);

date = new Date(1347349234121);
console.log(date);

date = new Date("2019-02-15T15:32:55.000Z");
console.log(date);

date = new Date();
console.log(date.getFullYear());
console.log(date.getMonth()); // month 00 to 11
console.log(date.getDate()); //
console.log(date.getDay()); //

date.setFullYear(2020);
console.log(date);

date.setMonth(2);
console.log(date);

console.log(date.getUTCFullYear());
console.log(date.getUTCMonth());
console.log(date.getUTCDate());

console.log(date.toISOString()); // for store in data base

console.log(date.toLocaleString("es-es"));
console.log(date.toLocaleString("en-us"));
console.log(date.toLocaleString("en-au"));

console.log(JSON.stringify(date));

date = new Date();
console.log(date.toString());

date = new Date().toUTCString();
console.log(date);

console.log(Date.now());
