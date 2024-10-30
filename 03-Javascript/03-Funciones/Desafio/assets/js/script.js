/* Desafio => 2.1 */
/* Distribución en las carpetas */

const ele = document.getElementById("ele1");
/* Desafio => 2.2 */
// ele.addEventListener("click", () => {
//   ele.style.backgroundColor = 'yellow';
// });

/* Desafio => 2.3 */
function pintar(color = "green") {
  ele.style.backgroundColor = color;
}

pintar();

ele.addEventListener("click", function () {
  pintar("yellow");
});
