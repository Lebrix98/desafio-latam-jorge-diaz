var edad = 17; // prompt("Introduce tu edad")

if (edad < 18) {
  // alert("Lo siento no puedes acceder a esta página")
  console.log("Lo siento no puedes acceder a esta página");
}

var temp = 30; // Number(prompt("Cual es la temperatura actual"))

if (30 <= temp) {
  console.log("Uffff que calor");
}

var pass = "Dandadan";

if (pass == "Dandadan") {
  console.log("Conoces la contraseña :o");
}

function Verificate() {
  var key = document.querySelector("#input").value;
  var victory = document.querySelector("#secret-result");

  if (key == "One Piece") {
    victory.innerHTML = "Lo lograste";
  } else {
    victory.innerHTML = "Error";
  }
}

function VerificateNumber() {
  var key = document.querySelector("#numero").value;
  var victory = document.querySelector("#valorIngresado");

  if (50 <= key) {
    victory.innerHTML = "Superaste la Cantidad";
  } else {
    victory.innerHTML = key;
  }
}

var sliceCake = 8;
var guest = 4;

let cakeForGuest = sliceCake / guest;

if (1 <= cakeForGuest) {
  console.log("Hay torta para todoooos!!! :))))");
} else {
  console.log("No hay torta para todos!!! :((((");
}

var typeScreen = Number(prompt("Ingrese tamaño de pantalla"))

if (typeScreen < 576) {
  console.log("Pantalla XS");
} else if (typeScreen < 768) {
  console.log("Pantalla SM");
} else if (typeScreen < 962) {
  console.log("Pantalla MD");
} else if (typeScreen < 1200) {
  console.log("Pantalla XL");
} else {
  console.log("Pantalla XXL")
}

function VerificateScreen() {
  var key = document.querySelector("#screen").value;
  var victory = document.querySelector("#screenView");

  if (key < 576) {
    victory.innerHTML = "Pantalla XS";
  } else if (key < 768) {
    victory.innerHTML = "Pantalla SM";
  } else if (key < 962) {
    victory.innerHTML = "Pantalla MD";
  } else {
    victory.innerHTML = "Pantalla XL";
  }
}
