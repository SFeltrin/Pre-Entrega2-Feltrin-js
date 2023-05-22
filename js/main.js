const platos = [
    { id: 1, nombre: "Hamburguesa", precio: 1000 },
    { id: 2, nombre: "Pizza", precio: 1500 },
    { id: 3, nombre: "Sushi", precio: 2000 },
    { id: 4, nombre: "Ensalada", precio: 980 },
    { id: 5, nombre: "Pasta", precio: 1200 }
  ];
  
// Función para crear un nuevo plato
function crearPlato() {
    // Solicitar al usuario los detalles del nuevo plato
    let nombre = prompt("Ingrese el nombre del nuevo plato:");
    let precio = parseFloat(prompt("ahora ingrese el precio:"));
  
    // Crear un objeto para el nuevo plato
    let nuevoPlato = {
      id: platos.length + 1,
      nombre: nombre,
      precio: (precio),
    }
  
    // Agregar nuevo plato al menu
    platos.push(nuevoPlato);

    console.log(platos)
  }
  
  // Llamar a la función para crear un nuevo plato
  crearPlato();



// Filtrar los platos por precio
function filtrarPorPrecio() {
    // Solicitar al usuario el precio del producto que quiere buscar
    let filtroPrecio = parseFloat(prompt("Ingrese el precio del producto para filtrar:"));
  
    // Fitro 
    let platosFiltrados = platos.filter((plato) => {
      if (plato.precio == filtroPrecio) {
        return true;
      } else {
        return false;
      }
    });
  
    console.log(platosFiltrados);
  }
  
  // Llamar a la función para realizar el filtro
  filtrarPorPrecio();
  
  