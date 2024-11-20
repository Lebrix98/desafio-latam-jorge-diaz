import { getMonedas } from "./graph.js";
import { num, result } from "./index.js";

const getCurrency = async (value = "") => {
  try {
    const res = await fetch(`https://mindicador.cl/api/${value}`);
    const data = await res.json();
    return {data, res};
  } catch (error) {
    console.log("Error::", error);
    result.innerHTML = `!Lo sentimos¡`;
  }
};

export const renderCurrency = async (val) => {
  const {data , res} = await getCurrency(val);
  const numValue = num.value;

  const arr = data.serie[1].valor;

  const newResult = numValue * arr;

  let printHtml = `Resultado: ${newResult.toLocaleString()}`;

  getMonedas(res.url)

  result.innerHTML = printHtml;
};