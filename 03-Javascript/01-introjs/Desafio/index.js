// Variables
const precio = 400000;
let i = 0;
const value = precio * i;

// Elements
var count = document.querySelector(".cantidad");

precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio;

total = document.querySelector(".valor-total");
total.innerHTML = value;


// Buttons
function btnAdd() {
  i++;
  count.innerHTML = i;
}

function btnSubtract() {
  i--;
  count.innerHTML = i;
}