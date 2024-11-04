// Actividad 1 : Accediendo a los nombres

let names = [
  "Juan",
  "Luisa",
  "Fabian",
  "Jorge",
  "Elon",
  "Steve",
  "Bill",
  "Estefany",
];

console.log(names[0]);
console.log(names[5]);
console.log(names[names.length - 1]);

// Actividad 2 : Creando elementos a partir de un arreglo
const data = ["Javiera", "Camila", "Francisco", "Jorge", "Daniela"];
const d = document.querySelector("#nameItems");
let nameTexts = "";

for (let item of data) {
  nameTexts += `<li> ${item} </li>`;
}
d.innerHTML = nameTexts;

// Actividad 2.1: Crea una nueva página web llamada precios.html.
const priceProduct = [1000, 2500, 3100, 4800, 7500];
const numberProd = document.querySelector("#price");
let priceText = "";

for (let prod of priceProduct) {
  priceText += `<p> ${prod} </p>`;
}
numberProd.innerHTML = priceText;

//

const values = [1200, 350, 1500, 1400, 250, 5000, 1950, 1952];
const valNumber = document.querySelector("#datos");
let valText = "";
for (let val of values) {
  if (val > 1000 && val < 2000) {
    valText += `<li>${val}</li>`;
  }
}

valNumber.innerHTML = valText