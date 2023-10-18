#!/usr/bin/env node

import { FizzBuzz } from "../../pages/oop/FizzBuzz.js";

const [node_path, bin_path, n, method] = process.argv;

if (method == "loop") {
  console.log("Result :", FizzBuzz.generateFizzBuzz(n));
};