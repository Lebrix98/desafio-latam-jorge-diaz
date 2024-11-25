import { getMonedas, myGraph } from "./graph.js";
import { chartDOM, num, result } from "./index.js";

const getCurrency = async (value = "") => {
  try {
    const res = await fetch(`https://mindicador.cl/api/${value}`);
    const data = await res.json();
    return { data, res };
  } catch (error) {
    console.warn("Error::", error);
    result.innerHTML = `!Lo sentimos¡`;
  }
};

export const renderCurrency = async (val) => {
  try {
    const { data, res } = await getCurrency(val);
    const numValue = num.value;

    if (numValue !== "") {
      const arr = data.serie[1].valor;

      const newResult = numValue / arr;

      let printHtml = `Resultado: ${newResult.toLocaleString()}`;

      getMonedas(res.url);

      result.innerHTML = printHtml;
    } else {
      myGraph.destroy();
      chartDOM.style.backgroundColor = "";
      result.innerHTML = `Debe ingresar un valor para convertir.`;
    }
  } catch (error) {
    myGraph.destroy();
    chartDOM.style.backgroundColor = "";
    result.innerHTML = `Debe seleccionar una Moneda a Convertir.`;
  }
};
