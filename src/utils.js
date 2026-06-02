function multiplicar(a, b) {
  return a * b;
}

function esPositivo(numero) {
  return numero > 0;
}

function obtenerProducto() {
  return {
    id: 42,
    nombre: "Laptop",
    disponible: true
  };
}

function obtenerCategorias() {
  return ["electrónica", "ropa", "hogar", "deportes"];
}

function validarStock() {
  throw new Error("Sin stock disponible");
}

module.exports = {
  multiplicar,
  esPositivo,
  obtenerProducto,
  obtenerCategorias,
  validarStock
};
