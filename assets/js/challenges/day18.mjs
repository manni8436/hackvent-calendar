// Any required library imports:
//import { /* imports here */ } from './libs.mjs';


export const challenge = {
  title: "Day 18 - Square Area Calculation",
  description: "Santa needs to find out the size of the area he needs to fly over to deliver gifts. \
                Luckily, the area is a perfect square! He knows that the length of 1 side of the square is 10,000 KM. \
                Complete the Javascript function to calculate the area of the square.",

  // Code to be append to the user submission.
  // Here it converts the first argument to an input variable,
  // (so the user can access the first parameter as input instead of arg[0]).
  boilerPlate: "return squareArea(args[0]);",

  // Code to be initial placed in the code panel
  initial: "function squareArea(side) {\n    return area;\n}",

  // The argument list to be sent to user code. Should be an array of arrays.
  // The outer array is the individual tests, the inner array is the argument
  // list to be sent to the user code for each test.
  args: [
    [10000],
    [8000],
    [999],
    [20546],
  ],

  /**
   * Performs any setup prior to running the tests. Can be used to generate
   * random inputs.
   */
  setup: function () {},

  /**
   * Iterates through the input list and runs the user code for each test.
   * Output is a callback function which accepts a string message as tests
   * are completed.
   * @param {function} func
   * @param {function} output
   * @returns {Boolean} false if any tests fail, otherwise true.
   */
  runTests: function (func, output) {
    output("Starting tests:\n");
    for (const test of this.args) {
      output("Running: squareArea(): ");
      if (func([...test]) != this.test([...test])) {
        output("Failed!\n");
        return false;
      } else {
        output("Succeeded!\n");
      }
    }
    return true;
  },

  /**
   * Reference implementation. User code should provide the same result
   */
  test: function (side) {
    let area = side * side;
    return area;
  }
}