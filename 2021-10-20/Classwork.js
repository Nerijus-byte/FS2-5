// DOM navigacija
//
// Sukurkite HTML dokumentą su lentele (table) ir forma (form). Dokumentu turi būti žemiau aptartos žymos (angl. tags) ir jų atributai.
//
//     Suraskite ir konsolėje atvaizduokite:
//
//     Lentelę su id = "age-table".
//
//     Pirmasis <td> toje lentelėje (su id “age”).
//
//     Visus <label> elementus lentelės viduje (jų turėtų būti 3).
//
//     Pirmasis įvestį (<input>) į formą.
//
//     Paskutinę įvestį (<input>) į formą.

let age_table = document.getElementById("age-table");
    console.log(age_table);

let age = document.getElementById("age");
    console.log(age);

let label_elements = document.getElementsByTagName("label");
    console.log(label_elements);

let name = document.getElementById("fname");
    console.log(name);

let input_age = document.getElementById("ageof");
    console.log(input_age);