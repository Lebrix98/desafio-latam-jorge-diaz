const getCurrency = async () => {
  const res = await fetch(`https://mindicador.cl/api/`);
  const data = await res.json();
  return data;
};

export default getCurrency;
