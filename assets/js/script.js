let propiedades_alquiler = []
let propiedades_venta = []

const url = window.location.href.split("/").pop();

const cardsSaleContainer = document.getElementById("cardsSaleContainer")
const cardsRentContainer = document.getElementById("cardsRentContainer")

fetch('assets/json/data.json')
.then((response) => response.json())
.then(data => {
  propiedades_alquiler = data.propiedades_alquiler
  propiedades_venta = data.propiedades_venta
  if (url == "index.html" || url == "") {
    show3HousesInRent(propiedades_alquiler)
    show3HousesInSale(propiedades_venta)
  } else if (url == "inRent.html") {
    showAllHousesInRent(propiedades_alquiler)
  } else if (url == "inSale.html") {
    showAllHousesInSale(propiedades_venta)
  }
})
.catch((error) => console.error('Error fetching data:', error));

function show3HousesInSale(houses) {
  let housesInSaleHTML = "";
  for (i = 0 ; i <= 2 ; i++) {
    let house = houses[i]
    housesInSaleHTML += `
    <div class="card">
      <div class="card-header">
        <img src="${house.src}" alt="${house.nombre}">
      </div>
      <div class="card-body">
        <h4 class="name">${house.nombre}</h4>
        <p class="description">${house.descripcion}</p>
        <p class="location"><i class="fas fa-map-marker-alt"></i> ${house.ubicacion}</p>
        <p class="bedrooms"><i class="fas fa-bed"></i> ${house.habitaciones} habitaciones</p>
        <p class="price"><i class="fas fa-dollar-sign"></i> ${house.costo}</p>
        ${house.smoke ? '<p class="smoke"><i class="fa-solid fa-smoking"></i> Permitido fumar' : '<p class="smoke not"><i class="fas fa-smoking-ban"></i> No se permite fumar'}</p>
        ${house.pets ? '<p class="pets"><i class="fas fa-paw"></i> Se permiten mascotas' : '<p class="pets not"><i class="fas fa-ban""></i> No se permiten mascotas'}</p>
      </div>
    </div>`;
  };

  cardsSaleContainer.innerHTML = housesInSaleHTML
}

function showAllHousesInSale(houses) {
  let housesInSaleHTML = "";
  houses.forEach(house => {
    housesInSaleHTML += `
    <div class="card">
      <div class="card-header">
        <img src="${house.src}" alt="${house.nombre}">
      </div>
      <div class="card-body">
        <h4 class="name">${house.nombre}</h4>
        <p class="description">${house.descripcion}</p>
        <p class="location"><i class="fas fa-map-marker-alt"></i> ${house.ubicacion}</p>
        <p class="bedrooms"><i class="fas fa-bed"></i> ${house.habitaciones} habitaciones</p>
        <p class="price"><i class="fas fa-dollar-sign"></i> ${house.costo}</p>
        ${house.smoke ? '<p class="smoke"><i class="fa-solid fa-smoking"></i> Permitido fumar' : '<p class="smoke not"><i class="fas fa-smoking-ban"></i> No se permite fumar'}</p>
        ${house.pets ? '<p class="pets"><i class="fas fa-paw"></i> Se permiten mascotas' : '<p class="pets not"><i class="fas fa-ban""></i> No se permiten mascotas'}</p>
      </div>
    </div>`;
  });

  cardsSaleContainer.innerHTML = housesInSaleHTML
}

function show3HousesInRent(houses) {
  let housesInRentHTML = "";
  for (i = 0 ; i <= 2 ; i++) {
    let house = houses[i]
    housesInRentHTML += `
    <div class="card">
      <div class="card-header">
        <img src="${house.src}" alt="${house.nombre}">
      </div>
      <div class="card-body">
        <h4 class="name">${house.nombre}</h4>
        <p class="description">${house.descripcion}</p>
        <p class="location"><i class="fas fa-map-marker-alt"></i> ${house.ubicacion}</p>
        <p class="bedrooms"><i class="fas fa-bed"></i> ${house.habitaciones} habitaciones</p>
        <p class="price"><i class="fas fa-dollar-sign"></i> ${house.costo}</p>
        ${house.smoke ? '<p class="smoke"><i class="fa-solid fa-smoking"></i> Permitido fumar' : '<p class="smoke not"><i class="fas fa-smoking-ban"></i> No se permite fumar'}</p>
        ${house.pets ? '<p class="pets"><i class="fas fa-paw"></i> Se permiten mascotas' : '<p class="pets not"><i class="fas fa-ban""></i> No se permiten mascotas'}</p>
      </div>
    </div>`;
  };

  cardsRentContainer.innerHTML = housesInRentHTML
}

function showAllHousesInRent(houses) {
  let housesInRentHTML = "";
  houses.forEach(house => {
    housesInRentHTML += `
    <div class="card">
      <div class="card-header">
        <img src="${house.src}" alt="${house.nombre}">
      </div>
      <div class="card-body">
        <h4 class="name">${house.nombre}</h4>
        <p class="description">${house.descripcion}</p>
        <p class="location"><i class="fas fa-map-marker-alt"></i> ${house.ubicacion}</p>
        <p class="bedrooms"><i class="fas fa-bed"></i> ${house.habitaciones} habitaciones</p>
        <p class="price"><i class="fas fa-dollar-sign"></i> ${house.costo}</p>
        ${house.smoke ? '<p class="smoke"><i class="fa-solid fa-smoking"></i> Permitido fumar' : '<p class="smoke not"><i class="fas fa-smoking-ban"></i> No se permite fumar'}</p>
        ${house.pets ? '<p class="pets"><i class="fas fa-paw"></i> Se permiten mascotas' : '<p class="pets not"><i class="fas fa-ban""></i> No se permiten mascotas'}</p>
      </div>
    </div>`;
  });

  cardsRentContainer.innerHTML = housesInRentHTML
}