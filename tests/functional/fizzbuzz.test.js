import { fizzBuzzUsingLoop } from "/Users/admin/Documents/Projects/leetcode-cheatsheet/pages/functional/fizzbuzz.js";

test("when fizzBuzzUsingLoop() use 5, return fizz", () => {
  const value = fizzBuzzUsingLoop(5);
  const result = "fizz";

  expect(value).toBe(result);
});
test("when fizzBuzzUsingLoop() use 7, return 'fizz buzz'", () => {
  const value = fizzBuzzUsingLoop(7);
  const result = "fizz buzz";

  expect(value).toBe(result);
});
test("when fizzBuzzUsingLoop() use 2, return buzz", () => {
  const value = fizzBuzzUsingLoop(2);
  const result = "buzz";

  expect(value).toBe(result);
});
test("when fizzBuzzUsingLoop() use undefined, return undefined", () => {
  const value = fizzBuzzUsingLoop(2);
  const result = "buzz";

  expect(value).toBe(result);
});
