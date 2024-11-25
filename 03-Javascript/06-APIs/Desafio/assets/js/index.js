import { renderCurrency } from "./currency.js";

export const select = document.querySelector("#select");
export const result = document.querySelector("#result");
export const search = document.querySelector("#btnSearch");
export const num = document.querySelector("#numClp");
export const chartDOM = document.getElementById("myChart");

const opt = [
  { value: "", text: "Selecione Moneda" },
  { value: "uf", text: "UF" },
  { value: "ivp", text: "IVP" },
  { value: "dolar", text: "Dolar" },
  { value: "dolar_intercambio", text: "Dolar Intercambio" },
  { value: "euro", text: "Euro" },
  { value: "ipc", text: "IPC" },
  { value: "utm", text: "UTM" },
  { value: "imacec", text: "Imacec" },
  { value: "tpm", text: "TMP" },
  { value: "libra_cobre", text: "Libra Cobre" },
  { value: "tasa_desempleo", text: "Tasa Desempleo" },
  { value: "bitcoin", text: "Bitcoin" },
];

const renderOpt = () => {
  let printOpt = "";

  for (const i of opt) {
    printOpt += `<option value=${i.value}>${i.text}</option>`;
  }

  select.innerHTML = printOpt;
};

renderOpt();

result.innerHTML = "...";
chartDOM.style.backgroundColor = "none";

search.addEventListener("click", () => {
  let value = select.value;
  return renderCurrency(value);
});
