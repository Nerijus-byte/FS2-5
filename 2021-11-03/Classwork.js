// Naudojant ES6 klases sukurkite objekto Filmas (Movie) kūrimo konstruktorių, kuris turės šias savybes:
//     1. name; 2. year; 3. director; 4. budget; 5. income.
//     ir metodus:
//     1. getIntroduction, kuris grąžins filmo pilną pavadinimą (su name, year, director);
// 2. getProfit, kuris grąžins sumą, kurią uždirbo (pelną) filmas.
//     Testavimui, sukurkite du filmus, kurie turės nurodytas savybes ir metodus.

let movie = new Movie('The Curse of the Black Pearl', '2003', 'Gore Verbinski', '140', '654');
let movie1 = new Movie('Dead Man\'s Chest', '2006', 'Gore Verbinski', '225', '1066');

console.log(movie.getIntroduction(), movie.getProfit());
console.log(movie.getIntroduction(), movie1.getProfit());