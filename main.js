import { processArgv } from "./processArgv.js"

/**
 * Syntax: "node <file path> <command><value>" 
 * Ex : "node main.js factorialrecursive=5"
 * List of Command:
    --fizzbuzz=<value>
    --fibonacciloop=<value>
    --fibonaccirecursive=<value>
    --factorialloop=<value>
    --factorialrecursive=<value>
    --palindromeloop=<value>
    --palindromerecursive=<value>
    --palindromereverse=<value>
 */

console.log (processArgv ());

