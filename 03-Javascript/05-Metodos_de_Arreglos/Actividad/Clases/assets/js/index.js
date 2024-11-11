const invitadoInput = document.querySelector("#nuevoInvitado");
const btnAgregar = document.querySelector("#agregarInvitado");
const listaDeInvitados = document.querySelector("#invitados");
let array = [];

// btnAgregar.addEventListener("click", () => {
//   let val = invitadoInput.value;
//   array.push(val);
//   invitadoInput.value = "";
//   console.log("Array::", array);

//   let printHtml = "";
//   for (let arr of array) {
//     printHtml += `<li>${arr}</li>`;
//   }
//   listaDeInvitados.innerHTML = printHtml;
// });

const render = () => {
  let printHtml = "";

  for (let arr of array) {
    printHtml += `<li style="width: 100%; max-width: 10rem">${arr.name} <button style="width: 100%; max-width: 2rem" onclick="borrar(${arr.id})">X</button></li>`;
  }
  listaDeInvitados.innerHTML = printHtml;
};

btnAgregar.addEventListener("click", () => {
  let val = { id: Date.now(), name: invitadoInput.value };
  array.push(val);
  invitadoInput.value = "";
  render();
});

const borrar = (id) => {
  let index = array.findIndex((elem) => elem.id == id);
  array.splice(index, 1);
  render();
};
