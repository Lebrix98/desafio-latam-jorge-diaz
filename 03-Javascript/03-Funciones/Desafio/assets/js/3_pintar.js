/* Desafio => 2.1 */
/* Distribución en las carpetas */

/* Desafio => 2.2 */
const ele = document.getElementById("ele1");

// Prueba
// ele.addEventListener("click", () => {
//   ele.style.backgroundColor = 'yellow';
// });

/* Desafio => 2.3 */
// const ele = document.getElementById("ele1");
function pintar(color = "green") {
  ele.style.backgroundColor = color;
}

pintar();

ele.addEventListener("click", function () {
  pintar("yellow");
});
