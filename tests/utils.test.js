const {
  multiplicar,
  esPositivo,
  obtenerProducto,
  obtenerCategorias,
  validarStock
} = require("../src/utils");

describe("Pruebas Unitarias - Tienda", () => {

  test("1. toBe", () => {
    expect(multiplicar(3, 4)).toBe(12);
  });

  test("2. toEqual", () => {
    expect(obtenerProducto()).toEqual({
      id: 42,
      nombre: "Laptop",
      disponible: true
    });
  });

  test("3. toHaveProperty", () => {
    expect(obtenerProducto()).toHaveProperty("nombre");
  });

  test("4. toContain", () => {
    expect(obtenerCategorias()).toContain("ropa");
  });

  test("5. toHaveLength", () => {
    expect(obtenerCategorias()).toHaveLength(4);
  });

  test("6. toBeTruthy", () => {
    expect(obtenerProducto().disponible).toBeTruthy();
  });

  test("7. toBeFalsy", () => {
    expect(esPositivo(-5)).toBeFalsy();
  });

  test("8. objectContaining", () => {
    expect(obtenerProducto()).toEqual(
      expect.objectContaining({
        nombre: "Laptop"
      })
    );
  });

  test("9. arrayContaining", () => {
    expect(obtenerCategorias()).toEqual(
      expect.arrayContaining(["electrónica", "hogar"])
    );
  });

  test("10. toThrow", () => {
    expect(() => validarStock()).toThrow("Sin stock disponible");
  });

});
