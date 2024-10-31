const con1 = document.getElementById("box-1");
const con2 = document.getElementById("box-2");
const con3 = document.getElementById("box-3");
const con4 = document.getElementById("box-4");

con1.addEventListener("click", () => {
  con1.style.backgroundColor = "black";
});
con2.addEventListener("click", () => {
  con2.style.backgroundColor = "black";
});
con3.addEventListener("click", () => {
  con3.style.backgroundColor = "black";
});
con4.addEventListener("click", () => {
  con4.style.backgroundColor = "black";
});

/* Agregado */

const reset = document.getElementById("reset");

reset.addEventListener("click", () => {
  con1.style.backgroundColor = "blue";
  con2.style.backgroundColor = "red";
  con3.style.backgroundColor = "green";
  con4.style.backgroundColor = "yellow";
});
