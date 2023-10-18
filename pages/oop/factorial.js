import _ from "lodash";

export class Factorial {
  /**
   * Iterative Approach
   * 
   * @param {number} n
   */
  static factorialUsingLoop(value) {
    let result = 1;

    for (let index = 2; index <= value; index++) {
      result *= index;

    }
    
    return result;
  }

  /**
   * Recursive approach.
   * @param {number} value
   */
  static factorialUsingRecursive(value) {
    return value <= 1 ? 1 : this.factorialUsingRecursive(value - 1) * value;
  }
}
