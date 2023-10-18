import { FizzBuzz } from "../../pages/oop/FizzBuzz.js";

test("when fizzBuzzUsingLoop() use 5 and OOP, return fizz", () => {
  const value = FizzBuzz.generateFizzBuzz(5);
  const result = "fizz";

  expect(value).toBe(result);
});
test("when fizzBuzzUsingLoop() use 7 and OOP, return 'fizz buzz'", () => {
  const value = FizzBuzz.generateFizzBuzz(7);
  const result = "fizz buzz";

  expect(value).toBe(result);
});
test("when fizzBuzzUsingLoop() use 2 and OOP, return buzz", () => {
  const value = FizzBuzz.generateFizzBuzz(2);
  const result = "buzz";

  expect(value).toBe(result);
});
