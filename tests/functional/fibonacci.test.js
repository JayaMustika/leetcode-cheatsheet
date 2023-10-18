import {
  fibbonaciUsingLoop,
  fibbonaciUsingRecursive,
} from "/Users/admin/Documents/Projects/leetcode-cheatsheet/pages/functional/fibonacci.js";

test("when fibonacciUsingLoop() use 5, return 5", () => {
  const value = fibbonaciUsingLoop(5);
  const result = 5;

  expect(value).toBe(result);
});
test("when fibonacciUsingLoop() use 0, return 0", () => {
  const value = fibbonaciUsingLoop(0);
  const result = 0;

  expect(value).toBe(result);
});
test("when fibonacciUsingLoop() use 2, return 1", () => {
  const value = fibbonaciUsingLoop(2);
  const result = 1;

  expect(value).toBe(result);
});

test("when fibonacciUsingRecursive() use 5, return 5", () => {
  const value = fibbonaciUsingRecursive(5);
  const result = 5;

  expect(value).toBe(result);
});
test("when fibonacciUsingRecursive() use <1, return 0", () => {
  expect(fibbonaciUsingRecursive(-1)).toBe(0);
  expect(fibbonaciUsingRecursive(0)).toBe(0);
  expect(fibbonaciUsingRecursive(-5)).toBe(0);
});
