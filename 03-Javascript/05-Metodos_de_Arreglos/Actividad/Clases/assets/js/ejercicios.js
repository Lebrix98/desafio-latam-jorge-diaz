/* Ejercicio 1
Realicemos el siguiente ejercicio en donde a partir del siguiente arreglo:

const superHeroes = ["Ironman", "Superman", "Hawkeye"];

1. Agrega el nombre de un  superhéroe al final del arreglo usando el método push
2. Agrega el nombre de un  superhéroe al principio del arreglo usando el método unshift
*/

const superHeroes = ["Ironman", "Superman", "Hawkeye"];
console.log("Array::", superHeroes); // "Ironman", "Superman", "Hawkeye"
superHeroes.push("Hulk");
console.log("Push::", superHeroes); // "Ironman", "Superman", "Hawkeye", "Hulk"
superHeroes.unshift("Batman");
console.log("Unshift::", superHeroes); // "Batman", "Ironman", "Superman", "Hawkeye", "Hulk"

/* Ejercicio 2
Practicaremos realizando los mismos pasos anteriores desde el comienzo, pero esta vez para construir una lista de tareas.
*/

const valueTodo = document.querySelector("#todoValue");
const btnAddTodo = document.querySelector("#addNewTodo");
const listTodo = document.querySelector("#todos");
let arrayTodo = [];

btnAddTodo.addEventListener("click", () => {
  let todo = valueTodo.value;
  arrayTodo.push(todo);
  valueTodo.value = "";

  let printTodo = "";

  for (const arrTodo of arrayTodo) {
    printTodo += `<li>${arrTodo}</li>`;
  }

  listTodo.innerHTML = printTodo;
});

/* Ejercicio 3
Realicemos el siguiente ejercicio en donde debamos eliminar la talla 44 del siguiente arreglo:

const tallasDisponibles = [ 41, 42, 43, 44, 45 ]

1. Utiliza el splice para borrar el elemento en el índice 3
2. Utiliza findindex y splice para borrar el elemento con el valor 43
*/

const tallasDisponibles = [41, 42, 43, 44, 45];
console.log("Array::", tallasDisponibles); // 41, 42, 43, 44, 45
tallasDisponibles.splice(3, 1);
console.log("Splice::", tallasDisponibles); // 41, 42, 43, 45
const index = tallasDisponibles.findIndex((elem) => elem === 43);
tallasDisponibles.splice(index, 1);
console.log("FindIndex&&Splice::", tallasDisponibles); // 41, 42, 45

/* Ejercicio 4
Realicemos el siguiente ejercicio en donde debamos ofrecer una lista de servicios básicos pendientes por pagar que puedan eliminarse por parte del usuario. Solo el borrado, no hay que agregarlos
Para esto ocupa el siguiente HTML:

<h4>Servicios pendiente por pagar:</h4>
<ul class="servicios"></ul>

Y el siguiente arreglo:

const servicios = [
 { id: 1, nombre: "Agua" },
 { id: 2, nombre: "Electricidad" },
 { id: 3, nombre: "Gas" },
 { id: 4, nombre: "Internet" },
 { id: 5, nombre: "Cable Tv" },
];
*/

const servicios = [
  { id: 1, nombre: "Agua" },
  { id: 2, nombre: "Electricidad" },
  { id: 3, nombre: "Gas" },
  { id: 4, nombre: "Internet" },
  { id: 5, nombre: "Cable Tv" },
];

const serviceTodo = document.querySelector(".servicios");

const renderService = () => {
  let printService = "";

  for (let todo of servicios) {
    printService += `<li>${todo.nombre} <button onclick="deleteService(${todo.id})">X</button></li>`;
  }

  const message = servicios.length === 0 ? "Todo pagado!!" : printService;

  serviceTodo.innerHTML = message;
};

renderService();

const deleteService = (id) => {
  let index = servicios.findIndex((elem) => elem.id == id);
  servicios.splice(index, 1);

  renderService();
};
