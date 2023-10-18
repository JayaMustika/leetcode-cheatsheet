import { Fibonacci } from "/Users/admin/Documents/Projects/leetcode-cheatsheet/pages/oop/fibonacci.js";

test("when fibonacciUsingLoop() use 5 and OOP, return 5", () => {
  const value = Fibonacci.fibbonaciUsingLoop(5);
  const result = 5;

  expect(value).toBe(result);
});
test("when fibonacciUsingLoop() use 0 and OOP, return 0", () => {
  const value = Fibonacci.fibbonaciUsingLoop(0);
  const result = 0;

  expect(value).toBe(result);
});
test("when fibonacciUsingLoop() use 2 and OOP, return 1", () => {
  const value = Fibonacci.fibbonaciUsingLoop(2);
  const result = 1;

  expect(value).toBe(result);
});

test("when fibonacciUsingRecursive() use 5 and OOP, return 5", () => {
  const value = Fibonacci.fibonacciUsingRecursive(5);
  const result = 5;

  expect(value).toBe(result);
});
test("when fibonacciUsingRecursive() use 0 and OOP, return 0", () => {
  const value = Fibonacci.fibonacciUsingRecursive(0);
  const result = 0;

  expect(value).toBe(result);
});
