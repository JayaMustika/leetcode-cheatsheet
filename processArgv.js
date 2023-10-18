import {
  factorialUsingLoop,
  factorialUsingrecursive,
} from "./pages/functional/factorial.js";
import {
  fibbonaciUsingLoop,
  fibbonaciUsingRecursive,
} from "./pages/functional/fibonacci.js";
import { fizzBuzzUsingLoop } from "./pages/functional/fizzbuzz.js";
import {
  palindromeUsingLoop,
  palindromeUsingRecursive,
  palindromeUsingReverse,
} from "./pages/functional/palindrome.js";

/**
 * Utilizing Argv
 * type in your terminal
 * "node <path> --<challengename>=<number>"
 * ex : "node index.js --fibonacci=5"
 */

function processArgv() {
  const args = process.argv.slice(2);

  const fizzbuzzArg = args.find(arg => arg.startsWith("--fizzbuzz="));

  const fibonacciLoopArg = args.find(arg => arg.startsWith("--fibonacciloop="));

  const fibonacciRecursiveArg = args.find(arg =>
    arg.startsWith("--fibonaccirecursive="),
  );

  const factorialLoopArg = args.find(arg => arg.startsWith("--factorialloop="));

  const factorialRecursiceArg = args.find(arg =>
    arg.startsWith("--factorialrecursive="),
  );

  const palindromeLoopArg = args.find(arg =>
    arg.startsWith("--palindromeloop="),
  );

  const palindromeRecursiveArg = args.find(arg =>
    arg.startsWith("--palindromerecursive="),
  );

  const palindromeReverseArg = args.find(arg =>
    arg.startsWith("--palindromereverse="),
  );

  const oopFizzbuzzArg = args.find(arg => arg.startsWith("--oopfizzbuzz="));

  const oopFibonacciLoopArg = args.find(arg =>
    arg.startsWith("--oopfibonacciloop="),
  );

  const oopFibonacciRecursiveArg = args.find(arg =>
    arg.startsWith("--oopfibonaccirecursive="),
  );

  const oopFactorialLoopArg = args.find(arg =>
    arg.startsWith("--oopfactorialloop="),
  );

  const oopFactorialRecursiceArg = args.find(arg =>
    arg.startsWith("--oopfactorialrecursive="),
  );

  const oopPalindromeLoopArg = args.find(arg =>
    arg.startsWith("--ooppalindromeloop="),
  );

  const oopPalindromeRecursiveArg = args.find(arg =>
    arg.startsWith("--ooppalindromerecursive="),
  );

  const oopPalindromeReverseArg = args.find(arg =>
    arg.startsWith("--ooppalindromereverse="),
  );

  let value;

  if (fizzbuzzArg) {
    value = parseInt(fizzbuzzArg.split("=")[1], 10);
    return fizzBuzzUsingLoop(value);
  } else if (fibonacciLoopArg) {
    value = parseInt(fibonacciLoopArg.split("=")[1], 10);
    return fibbonaciUsingLoop(value);
  } else if (fibonacciRecursiveArg) {
    value = parseInt(fibonacciRecursiveArg.split("=")[1], 10);
    return fibbonaciUsingRecursive(value);
  } else if (factorialLoopArg) {
    value = parseInt(factorialLoopArg.split("=")[1], 10);
    return factorialUsingLoop(value);
  } else if (factorialRecursiceArg) {
    value = parseInt(factorialRecursiceArg.split("=")[1], 10);
    return factorialUsingrecursive(value);
  } else if (palindromeLoopArg) {
    value = parseInt(palindromeLoopArg.split("=")[1], 10);
    return palindromeUsingLoop(value);
  } else if (palindromeRecursiveArg) {
    value = parseInt(palindromeRecursiveArg.split("=")[1], 10);
    return palindromeUsingRecursive(value);
  } else if (palindromeReverseArg) {
    value = parseInt(palindromeReverseArg.split("=")[1], 10);
    return palindromeUsingReverse(value);
  }

  if (oopFizzbuzzArg) {
    value = parseInt(oopFizzbuzzArg.split("=")[1], 10);
    return fizzBuzzUsingLoop(value);
  } else if (oopFibonacciLoopArg) {
    value = parseInt(oopFibonacciLoopArg.split("=")[1], 10);
    return fibbonaciUsingLoop(value);
  } else if (oopFibonacciRecursiveArg) {
    value = parseInt(oopFibonacciRecursiveArg.split("=")[1], 10);
    return fibbonaciUsingRecursive(value);
  } else if (oopFactorialLoopArg) {
    value = parseInt(oopFactorialLoopArg.split("=")[1], 10);
    return factorialUsingLoop(value);
  } else if (oopFactorialRecursiceArg) {
    value = parseInt(oopFactorialRecursiceArg.split("=")[1], 10);
    return factorialUsingrecursive(value);
  } else if (oopPalindromeLoopArg) {
    value = parseInt(oopPalindromeLoopArg.split("=")[1], 10);
    return palindromeUsingLoop(value);
  } else if (oopPalindromeRecursiveArg) {
    value = parseInt(oopPalindromeRecursiveArg.split("=")[1], 10);
    return palindromeUsingRecursive(value);
  } else if (oopPalindromeReverseArg) {
    value = parseInt(oopPalindromeReverseArg.split("=")[1], 10);
    return palindromeUsingReverse(value);
  }
}

export { processArgv };
