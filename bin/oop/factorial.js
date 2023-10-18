#!/usr/bin/env node

import { Factorial } from "../../pages/oop/Factorial.js";

const [node_path, bin_path, n, method] = process.argv;

if (method == "loop") {
  console.log("Result :", Factorial.factorialUsingLoop(n));
} else if (method == "recursive") {
  console.log("Result :", Factorial.factorialUsingRecursive(n));
}