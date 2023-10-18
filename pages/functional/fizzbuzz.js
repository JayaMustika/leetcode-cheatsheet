import _ from "lodash";
//import { processArgv } from "./processArgv"

/**
 * FizzBuzz Loop Approach
 * 
 * @param {number} sequence
 */
function fizzBuzzUsingLoop(value) {
  const i = _.toNumber(value);

  let array = "";

  if ( i % 4 === 0 || i % 7 === 0) {
    return array.concat(`fizz buzz`);
  } else if (i % 2 === 1) {
    return array.concat(`fizz`);
  } return array.concat(`buzz`);
  
}
console.log (fizzBuzzUsingLoop (5));
export { fizzBuzzUsingLoop };
