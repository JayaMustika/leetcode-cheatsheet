import { Factorial } from "../../pages/oop/Factorial.js";

test("when factorialUsingRecursive() use 5 and OOP, return 120", () => {
  const value = Factorial.factorialUsingRecursive(5);
  const result = 120;

  expect(value).toBe(result);
});

test("when factorialUsingLoop() use 5 and OOP, return 120", () => {
  const value = Factorial.factorialUsingLoop(5);
  const result = 120;

  expect(value).toBe(result);
});
