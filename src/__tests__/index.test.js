const add = require("../index");

test("1+2=3", () => {
  expect(add(1, 2)).toBe(3);
});

test("0+-2=-2", () => {
  expect(add(0, -2)).toBe(-2);
});
