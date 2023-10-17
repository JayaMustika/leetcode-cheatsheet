import _ from "lodash";
//import { processArgv } from "./processArgv"

/**
 * Factorial Iterative Approach
 * @param {number} n 
 */
function factorialUsingLoop (value) {
    const n = _.toNumber (value);
  
    let formula = n; 
  
    for (let i = 1; i < n; i += 1) {
      formula *= (n-i);
    }
    
    return formula;
  }
  
  /**
  * Factorial Recursive Approach
  * @param {number} n 
  */
  function factorialUsingrecursive (value) {
    const n = _.toNumber (value);

    return n <= 1 
      ? 1 
      : factorialUsingrecursive (n - 1) * n; 
  }

  export { factorialUsingLoop, factorialUsingrecursive };