const element = document.querySelector(".user");
const userProfile = (data) => {
  let printHtml = "";
  const user = data.results[0];

  printHtml = `
    <img class="imgUser" src="${user.picture.medium}" alt="Foto de ${user.name.first}" />
    <h2 class="nameUser">${user.name.first} ${user.name.last}</h2>
    <h4 class="locationUser">${user.location.street.name} ${user.location.street.number}, ${user.location.state}, ${user.location.city}, ${user.location.country}</h4>
    <h3 class="mailUser">${user.email}</h3>
    <h3 class="phoneUser">+ ${user.phone}</h3>
    `;

  element.innerHTML = printHtml;
};

const errorMessage = (error) => {
  let printHtml = "";
  console.warn(error);
  printHtml = `
  <h2 class="msgError">Se han encontrados problemas con el servidor</h2>
  <h5>${error}</h5>
  `;

  element.innerHTML = printHtml;
};

const getRandomUser = async () => {
  try {
    const res = await fetch("https://randomuser.me/api/");
    const data = await res.json();
    userProfile(data);
  } catch (error) {
    errorMessage(error);
  }
};

getRandomUser();

const getCloud = async () => {
  const res = await fetch("https://api.gael.cloud/general/public/clima");
  const data = await res.json();
  console.log("Cloud::", data);
};

getCloud();

const getMoney = async () => {
  const res = await fetch("https://api.gael.cloud/general/public/monedas");
  const data = await res.json();

  console.log("Money::", data);
};

getMoney();
