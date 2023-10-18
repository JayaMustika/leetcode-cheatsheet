#!/usr/bin/env node

import { Palindrome } from "../../pages/oop/palindrome.js";

const [node_path, bin_path, n, method] = process.argv;

if (method == "loop") {
  console.log("Result :", Palindrome.palindromeUsingLoop(n));
} else if (method == "recursive") {
  console.log("Result :", Palindrome.palindromeUsingRecursive(n));
} else if (method == "reverse") {
  console.log("Result :", Palindrome.palindromeUsingReverse(n));
}