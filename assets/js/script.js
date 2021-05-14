// Llamar API
const API = "https://rickandmortyapi.com/api/character";

// Consumir API
const getData = (api) => {
  return fetch(api)
    .then((response) => response.json())
    .then((json) => {
      dibujarData(json.results), paginacion(json.info);
    })
    .catch((error) => {
      console.log("error: ", error);
    });
};

// Dibujar cards de personaje
const dibujarData = (data) => {
  let html = "";
  data.forEach((pj) => {
    html += `<div class="pj col-lg-4">
        <div class="card ${pj.species}" style="width: 18rem;">
        <img src="${pj.image}" class="card-img-top" alt="${pj.name}">
        <div class="card-body">
        <h5 class="card-title">${pj.name}</h5>
        <p class="card-text">${pj.species}</p>
        </div>
      </div>
      </div>`;
  });
  document.getElementById("datosPj").innerHTML = html;
};

// Paginación
const paginacion = (data) => {
  let html = `<li class="page-item ${
    data.prev ? "" : "disabled"
  }"><a class="page-link" onclick="getData('${data.prev}')">Prev</a></li> 
  <li class="page-item ${
    data.next ? "" : "disabled"
  }"><a class="page-link" onclick="getData('${data.next}')">Next</a> </li>`;
  document.getElementById("menu").innerHTML = html;
};

// Ejecutar getData
getData(API);
