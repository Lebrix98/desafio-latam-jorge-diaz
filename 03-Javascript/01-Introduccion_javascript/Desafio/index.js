// Variables
const precio = 400000;
let i = 0;

// Elements
var count = document.querySelector(".cantidad");
var precioSpan = document.querySelector(".precio-inicial");
var total = document.querySelector(".valor-total");

// Initialize
precioSpan.innerHTML = precio.toLocaleString();
total.innerHTML = precio * i;

// Buttons
function btnAdd() {
  i++;
  count.innerHTML = i;
  funcUpdate();
}

function btnSubtract() {
  if (i > 0) {
    i--;
    count.innerHTML = i;
    funcUpdate();
  }
}

function funcUpdate() {
  var valTotal = precio * i;
  total.innerHTML = valTotal.toLocaleString();
}
