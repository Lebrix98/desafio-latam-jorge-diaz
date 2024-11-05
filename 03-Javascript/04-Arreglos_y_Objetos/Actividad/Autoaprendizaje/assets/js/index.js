// Actividad 1 : Accediendo a los nombres

let names = [
  "Juan",
  "Luisa",
  "Fabian",
  "Jorge",
  "Elon",
  "Steve",
  "Bill",
  "Estefany",
];

console.log(names[0]);
console.log(names[5]);
console.log(names[names.length - 1]);

// Actividad 2 : Creando elementos a partir de un arreglo
const data = ["Javiera", "Camila", "Francisco", "Jorge", "Daniela"];
const d = document.querySelector("#nameItems");
let nameTexts = "";

for (let item of data) {
  nameTexts += `<li> ${item} </li>`;
}
d.innerHTML = nameTexts;

// Actividad 2.1: Crea una nueva página web llamada precios.html.
const priceProduct = [1000, 2500, 3100, 4800, 7500];
const numberProd = document.querySelector("#price");
let priceText = "";

for (let prod of priceProduct) {
  priceText += `<p> ${prod} </p>`;
}
numberProd.innerHTML = priceText;

// Actividad 3: Evitando modificar el DOM innecesariamente

// Actividad 4: Ciclos y condiciones

const values = [1200, 350, 1500, 1400, 250, 5000, 1950, 1952];
const valNumber = document.querySelector("#datos");
let valText = "";
for (let val of values) {
  valText += `<li ${
    val > 1000 && val < 2000 ? 'style= "color: green"' : 'style= "color: red"'
  }>${val}</li>`;
}

valNumber.innerHTML = valText;

// Actividad 5: Crea los objetos

const guitar = {
  cuerda: 6,
  color: "Azul",
  año: 1994,
};

const laptop = {
  marca: "ASUS",
  so: "Windows",
  ram: "16GB",
  tipo: "Gamer",
};

const house = {
  cuarto: 4,
  baño: 2,
  patio: 1,
  garage: 1,
  direccion: "San Diego 8081",
};

// Actividad 6: Accediendo a los datos de un objeto

const persona = {
  nombre: "Pedro",
  apellido: "Perez",
  profesion: "Frontend Developer",
  hobby: "Trekking",
  añoDeNacimiento: 1988,
};

console.log(
  `Año de Nacimiento:: ${persona.añoDeNacimiento} ; Apellido:: ${persona.apellido}`
);

// Actividad 7 : Tarjeta de producto con los datos de un objeto

const producto = {
  id: 43,
  titulo: "Cafetera magnética",
  precio: 23990,
  color: "rojo",
  src: "./assets/img/cafetera.jpg",
  descripcion: `Calienta tu café matutino
  con la nueva tecnología magnética`,
};

const productSection = document.querySelector(".product");
let productText = "";

productText = `
 <article class="articulo">
 <img src=${producto.src} alt="${producto.titulo}" />
 <h4>${producto.titulo}</h4>
 <h6>${producto.color}</h6>
 <p>${producto.descripcion}</p>
 <h4>${producto.precio}</h4>
 </article>
 `;

productSection.innerHTML = productText;

//

const icons = [
  { icono: "🚗", descripcion: "Auto" },
  { icono: "🤖", descripcion: "Robot" },
  { icono: "👻", descripcion: "Fantasma" },
  { icono: "👽", descripcion: "Alien" },
  { icono: "🦷", descripcion: "Diente" },
  { icono: "🕹", descripcion: "Joystick" },
];

const iconSpace = document.querySelector(".icons");
let iconTextHtml = "";
for (let icon of icons) {
  iconTextHtml += `
    <div class="icono">
        <h1>${icon.icono}</h1>
        <h3>${icon.descripcion}</h3>
    </div>
    `;
}
iconSpace.innerHTML = iconTextHtml;

/* 
  Preguntas para preparar una entrevista laboral

  ¿Cuál es el problema de modificar .innerHTML dentro de un ciclo?

  R: Se sobreescriben constantemente los valores

  ¿Si a =[1,2,3] qué se muestra con a[3]?

  R: Undefined

  ¿Cómo se obtiene el último elemento de un arreglo?

  R: console.log( array[array.length - 1] )

*/