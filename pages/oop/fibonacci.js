import _ from "lodash";

export class Fibonacci {
  /**
   * Recursive Approach
   * 
   * @param {number} [i]
   */
  static fibonacciUsingRecursive(value) {
    const i = _.toNumber(value);

    return i <= 0
      ? 0
      : i <= 2
      ? 1
      : this.fibonacciUsingRecursive(i - 1) +
        this.fibonacciUsingRecursive(i - 2);
  }

  /**
   * Fibonacci Loop Approach
   * 
   * @param {number} n
   */
  static fibbonaciUsingLoop(n) {
    const sequence = _.toNumber(n);

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
}
