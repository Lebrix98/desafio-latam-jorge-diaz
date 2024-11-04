/* Acceder a valores almacenados en un arreglo */
const bancos = ["Banco Estado", "Banco de Chile", "BCI", "Coopeuch"];

console.log(bancos[0], bancos[3]);

/* Mostrar los elementos de un arreglo por consola utilizando un ciclo */
const categorias = ["Tecnologia", "Oficina", "Música", "Otros"];

for (let categoria of categorias) {
  console.log(categoria);
}

/* Agregar elementos a una lista HTML a partir de un arreglo de Strings */
const data = ["Javiera", "Camila", "Francisco", "Jorge", "Daniela"];
const dynamic = document.getElementById("dynamic-content");
let dynamicNames = "";
for (let item of data) {
  dynamicNames += `<li>${item}</li>`;
}
dynamic.innerHTML = dynamicNames;

/* Crear un objeto con propiedades a partir de la interpretación de un texto */
let auto = {
  marca: "JAC",
  modelo: "S4",
  año: 2018,
  km: 60304,
};
console.log(auto.marca);

const articulo = {
  id: 31,
  titulo: "Autos nuevos en Chile",
  subtitulo: "El mercado de autos se normaliza",
  descripcion:
    "No es novedad que los precios de los autos usados se han disparado debido a la falta en stock de autos nuevos, sin embargo puede que esto esté llegando a su fin…",
};
const articuloSeccion = document.querySelector(".articulos");
let contenidoArticulo = "";
contenidoArticulo = `
<article class = "articulo">
    <h4>${articulo.titulo}</h4>
    <h6>${articulo.subtitulo}</h6>
    <p>${articulo.descripcion}</p>
    <a href="/articulo/${articulo.id}">
    <button>Ver más...</button>
    </a>
</article>`;
articuloSeccion.innerHTML = contenidoArticulo;

/* Agregar los elementos de una lista HTML a partir de un arreglo de objetos  */

const productos = [
  {
    id: 1,
    nombre: "Item 1",
    precio: "12000",
  },
  {
    id: 2,
    nombre: "Item 2",
    precio: "14000",
  },
];

const ele = document.querySelector("#productos");
let printProductosHtml = "";
for (let producto of productos) {
  printProductosHtml += `<div id="${producto.id} class="producto">
     <h2> ${producto.nombre} </h2>
     <p> ${producto.precio} </p>
   </div>  `;
}
ele.innerHTML = printProductosHtml;

// Ejercicios!!

// Ejercicio 1 => Acceder a datos dentro de un arreglo
const names = ["Juan", "Luisa", "Fabian", "Jorge"];
console.log(`Datos solicitado: ${names[0]}; ${names[2]}; ${names[3]}`);

// Ejercicio 2 => Imprimir en consola todos los elementos del arreglo
// con uso de FOR
const languages = ["JavaScript", "Php", "Ruby", "Python", "Scala", "Go"];
let i = 1;
for (let language of languages) {
  console.log(`${i++}: ${language} `);
}

// Ejercicio 3 => Imprimir el arreglo en la pagina con uso de FOR
const escalaMayorDeDo = ["Do", "Re", "Mi", "Fa", "Sol", "La", "Si"];
const notes = document.getElementById("music-notes");
let printHtml = "";
for (let music of escalaMayorDeDo) {
  printHtml += `<li>${music}</li>`;
}
notes.innerHTML = printHtml;

// Ejercicio 4 => Imprimir el hobbit de la persona, extrayendo el valor del obj
const persona = {
  nombre: "Pedro",
  apellido: "Perez",
  profesion: "Frontend Developer",
  hobby: "Trekking",
};

console.log(
  `El Hobbit de ${persona.nombre} ${persona.apellido} es: ${persona.hobby}`
);

// Ejercicio 5 => Imprimir el producto, extrayendo los datos del obj
const producto = {
  id: 43,
  titulo: "Cafetera magnética",
  precio: 23990,
  color: "rojo",
  src: "./assets/img/cafetera.jpg",
  descripción: `Calienta tu café matutino
    con la nueva tecnología magnética`,
};

const productSection = document.getElementById("products");
let descriptionProduct = "";
descriptionProduct = `
<article class="product">
    <img src=${producto.src} alt= "${producto.titulo}" />
    <h3>${producto.titulo}</h3>
    <h4>Color: ${producto.color}</h4>
    <p>${producto.descripción}</p>
    <h2>Precio ${producto.precio}</h2>
</article>`;

productSection.innerHTML = descriptionProduct;

// Ejercicio 6 => Imprimir en pantalla iconos y nombres

const Emote = [
  { icono: "🚗", descripcion: "Auto" },
  { icono: "🤖", descripcion: "Robot" },
  { icono: "👻", descripcion: "Fantasma" },
  { icono: "👽", descripcion: "Alien" },
  { icono: "🦷", descripcion: "Diente" },
  { icono: "🕹", descripcion: "Joystick" },
];
const iconSpace = document.querySelector(".icons");
let iconTextHtml = "";
for (let icon of Emote) {
  iconTextHtml += `
    <div class="icono">
        <h1>${icon.icono}</h1>
        <h3>${icon.descripcion}</h3>
    </div>
    `;
}
iconSpace.innerHTML = iconTextHtml;
