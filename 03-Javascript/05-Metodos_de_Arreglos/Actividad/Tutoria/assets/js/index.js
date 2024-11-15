const serviciosHotel = [
  { id: 1, nombre: "Desayuno buffet" },
  { id: 2, nombre: "Servicio a la habitación" },
  { id: 3, nombre: "Acceso al spa" },
  { id: 4, nombre: "Wi-Fi de alta velocidad" },
  { id: 5, nombre: "Estacionamiento privado" },
];
console.log("Array::", serviciosHotel);
const listTodo = document.querySelector("#servicios-lista");
const valueAdd = document.querySelector("#serviceTodo");
const valueDelete = document.querySelector("#serviceTodo");

const renderService = () => {
  let printHtml = "";

  for (const item of serviciosHotel) {
    printHtml += `<li>${item.nombre} <button onclick=deleteTodo(${item.id})>X</button></li>`;
  }

  listTodo.innerHTML = printHtml;
};

const addTodo = () => {
  let inputValue = {
    id: serviciosHotel[serviciosHotel.length - 1].id + 1,
    nombre: valueAdd.value,
  };

  if (inputValue.nombre.length > 0) {
    serviciosHotel.push(inputValue);
    valueAdd.value = "";
  }
  console.log("AddTodo::", serviciosHotel);
  renderService();
};

const deleteTodo = (id) => {
  const index = serviciosHotel.findIndex((item) => item.id === id);
  serviciosHotel.splice(index, 1);
  console.log("Delete::", serviciosHotel);
  renderService();
};

renderService();
