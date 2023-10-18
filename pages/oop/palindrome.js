import _ from "lodash";

export class Palindrome {
  /**
   * Reverse Approach
   * 
   * @param {string} value
   */
  static palindromeUsingReverse(value) {
    const cleanedInput = value.replace(/\s/g, "").toLowerCase();

    const reversedInput = cleanedInput.split("").reverse().join("");

    return cleanedInput === reversedInput;
  }

  /**
   * Iterative Approach
   * 
   * @param {string} value
   */
  static palindromeUsingLoop(value) {
    console.log(value.length);

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
  static palindromeUsingRecursive(value, index = 0) {
    const firstChar = value[index];

    const lastChar = value[value.length - (index + 1)];

    if (firstChar !== lastChar) {
      return false;
    } else if (index < Math.ceil(value.length / 2)) {
      return this.palindromeUsingRecursive(value, index + 1);
    }
    console.log(`iteration ${value} ${index + 1}`);
    return true;
  }
}
