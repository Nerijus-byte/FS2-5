let numbers = [5, 1, 7, 2, -9, 8, 2, 7, 9, 4, -5, 2, -6, -4, 6];

// 1. Parašykite funkciją arrDoubled, kuri sukuria ir grąžina naują masyvą, kurio elementai padauginti iš 2;

let arrDoubled = numbersofArray => numbersofArray.map(num => num * 2);
    console.log(arrDoubled(numbers));

// 2. Parašykite funkciją arrMultiplied, kuri sukuria ir grąžina naują masyvą, kurio elementai padauginti iš argumentu nurodyto skaičiaus

let arrMultiplied = (input, multi) => input.map(num => num * multi);
    console.log(arrMultiplied(numbers, 4));

// 3. Parašykite funkciją arrCountTwos, kuri suskaičiuoja dvejetus masyve

let arrCountTwos = numbOfTwo => numbOfTwo.filter(num => num == 2);
    console.log(arrCountTwos(numbers));

// 4. Parašykite funkciją arrIndexOfFirst, kuri grąžintu pirmo surasto, argumentu nurodyto skaičiaus, indeksą masyve. Jei skaičius nerastas funkcija turi grąžinti -1.

let arrIndexOffFirst = (input, num) => input.indexOf(num);
    console.log(arrIndexOffFirst(numbers, 3));

// 5. Parašykite funkciją arrIndexOfLast, kuri grąžintu paskutinio surasto, argumentu nurodyto skaičiaus, indeksą masyve. Jei skaičius nerastas funkcija turi grąžinti -1.

let arrIndexOfLast = (input, lastnum) => input.lastIndexOf(lastnum);
    console.log(arrIndexOfLast(numbers,2));

// 6. Parašykite funkciją reverseNumbers, kuri pakeis skaičius vietomis taip, kad pirmas skaičius taps paskutiniu, antras piešpaskutiniu, o buvęs paskutinis taps pirmu, priešpaskutinis bus antru.
// Pvz.: Turime skaičius 32243;
// Iškvietus funkciją rezultata bus: 34223

let reverseNumbers = numbe => parseFloat(numbe.toString().split('').reverse().join('')) * Math.sign(numbe)
    console.log(reverseNumbers(32243));

// 7. Parašykite  funkciją, kuri kaip argumentą priims skaičių masyvą ir suras atitinkamai mažiausią ir didžiausią skaičių bei juos grąžins.
// Pvz.: Turime masyvą: [8,5,4,2,7,1,9]
// Iškvietus funkciją rezultata bus: "Mažiausas: 1, Didžiausas: 9"

let numberss = [8,5,4,2,7,1,9];
let minMaxOfArray = input => ('Maziausias:' + Math.min(...input) + ' ' + 'Didziausias:' + Math.max(...input));
    console.log(minMaxOfArray(numberss));

// 8. Parašykite  funkciją checkForLetters, kuri priims du argumentus: Pirmas argumentas bus sakinys (arba žodžiai (-is)) ir antras argumentas bus raidė (kaip string). Funkcija turės suskaičiuoti kiek pirmu agrumentu nurodytame sakinyje/žodžiuose(-yje) yra antru argumentu nurodytų raidžių ir gražinti tų raidžių sumą su sakiniu pvz.: “Raidė “v” sakinyje rasta 4 kartus”.

let checkForLetters = (word, letter) => word.split('').filter(input => input == letter).length;
    console.log(checkForLetters('Jonas buvo artojas ', 'o'));

// 9. Parašykite funckiją, kuri ras visus skaičius esančius msyve ir gražins juos kaip atsikrą masyvą. Naujame masyve visi skaičiai bus surikiuoti nuo mažiausio iki didžiausio.
// let arr2 = [8, 'Hello', 'click', 'u', 7, 4, 'a', 'a', 3, 6, "chair", ,10, 1];
// Iškvietus funkciją rezultata bus: [1,3,4,6,7,8,10];

let arr2 = [8, 'Hello', 'click', 'u', 7, 4, 'a', 'a', 3, 6, "chair", ,10, 1];
let sortArray = listOfArray => listOfArray.filter(input => typeof(input) == 'number').sort((a, b) => a - b);
    console.log(sortArray(arr2));

// 10. Sukurkite funkciję checkIfAllSmaller(arr, max), BE MASYVO METODŲ, kuri patikrintų ar visi skaičiai masyve yra didesni negu perduota reikšmė max;
// Pvz.: Turime masyvą:
//let arr1 = [2, 7, 6, 9, 5];
// Iškvietus funkciją checkIfAllSmaller(arr1, 5) rezultata bus: False

let arr1 = [2, 7, 6, 9, 5];
let checkIfAllSmaller = (arr, max) => {
        for (let i = 0; i < arr.length; i++ ){
            if (max > arr[i]){
                return false;
            }
        } return true;
    }
    console.log(checkIfAllSmaller(arr1,5));

// 11. Parašykite funkciją filteredByLetter, kuri turi du parametrus: 1. masyvas; 2. raidė. Funkcija sukuria ir grąžina naują masyvą, kuriame yra visi masyvo, nurodyto kaip pirmas parametras elemntai, kuriuose galima rasti antru paramatetru nurodytą raidę.
// Testuosime šį masyvą
let citiesOfLithuania = [
    'Vilnius',
    'Kaunas',
    'Klaipėda',
    'Šiauliai',
    'Panevėžys',
    'Alytus',
    'Marijampolė',
    'Mažeikiai',
    'Jonava',
    'Utena',
];
let filteredByLetter = (arr, letter) => arr.filter(input => input.includes(letter));
    console.log(filteredByLetter(citiesOfLithuania, 'Š'));

// 12. Parašykite penkias funkcijas:
// - calculateValue()
// - addition()
// - subtraction()
// - multiplication()
// - division()

// Pagridinė funkcija bus calculateValue(num1, num2, action), kuri priims tris argumentus: a) num1 - skaičius;b) num2 - skaičius; c) action - (matematinis veiksmas kaip string pvz. “substraction”). Būtina, kad funckija validuotų ar num1 ir num2 yra skaičiai.

// Priklausomai trečio argumento (action), su pirmais dviem (num1 ir num2) bus atliekamas matematinis veiksmas ir kviečiama viena iš keturių funkcijų, kurios priims du argumentus (num1 ir num2) ir grąžins atlikta veiksmą.

// Pastaba: šios funkcijos: addition(), subtraction(), multiplication(), division() turi būti kviečiamas calculateValue() viduje, o aprašomos išorėje.

let addition = (num1, num2) => num1 + num2;
let subtraction = (num1, num2) => num1 - num2;
let multiplication = (num1, num2) => num1 * num2;
let division = (num1, num2) => num1 / num2;

function calculateValue(num1, num2, action) {
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        return false;
    }
    if (typeof action === "function") {
         return action(num1,num2)
    }
}

console.log(calculateValue(10,8,multiplication));



