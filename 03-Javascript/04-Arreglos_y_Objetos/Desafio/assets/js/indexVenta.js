const propiedades_venta = [
  {
    id: 1,
    nombre: "Departamento en Venta",
    src: "./assets/img/venta_1.webp",
    descripcion: "Vivir en Providencia significa tener todo a mano",
    ubicacion: "Suecia 440, Los Leones, Providencia, RM (Metropolitana)",
    habitaciones: 2,
    baños: 2,
    costo: 283235236,
    smoke: false,
    pets: true,
  },
  {
    id: 2,
    nombre: "Departamento en Venta",
    src: "./assets/img/venta_2.webp",
    descripcion:
      "Edificio Del Río es ideal para aquellos amantes de la ciudad.",
    ubicacion:
      "Dr. Roberto Del Río Esquina Eliodoro Yáñez, Las Lilas, Providencia, RM (Metropolitana)",
    habitaciones: 3,
    baños: 2,
    costo: 240646029,
    smoke: true,
    pets: false,
  },
  {
    id: 3,
    nombre: "Departamento en Venta",
    src: "./assets/img/venta_3.webp",
    descripcion: "Con la magia de Barrio Italia emerge Bilbao 514",
    ubicacion:
      "Av Francisco Bilbao 514, Providencia, Chile, Barrio Italia, Providencia, RM (Metropolitana)",
    habitaciones: 2,
    baños: 3,
    costo: 190876742,
    smoke: true,
    pets: true,
  },
  {
    id: 4,
    nombre: "Departamento en Venta",
    src: "./assets/img/venta_4.webp",
    descripcion:
      "Lyon Bilbao, para vivir más cómodos. ¡Aquí, la conexión y el estilo de vida que buscas se encuentran en un solo lugar!",
    ubicacion:
      "Avenida Ricardo Lyon 1887, Inés de Suárez, Providencia, RM (Metropolitana)",
    habitaciones: 3,
    baños: 2,
    costo: 267930330,
    smoke: false,
    pets: false,
  },
  {
    id: 5,
    nombre: "Departamento en Venta",
    src: "./assets/img/venta_5.webp",
    descripcion:
      "En un sector consolidado y residencial de Providencia se encuentra ubicado el Edificio Bosque Sur.",
    ubicacion:
      "Francisco Bilbao 2770, Metro Bilbao, Providencia, RM (Metropolitana)",
    habitaciones: 3,
    baños: 3,
    costo: 295726466,
    smoke: true,
    pets: true,
  },
  {
    id: 6,
    nombre: "Departamento en Venta",
    src: "./assets/img/venta_6.webp",
    descripcion:
      "En un sector consolidado y tradicional de la comuna de Providencia se encuentra ubicado el Edificio Lyon Las Violetas.",
    ubicacion:
      "Las Violetas 2171, Los Leones, Providencia, RM (Metropolitana)",
    habitaciones: 2,
    baños: 1,
    costo: 221681108,
    smoke: false,
    pets: false,
  },
];


const cardSells = document.querySelector(".cartasVenta");
let cardTextsSells = "";

for (let propSell of propiedades_venta) {
  propSell.id <= 3
    ? (cardTextsSells += `
    <div class="col-md-4 mb-4">
        <div class="card">
            <img
                src="${propSell.src}"
                class="card-img-top"
                alt="Imagen del departamento"
            />
            <div class="card-body">
                <h5 class="card-title">
                  ${propSell.nombre}
                </h5>
                <p class="card-text">
                  ${propSell.descripcion}
                </p>
                <p>
                  <i class="fas fa-map-marker-alt"></i> ${propSell.ubicacion}
                </p>
                <p>
                  <i class="fas fa-bed"></i> ${
                    propSell.habitaciones
                  } Habitaciones |
                  <i class="fas fa-bath"></i> ${propSell.baños} Baños
                </p>
                <p><i class="fas fa-dollar-sign"></i> ${propSell.costo.toLocaleString()}</p>
                ${
                  propSell.smoke
                    ? `<p class="text-danger">
                      <i class="fas fa-smoking-ban"></i> No se permite fumar
                    </p>`
                    : `<p class="text-success">
                      <i class="fas fa-smoking"></i> Permitido fumar
                    </p>`
                }
                ${
                  propSell.pets
                    ? `<p class="text-danger">
                      <i class="fa-solid fa-ban"></i> No se permiten mascotas
                    </p>`
                    : `<p class="text-success">
                      <i class="fas fa-paw"></i> Mascotas permitidas
                    </p>`
                }
              </div>
            </div>
          </div>
    `)
    : "";
}

cardSells.innerHTML = cardTextsSells;
