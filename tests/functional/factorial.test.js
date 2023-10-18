import {
  factorialUsingLoop,
  factorialUsingrecursive,
} from "/Users/admin/Documents/Projects/leetcode-cheatsheet/pages/functional/factorial.js";

test("when factorialUsingLoop() use 5, return 120", () => {
  const value = factorialUsingLoop(5);
  const result = 120;

  expect(value).toBe(result);
});

test("when factorialUsingRecursive() use 5, return 120", () => {
  const value = factorialUsingrecursive(5);
  const result = 120;

  expect(value).toBe(result);
});
