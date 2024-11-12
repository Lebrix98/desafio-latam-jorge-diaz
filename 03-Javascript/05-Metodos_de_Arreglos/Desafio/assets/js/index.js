// Valor input
const inputText = document.querySelector("#value");

// Total y Realizadas
const total = document.querySelector("#todoCount");
const realizadas = document.querySelector("#checkCount");

// Lista de Tareas
const listTodo = document.querySelector("#todoList");

// Array vacio
let array = [];
let valTotal = 0;
let valRealize = 0;
let i = 0;

total.innerHTML = valTotal;
realizadas.innerHTML = valRealize;

const renderTodo = () => {
  let printHtml = "";
  for (let item of array) {
    printHtml += `
      <tr>
      <td>${item.id}</td>
      <td>${item.todo}</td>
      <td><input type="checkbox" onclick="completeTodo(${item.id})" ${
      item.check === true ? `checked` : ``
    } /></td>
      <td><button onclick="deleteTodo(${item.id})">X</button></td>
      </tr>`;
  }
  listTodo.innerHTML = printHtml;
};

function addTodo() {
  let val = { id: i, todo: inputText.value, check: false };

  if (val.todo.length > 0) {
    val.id = i++;
    array.push(val);
    inputText.value = "";
    updateValue();
    renderTodo();
  }
}

const deleteTodo = (id) => {
  let index = array.findIndex((elem) => elem.id == id);
  array.splice(index, 1);
  updateValue();
  renderTodo();
};

const completeTodo = (id) => {
  const todoComplete = array.find((elem) => elem.id === id);
  todoComplete.check = true;
  updateValue();
};

const updateValue = () => {
  let countTodos = array.filter((elem) => elem.check === true);
  total.innerHTML = array.length;
  realizadas.innerHTML = countTodos.length;
};
