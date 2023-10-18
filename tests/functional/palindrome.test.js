import {
  palindromeUsingLoop,
  palindromeUsingRecursive,
  palindromeUsingReverse,
} from "/Users/admin/Documents/Projects/leetcode-cheatsheet/pages/functional/palindrome.js";

test("when palindromeUsingLoop() use 'racecar', return 120", () => {
  const value = palindromeUsingLoop("racecar");
  const result = true;

  expect(value).toBe(result);
});
test("when palindromeUsingLoop() use 'racecat', return 120", () => {
  const value = palindromeUsingLoop("racecat");
  const result = false;

  expect(value).toBe(result);
});

test("when palindromeUsingRecursive() use 'racecar', return 120", () => {
  const value = palindromeUsingRecursive("racecar");
  const result = true;

  expect(value).toBe(result);
});
test("when palindromeUsingRecursive() use 'racecat', return 120", () => {
  const value = palindromeUsingRecursive("racecat");
  const result = false;

  expect(value).toBe(result);
});

test("when palindromeUsingReverse() use 'racecar', return 120", () => {
  const value = palindromeUsingReverse("racecar");
  const result = true;

  expect(value).toBe(result);
});
