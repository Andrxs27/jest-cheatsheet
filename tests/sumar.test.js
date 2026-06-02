const multiplicar = require("../src/sumar");

test("debe multiplicar dos números", () => {
  expect(multiplicar(3, 4)).toBe(12);
});
