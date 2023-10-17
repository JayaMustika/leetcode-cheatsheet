#!/usr/bin/env node

import { palindromeUsingLoop, palindromeUsingRecursive, palindromeUsingReverse } from "/Users/admin/Documents/Projects/leetcode-cheatsheet/pages/functional/palindrome.js";

const [ node_path, bin_path, n, method ] = process.argv;

if (method == "loop") {
    console.log ("Result :", palindromeUsingLoop (n))
} else if (method == "recursive") {
    console.log ("Result :", palindromeUsingRecursive (n))
} else if (method == "reverse") {
    console.log ("Result :", palindromeUsingReverse (n))
}