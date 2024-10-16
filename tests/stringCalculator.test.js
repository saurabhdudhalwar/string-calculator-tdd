const add = require("../src/stringCalculator");

// empty string test case
test("should return 0 when input is an empty string", () => {
  expect(add("")).toBe(0);
});

// single input test case
test("should return the number when a single number is passed", () => {
  expect(add("1")).toBe(1);
});

// two input test case
test("should return the sum of two numbers", () => {
  expect(add("1,2")).toBe(3);
});
