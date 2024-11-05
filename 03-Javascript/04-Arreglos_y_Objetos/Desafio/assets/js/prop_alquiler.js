const propiedades_alquiler = [
  {
    nombre: "Hola",
    src: "",
    descripcion: "",
    ubicacion: "",
    habitaciones: 0,
    baños: 0,
    costo: 0,
    smoke: false,
    pets: true,
  },
  {
    nombre: "Hola",
    src: "",
    descripcion: "",
    ubicacion: "",
    habitaciones: 0,
    baños: 0,
    costo: 0,
    smoke: false,
    pets: true,
  },
  {
    nombre: "Hola",
    src: "",
    descripcion: "",
    ubicacion: "",
    habitaciones: 0,
    baños: 0,
    costo: 0,
    smoke: false,
    pets: true,
  },
  {
    nombre: "Hola",
    src: "",
    descripcion: "",
    ubicacion: "",
    habitaciones: 0,
    baños: 0,
    costo: 0,
    smoke: false,
    pets: true,
  },
  {
    nombre: "Hola",
    src: "",
    descripcion: "",
    ubicacion: "",
    habitaciones: 0,
    baños: 0,
    costo: 0,
    smoke: false,
    pets: true,
  },
  {
    nombre: "Hola",
    src: "",
    descripcion: "",
    ubicacion: "",
    habitaciones: 0,
    baños: 0,
    costo: 0,
    smoke: false,
    pets: true,
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
