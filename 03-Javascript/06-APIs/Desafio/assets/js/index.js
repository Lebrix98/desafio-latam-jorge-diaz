const num = document.querySelector("#numClp");
const select = document.querySelector("#select");
const result = document.querySelector("#result");

const getCurrency = async (value = "") => {
  const res = await fetch(`https://mindicador.cl/api/${value}`);
  const data = await res.json();
  return data;
};

const renderCurrency = async (val) => {
  const curren = await getCurrency(val);
  const numValue = num.value;
  const arr = curren.serie[1].valor;

  const newResult = numValue * arr;

  let printHtml = `Resultado: ${newResult.toLocaleString()}`;

  result.innerHTML = printHtml;
};

const searchCurrency = () => {
  let value = select.value;
  return renderCurrency(value);
};
