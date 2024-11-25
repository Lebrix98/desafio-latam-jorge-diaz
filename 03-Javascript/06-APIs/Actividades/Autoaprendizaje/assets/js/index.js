/*
Actividad 1: Usando una API Rest

En la página de https://mindicador.cl/ hay documentada una API que sirve para tener
distintos indicadores económicos de Chile. Realiza requests a los distintos endpoints
utilizando Thunder Client y observa la respuesta.
*/

/*
Actividad 2: Consultando los datos de Pikachu

Realicemos el siguiente ejercicio en donde debas crear una función async/await para
consultar el siguiente endpoint:

● https://pokeapi.co/api/v2/pokemon/pikachu
● Luego,muestra la data resultante por consola.
*/

const content = document.querySelector(".climas");
const apiURL = "https://api.gael.cloud/general/public/clima";

const getCloud = async () => {
  const res = await fetch(apiURL);
  const climas = await res.json();

  return climas;
};

const renderCloud = async () => {
  const cloud = await getCloud();
  let printHtml = "";

  cloud.forEach((item) => {
    printHtml += `
        <div class="clima">
            <h3>${item.Estacion}</h3>
            <p>${item.Temp}°C</p>
        </div>
        `;
  });

  content.innerHTML = printHtml;
};

// renderCloud()

/*
Actividad 3: Usuarios de JSONPlaceholder

Realicemos el siguiente ejercicio en donde debas crear una galería de Cards con el nombre,
correo y número de teléfono de los 10 usuarios que nos entrega la API JSONPlaceholder en
el siguiente endpoint: https://jsonplaceholder.typicode.com/users

Realiza los siguientes pasos:
1. Crea unasección en el HTML y selecciona el elemento del DOM utilizando JavaScript
2. Crea unafunción para obtener los usuarios de JSONPlaceholder
3. Crea unafunción que renderice los usuarios en el DOM
4. Realiza ajustes estéticos que creas convenientes
*/

const cttUser = document.querySelector(".users");
const apiUser = "https://jsonplaceholder.typicode.com/users";

const getUsers = async () => {
  const res = await fetch(apiUser);
  const user = await res.json();

  return user;
};

const renderUsers = async () => {
  const user = await getUsers();
  let printHtml = "";

  user.forEach((item) => {
    printHtml += `
        <div class="user">
            <h3>${item.name}</h3>
            <p>${item.email}°C</p>
            <p>${item.phone}°C</p>
        </div>
        `;
  });

  cttUser.innerHTML = printHtml;
};

// renderUsers()

/*
Actividad 4: Otro ejemplo de captura de errores

Dado el siguiente fetch:

fetch("http://otroejemplo.cl");

Escribe una función async await que contenga un try catch en donde se ejecute 
la consulta y se capture el error.

El mensaje de error debe ser mostrado al usuario 
como contenido HTML de una etiqueta span.
*/

const contentTry = document.querySelector(".contentTryCatch");
const apiTry = "http://otroejemplo.cl";

const renderError = (error) => {
  let printHtml = "";

  printHtml = `<h1>!Algo salio mal¡ ${error}</h1>`;

  contentTry.innerHTML = printHtml
};

const getAnotherFetch = async () => {
  try {
    const res = await fetch(apiTry);
    const data = await res.json();

    console.log(data);
  } catch (error) {
    renderError(error);
  }
};

getAnotherFetch()