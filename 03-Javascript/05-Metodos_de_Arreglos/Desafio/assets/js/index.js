// Valor input
const inputText = document.querySelector("#value");

// Total y Realizadas
const total = document.querySelector("#todoCount");
const realizadas = document.querySelector("#checkCount");

// Lista de Tareas
const listTodo = document.querySelector("#todoList");

// Array vacio
let array = [];
let i = 0;

const renderTodo = () => {
  let printHtml = "";
  for (let item of array) {
    printHtml += `
      <tr>
      <td>${item.id}</td>
      <td>${item.todo}</td>
      <td><input type="checkbox" checked="${item.check}" /></td>
      <td><button onclick="deleteTodo(${item.id})">X</button></td>
      </tr>`;
  }

  listTodo.innerHTML = printHtml;
};

function addTodo() {
  let val = { id: i, todo: inputText.value, check: false };

  if (val.todo.length > 0) {
    val.id = i++
    array.push(val);
    inputText.value = "";

    renderTodo();
  }
}

const deleteTodo = (id) => {
  let index = array.findIndex((elem) => elem.id == id);
  array.splice(index, 1);

  renderTodo();
};
