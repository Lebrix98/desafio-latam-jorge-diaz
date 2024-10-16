// Variables
const precio = 400000;
let i = 0;

// Elements
var count = document.querySelector(".cantidad");
var precioSpan = document.querySelector(".precio-inicial");
var total = document.querySelector(".valor-total");

// Initialize
precioSpan.innerHTML = precio;
total.innerHTML = precio * i;

// Buttons
function btnAdd() {
  i++;
  count.innerHTML = i;
  updateTotal();
}

function btnSubtract() {
  if(i > 0){
    i--;
    count.innerHTML = i;
    updateTotal();
  }
}

function updateTotal() {
  const value = precio * i;
  total.innerHTML = value;
}
