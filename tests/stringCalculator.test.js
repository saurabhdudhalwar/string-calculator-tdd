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

// unknown amount test case
test("should return the sum of multiple numbers", () => {
  expect(add("1,2,3,4")).toBe(10);
});

// new line between numbers test case
test("should handle newlines between numbers", () => {
  expect(add("1\n2,3")).toBe(6);
});

// custom delimiter supports test case
test("should support custom delimiters", () => {
  expect(add("//;\n1;2")).toBe(3);
});

// negative number test case
test("should throw an error if a negative number is passed", () => {
  expect(() => add("1,-2,3")).toThrow("Negative numbers not allowed: -2");
});
