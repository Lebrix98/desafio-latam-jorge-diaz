/* 
Variables

var = Variable cuyo alcance será Global
let = Variable cuyo alcance será limitado a un bloque
const = Variable cuyo valor no va a cambiar

*/

// Var

// var a = 5
// console.log("Antes::",a)
// if ( a = 10 ) {
//     console.log("Despues::",a)
// }

// Let

// let x = 5
// console.log("Antes::",x)
// if ( x = 10 ) {
//     console.log("Despues::",x)
//     let z = 10;
// }

// console.log(z)

// Const

// const i = 5
// console.log("Antes::",i)
// if ( i = 10 ) {
//     console.log("Despues::",i) // Error
// }

// Crear Funciones ****

function printBlack() {
  elemento = document.querySelector("body");
  elemento.style.backgroundColor = "black";
}

function printRed() {
  elemento = document.querySelector("body");
  elemento.style.backgroundColor = "red";
}

function printYellow() {
  elemento = document.querySelector("body");
  elemento.style.backgroundColor = "yellow";
}

// printBlack();
// printRed();
// printYellow();

// Crear Funciones con Parametros ****

function print(color) {
  elemento = document.querySelector("h1");
  elemento.style.backgroundColor = color;
}

printBack = function (color) {
  elemento = document.querySelector("h1");
  elemento.style.backgroundColor = color;
};

// print("blue")
// printBack("crimson")

// Crear funcion de multiples parametros ****

funcionMultiplesParametros = function (color, component, num) {
  elemento = document.querySelector(component);
  elemento.style.backgroundColor = color;
  console.log(num)
};

// funcionMultiplesParametros("blue", "#id-2", 5);


// Crear funcion de multiples parametros por defecto ****

funcionMultiplesParametros = function (color, component = "#id-2", num = 5) {
    elemento = document.querySelector(component);
    elemento.style.backgroundColor = color;
    console.log(num)
  };
  
//   funcionMultiplesParametros("blue");

// Funciones y DOM

printBox = ( color, component ) => {

    elemento = document.querySelector(component);
    elemento.style.backgroundColor = color

}

resetColors = () => {
    var box1 = document.querySelector("#rojo")
    var box2 = document.querySelector("#azul")
    var box3 = document.querySelector("#amarillo")

    box1.style.backgroundColor = "white";
    box2.style.backgroundColor = "white";
    box3.style.backgroundColor = "white";

}

addBorder = (elementID, textID) => {

    var elemento = document.querySelector(`#${elementID}`);
    var color = document.querySelector(`#${textID}`).value;

    console.log(color)
    elemento.style.border = `5px dashed ${color}`

}

sumValue = (num1, num2, textSum) => {

    var val1 = Number(document.querySelector(`#${num1}`).value)
    var val2 = Number(document.querySelector(`#${num2}`).value)
    var text = document.querySelector(`#${textSum}`)

    suma = val1 + val2

    text.innerHTML = suma

}

getBkgColor = (color, text) => {

    var bkgColor = document.querySelector(`#${color}`)
    var par = document.querySelector(`#${text}`)

    return par.innerHTML = bkgColor.style.backgroundColor

}

getValue = (sel, text) => {

    var val = Number(document.querySelector(`#${sel}`).value)
    var par = document.querySelector(`#${text}`)

    if (val < 5) {
        par.innerHTML = `${val} muy poco`
    } else if ( val == 5) {
        par.innerHTML = `${val} exacto`
    } else {
        par.innerHTML = `${val} es mucho`
    }

}