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
    ubicacion: "Las Violetas 2171, Los Leones, Providencia, RM (Metropolitana)",
    habitaciones: 2,
    baños: 1,
    costo: 221681108,
    smoke: false,
    pets: false,
  },
];

const propiedades_alquiler = [
  {
    id: 1,
    nombre: "Departamento en Alquiler",
    src: "./assets/img/alquiler_1.webp",
    descripcion:
      "Edificio Europa promete enamorarte con su diseño inspirado en el Providencia clásico.",
    ubicacion:
      "Calle Europa 1963, Pedro de Valdivia, Providencia, RM (Metropolitana)",
    habitaciones: 3,
    baños: 3,
    costo: 222393511,
    smoke: false,
    pets: true,
  },
  {
    id: 2,
    nombre: "Departamento en Alquiler",
    src: "./assets/img/alquiler_2.webp",
    descripcion: "Vive con buen diseño en Barrio Italia.",
    ubicacion: "Huáscar 1300, Barrio Italia, Providencia, RM (Metropolitana)",
    habitaciones: 3,
    baños: 3,
    costo: 250546980,
    smoke: true,
    pets: false,
  },
  {
    id: 3,
    nombre: "Departamento en Alquiler",
    src: "./assets/img/alquiler_3.webp",
    descripcion: "Ubicado en una calle tranquila.",
    ubicacion: "Linares 1415, Manuel Montt, Providencia, RM (Metropolitana)",
    habitaciones: 3,
    baños: 2,
    costo: 283424186,
    smoke: true,
    pets: true,
  },
  {
    id: 4,
    nombre: "Departamento en Alquiler",
    src: "./assets/img/alquiler_4.webp",
    descripcion:
      "Tranquila es un exclusivo edificio de 7 pisos y 48 departamentos, ubicado en Providencia.",
    ubicacion:
      "Tranquila 2380, Campus Oriente, Providencia, RM (Metropolitana)",
    habitaciones: 2,
    baños: 2,
    costo: 264831559,
    smoke: false,
    pets: false,
  },
  {
    id: 5,
    nombre: "Departamento en Alquiler",
    src: "./assets/img/alquiler_5.webp",
    descripcion:
      "En Pocuro 2145, estás en Providencia, es decir, lo tienes todo.",
    ubicacion: "Pocuro 2145, Inés de Suárez, Providencia, RM (Metropolitana)",
    habitaciones: 3,
    baños: 2,
    costo: 346492843,
    smoke: true,
    pets: true,
  },
  {
    id: 6,
    nombre: "Departamento en Alquiler",
    src: "./assets/img/alquiler_6.webp",
    descripcion:
      "Disfruta vivir en LTO 1401, en el exclusivo sector de Las Lilas, donde su identidad es altamente valorada por sus habitantes.",
    ubicacion:
      "Luis Thayer Ojeda 1401, Las Lilas, Providencia, RM (Metropolitana)",
    habitaciones: 3,
    baños: 1,
    costo: 264258137,
    smoke: false,
    pets: false,
  },
];

const cardSells = document.querySelector(".cartasVenta");

const cardRent = document.querySelector(".cartasAlquiler");

const renderCards = (classCard, data) => {
  let cardTexts = "";

  for (let item of data) {
    item.id <= 3
      ? (cardTexts += `
          <div class="col-md-4 mb-4">
              <div class="card">
                  <img
                      src="${item.src}"
                      class="card-img-top"
                      alt="Imagen del departamento"
                  />
                  <div class="card-body">
                      <h5 class="card-title">
                        ${item.nombre}
                      </h5>
                      <p class="card-text">
                        ${item.descripcion}
                      </p>
                      <p>
                        <i class="fas fa-map-marker-alt"></i> ${item.ubicacion}
                      </p>
                      <p>
                        <i class="fas fa-bed"></i> ${
                          item.habitaciones
                        } Habitaciones |
                        <i class="fas fa-bath"></i> ${item.baños} Baños
                      </p>
                      <p><i class="fas fa-dollar-sign"></i> ${item.costo.toLocaleString()}</p>
                      ${
                        item.smoke
                          ? `<p class="text-danger">
                            <i class="fas fa-smoking-ban"></i> No se permite fumar
                          </p>`
                          : `<p class="text-success">
                            <i class="fas fa-smoking"></i> Permitido fumar
                          </p>`
                      }
                      ${
                        item.pets
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

  classCard.innerHTML = cardTexts;
};

renderCards(cardSells, propiedades_venta);

renderCards(cardRent, propiedades_alquiler);
