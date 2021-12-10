/**
 * This file is for any helper functions for generating
 * and validating challenge input and output.
 */

 /**
  * Returns a random integer between 0 and max
  * @param {Number} max 
  * @returns {Number} Random integer
  */
export function randomInt(max) {
    return Math.floor(Math.random() * (max + 1));
}
