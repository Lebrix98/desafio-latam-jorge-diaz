import { renderCurrency } from "./currency.js";

export const select = document.querySelector("#select");
export const result = document.querySelector("#result");
export const search = document.querySelector("#btnSearch");
export const num = document.querySelector("#numClp");
export const chartDOM = document.getElementById("myChart");

result.innerHTML = "...";


search.addEventListener("click", () => {
  let value = select.value;
  return renderCurrency(value);
});
