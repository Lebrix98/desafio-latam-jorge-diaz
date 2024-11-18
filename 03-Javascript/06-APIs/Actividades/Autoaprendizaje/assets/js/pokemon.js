async function getPokemon() {
  const endpoint = "https://pokeapi.co/api/v2/pokemon/pikachu";
  const res = await fetch(endpoint);
  const pokemon = await res.json();
  return pokemon;
}

function prepararConfiguracionParaLaGrafica(pokemon) {
  // Creamos las variables necesarias para el objeto de configuración
  const newPkm = pokemon.stats;
  const tipoDeGrafica = "line";
  const pikachuStats = newPkm.map((pkm) => pkm.stat.name);
  const titulo = "Pikachu";
  const colorDeLinea = "yellow";
  console.log(newPkm);
  const value = newPkm.map((pkm) => {
    const stats = pkm.base_stat;
    return Number(stats);
  });
  // Creamos el objeto de configuración usando las variables anteriores
  const config = {
    type: tipoDeGrafica,
    data: {
      labels: pikachuStats,
      datasets: [
        {
          label: titulo,
          backgroundColor: colorDeLinea,
          data: value,
        },
      ],
    },
  };
  return config;
}

async function renderGrafica() {
  const pokemon = await getPokemon();
  const config = prepararConfiguracionParaLaGrafica(pokemon);
  const chartDOM = document.getElementById("myChart");
  new Chart(chartDOM, config);
}

renderGrafica();
