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
let age_tableV2 = document.querySelector('#age-table');
    console.log(age_table);
    console.log(age_tableV2);

let age = document.getElementById("age");
let ageV2 = document.querySelector("#age");
    console.log(age);
    console.log(ageV2);

let label_elements = document.getElementsByTagName("label");
let label_elementsV2 = document.querySelectorAll("label");
    console.log(label_elements);
    console.log(label_elementsV2);

let name = document.getElementById("fname");
let nameV2 = document.querySelectorAll("input:first-of-type")
    console.log(name);
    console.log(nameV2);

let input_age = document.getElementById("ageof");
let input_ageV2 = document.querySelectorAll("input:last-of-type");
    console.log(input_age);
    console.log(input_ageV2);
