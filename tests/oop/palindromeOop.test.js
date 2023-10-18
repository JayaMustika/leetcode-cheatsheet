import { Palindrome } from "/Users/admin/Documents/Projects/leetcode-cheatsheet/pages/oop/palindrome.js";

test("when palindromeUsingLoop() use 'racecar' and OOP, return true", () => {
  const value = Palindrome.palindromeUsingLoop("racecar");
  const result = true;

  expect(value).toBe(result);
});
test("when palindromeUsingLoop() use 'racecat' and OOP, return false", () => {
  const value = Palindrome.palindromeUsingLoop("racecat");
  const result = false;

  expect(value).toBe(result);
});

test("when palindromeUsingRecursive() use 'racecar' and OOP, return true", () => {
  const value = Palindrome.palindromeUsingRecursive("racecar");
  const result = true;

  expect(value).toBe(result);
});
test("when palindromeUsingRecursive() use 'racecat' and OOP, return false", () => {
  const value = Palindrome.palindromeUsingRecursive("racecat");
  const result = false;

  expect(value).toBe(result);
});

test("when palindromeUsingReverse() use 'racecar' and OOP, return true", () => {
  const value = Palindrome.palindromeUsingReverse("racecar");
  const result = true;

  expect(value).toBe(result);
});
