// ["==", "Igual"]
// ["!=", "Distinto"]
// [">", "Mayor"]
// ["<", "Menor"]
// [">=", "Mayor o igual"]
// ["<=", "Menor o igual"]

// EDAD
var edad = 17; // prompt("Introduce tu edad")

if (edad < 18) {
  // alert("Lo siento no puedes acceder a esta página")
  console.log("Lo siento no puedes acceder a esta página");
}

// TEMPERATURA
var temp = 30; // prompt("Cual es la temperatura actual")

if (30 <= temp) {
  console.log("Uffff que calor");
}

// Constraseña
var pass = "Dandadan";

if (pass == "Dandadan") {
  console.log("Conoces la contraseña :o");
}

// Pastel
var sliceCake = 8;
var guest = 4;

let cakeForGuest = sliceCake / guest;

if (1 <= cakeForGuest) {
  console.log("Hay torta para todoooos!!! :))))");
} else {
  console.log("No hay torta para todos!!! :((((");
}

// Tipo Pantalla
var typeScreen = 1000; // prompt("Ingrese tamaño de pantalla")

if (typeScreen < 576) {
  console.log("Pantalla XS");
} else if (typeScreen < 768) {
  console.log("Pantalla SM");
} else if (typeScreen < 962) {
  console.log("Pantalla MD");
} else if (typeScreen < 1200) {
  console.log("Pantalla XL");
} else {
  console.log("Pantalla XXL");
}

// IMC
function CalculateIMC() {
  var weight = document.querySelector("#peso").value;
  var height = document.querySelector("#altura").value;
  var par = document.querySelector("#valor");

  var imc = weight / (height * height);

  if (imc < 18.5) {
    console.log(`${imc} Tiene un IMC bajo`);
    par.innerHTML = imc;
  } else if (imc < 24.9) {
    console.log(`${imc} Tiene un IMC normal`);
    par.innerHTML = imc;
  } else {
    console.log(`${imc} Tiene un IMC alto`);
    par.innerHTML = imc;
  }
}

// Email and Pass

function CheckEmail() {
  var correo = document.querySelector("#email").value;
  var contraseña = document.querySelector("#pasword").value;
  var check = document.querySelector("#user");

  if (correo == "jorgediazl1998@gmail.com" && contraseña == "Namisan") {
    check.innerHTML = `El user ${correo} es correcto!!!`;
  } else {
    check.innerHTML = `El user ${correo} es incorrecto!!!`;
  }
}

// Salario

function emptyField() {
  var sal1 = document.querySelector("#salario").value;
  var sal2 = document.querySelector("#salario-anterior").value;
  var par = document.querySelector("#empty");

  if (sal1 != "" || sal2 != "") {
    par.innerHTML = "Correcto";
  } else {
    par.innerHTML = "Incorrecto XXXXX";
  }
}

// Options

function CheckedOtp() {
  var check1 = document.querySelector("#opt1").checked;
  var check2 = document.querySelector("#opt2").checked;
  var par = document.querySelector("#textValue");

  if (check1 == true && check2 == true) {
    par.innerHTML = "Ambos elementos marcados";
  } else if (check1 == false && check2 == true) {
    par.innerHTML = "Solo la Opción 2 a sido marcada";
  } else if (check1 == true && check2 == false) {
    par.innerHTML = "Solo la Opción 1 a sido marcada";
  } else {
    par.innerHTML = "Por favor seleccione una opción";
  }
}

// Options Validate

function ValidateOtp() {
  var check1 = document.querySelector("#opt1").checked;
  var check2 = document.querySelector("#opt2").checked;
  var check3 = document.querySelector("#opt3").checked;
  var btn = document.querySelector("#btnEnviar");
  var par = document.querySelector("#textValue");

  if (check1 == true && check2 == true && check3 == true) {
    par.innerHTML = "Todos los Elementos han sido marcados.";
    btn.disabled = false;
  }
}

function sendInfo() {
  alert("Se a enviado toda la información");
}

// Examples inline and ternarios

var num = 100;

if (num === "100") console.log("Son estrictamente iguales");
else console.log("No son iguales");

// If Classic

if (1 + 1 === 2) {
  console.log("Son iguales");
} else {
  console.log("Son distintos");
}

// Ternarios

1 + 1 === 2 ? console.log("Son iguales") : console.log("Son distintos");

// Actividad Ternario

var cuota = 5;

if (cuota >= 6) {
  console.log("Serán aplicados intereses en esta compra");
} else {
  console.log("No serán aplicados intereses en esta compra");
}

cuota >= 6
  ? console.log("Serán aplicados intereses en esta compra")
  : console.log("No serán aplicados intereses en esta compra");

function defect() {
  var inp = document.querySelector("#input-1").value || 0;

  console.log(inp);
}

// Preguntas Entrevista
// 1.- == comparación si es igual, en cambio === es estrictamente igual,
// ya sea en el tipo (Number, String, Float, etc) como en el contenido del elemento
//
// 2.- False, ya que el primer valor es de tipo Number y el valor a comparar es de
// tipo String por las ""
//
// 3.- Muestra "el numero es mayor a 3"