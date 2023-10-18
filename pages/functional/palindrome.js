import _ from "lodash";
//import { processArgv } from "./processArgv"

/**
 * Reverse Method Approach
 * 
 * @param {string} value
 */
function palindromeUsingReverse(value) {
  let array = [];

  for (const spread of value) {
    array.push(spread);
  }

  let reverseArray = [];

  for (let i = 1; i <= array.length; i++) {
    reverseArray.push(array[array.length - i]);
  }

  return JSON.stringify(array) === JSON.stringify(reverseArray);
}

/**
 * Iterative Approach
 * 
 * @param {string} n
 */
function palindromeUsingLoop(value) {
  label: for (let index = 0; index < Math.ceil(value.length / 2); index++) {
    const firstChar = value[index];

    const lastChar = value[value.length - (index + 1)];

    if (lastChar !== firstChar) {
      return false;
    }

    console.log(`iteration ${value} ${index + 1}`);

    continue label;
  }

  return true;
}

/**
 * Recursive Approach
 * 
 * @param {string} value
 * @param {number} index
 */
function palindromeUsingRecursive(value, index = 0) {
  const firstChar = value[index];

  const lastChar = value[value.length - (index + 1)];

  if (firstChar !== lastChar) {
    return false;
  } else if (index < Math.ceil(value.length / 2)) {
    return palindromeUsingRecursive(value, index + 1);
  }

  console.log(`iteration ${value} ${index + 1}`);

  return true;
}

export {
  palindromeUsingLoop,
  palindromeUsingRecursive,
  palindromeUsingReverse,
};
