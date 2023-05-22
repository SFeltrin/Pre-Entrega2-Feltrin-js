const platos = [
  { id: 1, nombre: "Hamburguesa", precio: 1000 },
  { id: 2, nombre: "Pizza", precio: 1500 },
  { id: 3, nombre: "Sushi", precio: 2000 },
  { id: 4, nombre: "Ensalada", precio: 980 },
  { id: 5, nombre: "Pasta", precio: 1200 }
];

// Función para crear un nuevo plato
function crearPlato() {
  let nombre = prompt("Ingrese el nombre del nuevo plato:");
  let precio = parseFloat(prompt("Ingrese el precio del nuevo plato:"));

  let nuevoPlato = {
    id: platos.length + 1,
    nombre: nombre,
    precio: precio
  }

  platos.push(nuevoPlato);
}

// Llamar a la función para crear un nuevo plato
crearPlato();

// Recorrer y mostrar los platos
for (let i = 0; i < platos.length; i++) {
  console.log("id: " + platos[i].id);
  console.log("nombre: " + platos[i].nombre);
  console.log("precio: " + platos[i].precio);
}

// Filtrar los platos por precio
function filtrarPorPrecio() {
  let filtroPrecio = parseFloat(prompt("Ingrese el precio del producto para filtrar:"));

  let platosFiltrados = platos.filter((plato) => {
    return plato.precio <= filtroPrecio;
  });

  console.log(platosFiltrados);
}

// Llamar a la función para realizar el filtro
filtrarPorPrecio();
