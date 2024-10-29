IncrementFont = (title, px) => {
  var parr = document.querySelector(`#${title}`);
  var fsNow = parseInt(parr.style.fontSize) || 1;
  var fsUpdate = `${fsNow + px}px`;
  parr.style.fontSize = fsUpdate;
};

ResetFont = (title) => {
  var parr = document.querySelector(`#${title}`);
  var reset = `1px`;
  parr.style.fontSize = reset;
};

por_dos = (num) => {
  return num * 2;
};

console.log(por_dos(10));

por_n = (num, x) => {
  return num * x;
};

console.log(por_n(10, 5));

alertMessage = () => {
  console.log("Hola Mundo");
};

var btn = document.querySelector("#viewMessage");
btn.addEventListener("click", alertMessage);

// Agregar/Eliminar Elementos

document.addEventListener("keydown", function (event) {
  if (event.key === "a" || event.key === "A") {
    addElement();
  } else if (event.key === "d" || event.key === "D") {
    deleteElement();
  }
});

addElement = () => {
  var content = document.querySelector(".box3");
  var newElement = document.createElement("div");
  newElement.textContent = "Elemento Creado";

  content.appendChild(newElement);
};

deleteElement = () => {
  var content = document.querySelector(".box3");
  var allContent = content.querySelectorAll("div");

  if (allContent.length > 0) {
    content.removeChild(allContent[allContent.length - 1]);
  }
};
