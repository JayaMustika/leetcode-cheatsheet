import _ from "lodash";
//import { processArgv } from "./processArgv"

/**
* FizzBuzz Loop Approach
* @param {number} sequence
*/
function fizzBuzzUsingLoop (value) {
    const sequence = _.toNumber (value);

    let array = [];
    
    for (let i = 1; i <= sequence; i++) {
        if (i % 4 === 0 || i % 7 === 0) {
          array.push (`fizz buzz ${i}`);
          continue;
        } else if (i % 2 === 1) {
          array.push (`fizz ${i}`)
        } else if (i % 2 === 0) {
          array.push (`buzz ${i}`)
        } 
    }

    return array;
}

export { fizzBuzzUsingLoop };