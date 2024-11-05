const propiedades_venta = [
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

const cardSells = document.querySelector(".cartasVenta");
let cardTexts = "";

for (let propSell of propiedades_venta) {
  cardTexts += `
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
                <p><i class="fas fa-dollar-sign"></i> ${propSell.costo}</p>
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
    `;
}

cardSells.innerHTML = cardTexts;
