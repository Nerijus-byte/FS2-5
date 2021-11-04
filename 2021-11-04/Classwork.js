// Naudojant ES6 klases sukurkite automobilių objektų kūrimo konstruktorių (Car),
// kuris turės šias savybes:
// make
// model
// year
// ir metodus:
//
// getIntroduction, kuris grąžins pilną pavadinimą (su make ir model).
//
// getAge, kuris gražins “10 metų arba naujesnis”,
// jei automobilio amžius yra 10 metų arba naujesnis arba “11 metų arba senesnis”,
// jei automobilio amžius yra 11 metų arba senesnis (šio metodo logikai naudokite ternary operatorių ir Date() metodą)

let car = new Car ('Audi', '80', 1993);
let car1 = new Car ('BWM', 'E46', 2019);

console.log(car.getIntroduction());
console.log(car.getAge());
console.log(car1.getIntroduction());
console.log(car1.getAge());
