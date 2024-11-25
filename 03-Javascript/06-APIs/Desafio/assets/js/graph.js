import { chartDOM } from "./index.js";

export const getMonedas = async (endpoint = "") => {
  const res = await fetch(endpoint);
  const monedas = await res.json();
  return configGraph(monedas);
};

export const configGraph = (monedas) => {
  const tipoDeGrafica = "line";
  const titulo = monedas.nombre;
  const colorDeLinea = "red";

  const filterData = monedas.serie;

  const label = filterData
    .filter((item, index) => index < 10)
    .map((item) => item.fecha);

  const data = filterData
    .filter((item, index) => index < 10)
    .map((item) => item.valor);

  const config = {
    type: tipoDeGrafica,
    data: {
      labels: label,
      datasets: [
        {
          label: titulo,
          backgroundColor: colorDeLinea,
          data,
        },
      ],
    },
  };
  return renderGrafica(config);
};

export let myGraph = null;

const renderGrafica = async (config) => {
  if (myGraph != null) {
    myGraph.destroy();
  }

  chartDOM.style.backgroundColor = `#d7d7d7`;
  chartDOM.style.borderRadius = `10px`;

  myGraph = new Chart(chartDOM, config);
};
