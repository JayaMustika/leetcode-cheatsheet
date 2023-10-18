#!/usr/bin/env node

import { fizzBuzzUsingLoop } from "../../pages/functional/fizzbuzz.js";

const [node_path, bin_path, n, method] = process.argv;

if (method == "loop") {
  console.log("Result :", fizzBuzzUsingLoop(n));
}
