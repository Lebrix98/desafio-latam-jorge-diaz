/*
Actividad 1: Agregando elementos con push
Crea el archivo 'superheroes.js' donde a partir del siguiente 
arreglo deberás:

let superHeroes= [
"Ironman",
"Superman",
"Hawkeye"
]

1. Agregar el nombre de un superhéroe al final del arreglo usando 
el método push
2. Agregar el nombre de un superhéroe al principio del arreglo 
usando el método unshift
3. Agregar el nombre de un tercer superhéroe en la mitad del 
arreglo usando el método splice
4. Mostrar el arreglo utilizando console.log
*/
console.log("------------------------------------------");
console.log("Actividad 1");
let superHeroes = ["Ironman", "Superman", "Hawkeye"];
console.log("Array::", superHeroes); // "Ironman", "Superman", "Hawkeye"

superHeroes.push("Spiderman");
console.log("Push::", superHeroes); // 'Ironman', 'Superman', 'Hawkeye', 'Spiderman'

superHeroes.unshift("Batman");
console.log("Unshift::", superHeroes); // 'Batman', 'Ironman', 'Superman', 'Hawkeye', 'Spiderman'

/*
Actividad 2: Agregando y borrando elementos

Crear el archivo inAndOut.js con el siguiente arreglo

const usuarios = ["Erick", "Cristian", "Max", "Claudia"];

1. Utilizando pop sacar el último elemento.
2. Agregar a María José al principio.
3. RemueveaCristian utilizando splice.
*/
console.log("------------------------------------------");
console.log("Actividad 2");
const usuarios = ["Erick", "Cristian", "Max", "Claudia"];
console.log("Array::", usuarios); // 'Erick', 'Cristian', 'Max', 'Claudia'

usuarios.pop();
console.log("Pop::", usuarios); // 'Erick', 'Cristian', 'Max'

usuarios.splice(1, 1);
console.log("Slice::", usuarios); // 'Erick', 'Max'

/*
Actividad 3: Encontrando y eliminando una película

Realicemos el siguiente ejercicio en donde debamos eliminar la película
“Terminator” del siguiente arreglo

const peliculas = [
  { id: 1, nombre: "Thor" },
  { id: 2, nombre: "Ant-Man" },
  { id: 3, nombre: "Terminator" },
  { id: 4, nombre: "Ip Man" },
  { id: 5, nombre: "Rocky" },
];

1. Utiliza el findIndex para encontrar el índice de la película Terminator
2. Utiliza el splice y el índice encontrado para eliminar la película del arreglo
3. Muestra por consola el arreglo de películas para confirmar que Terminator fue
eliminada.
*/
console.log("------------------------------------------");
console.log("Actividad 3");
const peliculas = [
  { id: 1, nombre: "Thor" },
  { id: 2, nombre: "Ant-Man" },
  { id: 3, nombre: "Terminator" },
  { id: 4, nombre: "Ip Man" },
  { id: 5, nombre: "Rocky" },
];

const index = peliculas.findIndex((item) => item.nombre === "Terminator");
console.log("Index::", index); // Index de Terminator
console.log("Array::", peliculas); // (5) [{…}, {…}, {…}, {…}, {…}]

peliculas.splice(index, 1);
console.log("Splice-Index::", peliculas); // (4) [{…}, {…}, {…}, {…}]

/*
Actividad 4: Filtrar y contar

let trabajadores = [
  { nombre: "Contanza", cargo: "Chef" },
  { nombre: "Luis", cargo: "garzón" },
  { nombre: "Estefany", cargo: "Administradora" },
  { nombre: "Andrés", cargo: "Recepcionista" },
  { nombre: "Pedro", cargo: "garzón" },
  { nombre: "Felipe", cargo: "Aseo" },
  { nombre: "Maria", cargo: "garzón" },
  { nombre: "Diego", cargo: "garzón" },
];

1. Con el método filter, filtrar el arreglo de trabajadores, 
creando un nuevo arreglo llamado garzones que contenga 
sólo los trabajadores con cargo “garzón”.
2. Utiliza el arreglo resultante del requerimiento anterior 
y la propiedad length para mostrar con console.log cuántos garzones hay.
*/
console.log("------------------------------------------");
console.log("Actividad 4");

let trabajadores = [
  { nombre: "Contanza", cargo: "Chef" },
  { nombre: "Luis", cargo: "garzón" },
  { nombre: "Estefany", cargo: "Administradora" },
  { nombre: "Andrés", cargo: "Recepcionista" },
  { nombre: "Pedro", cargo: "garzón" },
  { nombre: "Felipe", cargo: "Aseo" },
  { nombre: "Maria", cargo: "garzón" },
  { nombre: "Diego", cargo: "garzón" },
];

console.log("Array::", trabajadores); // (8) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]

const garzones = trabajadores.filter((item) => item.cargo === "garzón");
console.log("Filter::", garzones); // (4) [{…}, {…}, {…}, {…}]

const numGarzones = garzones.length;
console.log("Length::", numGarzones); // 4

/*
 Actividad 5: Creando una interfaz para ingresar tareas.

Crea el archivo milistadetaraes.html donde practicaremos realizando 
los mismos pasos desde cero, esta vez construyendo una lista de tareas. 
A partir de ahora las actividades servirán como base para el desafío.

● Crear el archivo milistadetaraes.html con la base de HTML.
● Agregar un input para ingresar el nombre de la tarea
● Agregar el botón
● Dejar una sección, div, ul u otro elemento para ingresar las tareas
● Agregar la etiqueta script al final de body
● Obtener los elementos HTML necesarios y guardarlos en variables globales
● Crear un arreglo vacío llamado tareas para guardar las tareas
● Agregar el listener del evento al botón donde se seleccione el 
texto del input y se guarda dentro del arreglo
● Dentro de la función del listener actualizar el HTML
*/

/*
Actividad 6: Actualizando la cuenta de tareas

● Dentro del html agregar la siguiente etiqueta 
<span id="cuenta-tareas"> </span>
● Dentro del script obtener el elemento utilizando querySelector o 
getElementById y guardarlo en una variable global
● Después de actualizar la lista de tareas en el event listener, 
actualizar la lista de tareas. 
Utilizar tareas.length para obtener la cantidad de tareas.
*/

/*
Actividad 7: Modifica el programa de tareas

1. Modifica el programa de tareas creado en la actividad anterior 
para que funcione con un arreglo de objetos.
*/
console.log("------------------------------------------");
console.log("Actividad 5, 6 y 7");

const valueTodo = document.querySelector("#todoValue");
const btnAddTodo = document.querySelector("#addNewTodo");
const listTodo = document.querySelector("#todos");

const valueSearch = document.querySelector("#searchValue");
const btnSearch = document.querySelector("#searchTodo");

const countTodo = document.querySelector("#cuenta-tareas");

let arrayTodo = [];
let i = 1;

const render = (todosItems) => {
  let printTodo = "";

  for (const item of todosItems) {
    printTodo += `<li>${item.name} <button onclick=deleteTodo(${item.id}) >X</button></li>`;
  }

  listTodo.innerHTML = printTodo;
};

btnAddTodo.addEventListener("click", () => {
  let todo = { id: i, name: valueTodo.value };

  console.log(todo);

  if (todo.name.length > 0) {
    todo.id = i++;
    arrayTodo.push(todo);
    valueTodo.value = "";
    render(arrayTodo);
  }

  let count = arrayTodo.length;
  countTodo.innerHTML = count;

  console.log("Add::", arrayTodo);
  console.log("Count::", count);
});

const deleteTodo = (id) => {
  const index = arrayTodo.findIndex((item) => item.id === id);
  arrayTodo.splice(index, 1);
  render(arrayTodo);

  console.log("Delete::", arrayTodo);
};

btnSearch.addEventListener("click", () => {
  let letter = valueSearch.value;

  const todoFilter = arrayTodo.filter((item) => item.name === letter);
  render( todoFilter.length > 0 ? todoFilter : arrayTodo );

  console.log("Filter::", todoFilter);
});
