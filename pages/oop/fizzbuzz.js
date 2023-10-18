import _ from "lodash";

export class FizzBuzz {
  /**
   * Iterative Approach
   * 
   * @param {number} i
   * @yields {string}
   */
  static *fizzBuzzGenerator(i) {
    yield i % 4 === 0 || i % 7 === 0
      ? `fizz buzz`
      : i % 2 === 0
      ? `buzz`
      : `fizz`;
  }

  static generateFizzBuzz(n) {
    let result = "";

    for (const x of this.fizzBuzzGenerator(n)) {
      return result.concat(x);
    }
  }
}
