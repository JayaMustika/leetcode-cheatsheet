#!/usr/bin/env node

import { Fibonacci } from "../../pages/oop/fibonacci.js";

const [node_path, bin_path, n, method] = process.argv;

if (method == "loop") {
  console.log("Result :", Fibonacci.fibbonaciUsingLoop(n));
} else if (method == "recursive") {
  console.log("Result :", Fibonacci.fibonacciUsingRecursive(n));
}