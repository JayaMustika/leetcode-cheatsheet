#!/usr/bin/env node

import { factorialUsingLoop, factorialUsingrecursive } from "/Users/admin/Documents/Projects/leetcode-cheatsheet/pages/functional/factorial.js";

const [ node_path, bin_path, n, method ] = process.argv;

if (method == "loop") {
    console.log ("Result :", factorialUsingLoop (n))
} else if (method == "recursive") {
    console.log ("Result :", factorialUsingrecursive (n))
};

