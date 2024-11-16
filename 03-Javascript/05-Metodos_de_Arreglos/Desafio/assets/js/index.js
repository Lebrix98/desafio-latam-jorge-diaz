// Data
const data = [
  { id: 1, todo: "Despertar", check: true },
  { id: 2, todo: "Levantarme", check: true },
  { id: 3, todo: "Bañarme", check: false },
];

// Valor input
const inputText = document.querySelector("#value");

// Total y Realizadas
const total = document.querySelector("#todoCount");
const realizadas = document.querySelector("#checkCount");

// Lista de Tareas
const listTodo = document.querySelector("#todoList");

// Message input
const mess = document.querySelector("#message");

const renderTodo = () => {
  let printHtml = "";
  for (let item of data) {
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
  let val = {
    id: data[data.length - 1].id + 1,
    todo: inputText.value,
    check: false,
  };

  if (val.todo.length > 0) {
    data.push(val);
    inputText.value = "";
    updateValue();
    renderTodo();
    mess.innerHTML = "";
  } else {
    mess.innerHTML = "No ha ingresado nada aun";
  }
}

const deleteTodo = (id) => {
  let index = data.findIndex((elem) => elem.id == id);
  data.splice(index, 1);
  updateValue();
  renderTodo();
};

const completeTodo = (id) => {
  const todoComplete = data.find((elem) => elem.id === id);
  todoComplete.check = true;
  updateValue();
};

const updateValue = () => {
  let countTodos = data.filter((elem) => elem.check === true);
  total.innerHTML = data.length;
  realizadas.innerHTML = countTodos.length;
};

renderTodo();
updateValue();
