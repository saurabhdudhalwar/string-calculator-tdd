const add = require('../src/stringCalculator');

test('should return 0 when input is an empty string', () => {
  expect(add("")).toBe(0);
});