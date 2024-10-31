/**
Nos piden crear una función getValue que obtenga el valor de un input 
a partir de un selector y devuelva un texto que diga "mucho" si el valor es igual 
al parámetro o "muy poco" si el valor es menor al parámetro.
*/

//Utilizando addEventListener

function getValue(selector, parametro) {
  const ele = document.querySelector(selector);
  const eleResultado = document.querySelector("#resultado");
  const valorBuscado = 10;

  if (Number(ele.value) == parametro) {
    eleResultado.textContent = "igual a " + valorBuscado;
  } else if (Number(ele.value) < parametro) {
    eleResultado.textContent = "muy poco, es menor de " + valorBuscado;
  } else {
    eleResultado.textContent = "muy alto, es mayor a " + valorBuscado;
  }
}

//Aquí se llama a la función
const btn = document.querySelector("#comprobar");
btn.addEventListener("click", function () {
  getValue("#text-valor", 10);
});
