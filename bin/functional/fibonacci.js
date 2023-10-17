#!/usr/bin/env node

import { fibbonaciUsingLoop, fibbonaciUsingRecursive } from "/Users/admin/Documents/Projects/leetcode-cheatsheet/pages/functional/fibonacci.js";

const [ node_path, bin_path, n, method ] = process.argv;

if (method == "loop") {
    console.log ("Result :", fibbonaciUsingLoop (n))
} else if (method == "recursive") {
    console.log ("Result :", fibbonaciUsingRecursive (n))
};