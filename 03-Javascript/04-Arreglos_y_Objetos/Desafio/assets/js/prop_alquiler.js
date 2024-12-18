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

const cardRent = document.querySelector(".cartasAlquiler");
let cardTexts = "";

for (let propRent of propiedades_alquiler) {
  cardTexts += `
      <div class="col-md-4 mb-4">
          <div class="card">
              <img
                  src="${propRent.src}"
                  class="card-img-top"
                  alt="Imagen del departamento"
              />
              <div class="card-body">
                  <h5 class="card-title">
                    ${propRent.nombre}
                  </h5>
                  <p class="card-text">
                    ${propRent.descripcion}
                  </p>
                  <p>
                    <i class="fas fa-map-marker-alt"></i> ${propRent.ubicacion}
                  </p>
                  <p>
                    <i class="fas fa-bed"></i> ${
                      propRent.habitaciones
                    } Habitaciones |
                    <i class="fas fa-bath"></i> ${propRent.baños} Baños
                  </p>
                  <p><i class="fas fa-dollar-sign"></i> ${propRent.costo}</p>
                  ${
                    propRent.smoke
                      ? `<p class="text-danger">
                        <i class="fas fa-smoking-ban"></i> No se permite fumar
                      </p>`
                      : `<p class="text-success">
                        <i class="fas fa-smoking"></i> Permitido fumar
                      </p>`
                  }
                  ${
                    propRent.pets
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
      `;
}

cardRent.innerHTML = cardTexts;
