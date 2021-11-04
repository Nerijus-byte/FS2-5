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

let motorcycle = new Motorcycle('Harley', 'Bike', 2000, 3);
console.log(motorcycle.getWheelsNumber());

// Extends
//
// Naudojant ES6 subklases sukurkite motociklų objektų kūrimo konstruktorių
// (Motorcycle), kuris turės visas automobilių objektų kūrimo konstruktorių (Car) savybes ir metodus ir papildomai šią savybę:
//
// wheels (kurio vertė bus number).
//
// Ir metodą:
//
// getWheelsNumber, kuris grąžins “motociklas turi 3 ratus”,
// jei wheels vertė bus 3 ir “motociklas turi 2 ratus”,
// jei wheels vertė bus 2 (šio metodo logikai naudokite else if operatorių).

