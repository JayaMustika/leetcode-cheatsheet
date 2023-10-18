import _ from "lodash";
//import { processArgv } from "./processArgv"

/**
 * Fibonacci Recursive Approach
 * @param {number} sequence
 */
function fibbonaciUsingRecursive(value) {
  const sequence = _.toNumber(value);

  return sequence < 1
    ? 0
    : sequence <= 2
    ? 1
    : fibbonaciUsingRecursive(sequence - 1) +
      fibbonaciUsingRecursive(sequence - 2);
}

/**
 * Fibonacci Loop Approach
 * 
 * @param {number} sequence
 */
function fibbonaciUsingLoop(value) {
  const sequence = _.toNumber(value);

  if (sequence < 1) {
    return 0;
  } else if (sequence <= 2) {
    return 1;
  }

  let previous = 0;

  let next = 1;

  let result = 1;

  for (let iteration = 2; iteration <= sequence; iteration++) {
    result = previous + next;
    previous = next;
    next = result;
  }

  return result;
}

export { fibbonaciUsingLoop, fibbonaciUsingRecursive };
