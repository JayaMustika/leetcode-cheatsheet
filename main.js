import { processArgv } from "./processArgv.js"

/**
 * Syntax: "node <file path> <command><value>" 
 * Ex : "node main.js factorialrecursive=5"
 * List of Command:
 * Functional:
    --fizzbuzz=<value>
    --fibonacciloop=<value>
    --fibonaccirecursive=<value>
    --factorialloop=<value>
    --factorialrecursive=<value>
    --palindromeloop=<value>
    --palindromerecursive=<value>
    --palindromereverse=<value>

    OOP:
    --oopfizzbuzz=<value>
    --oopfibonacciloop=<value>
    --oopfibonaccirecursive=<value>
    --oopfactorialloop=<value>
    --oopfactorialrecursive=<value>
    --ooppalindromeloop=<value>
    --ooppalindromerecursive=<value>
    --ooppalindromereverse=<value>
 */

console.log (processArgv ());

