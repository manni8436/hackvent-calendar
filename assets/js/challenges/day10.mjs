// import { /* imports here */ } from './libs.mjs';

export const challenge = {
  title: "Day Ten - Elves' Report",
  description: "Elves has to count how many balls of each color they have to decorate their Christmas tree. \
                  They know that they have only red, blue, and yellow balls. Count how many balls they have got. \
                  And help them to send a message to Santa: 'We have ... red balls, ... blue balls, ... yellow balls.' \
    ",

  // Code to be append to the user submission.
  // Here it converts the first argument to an input variable,
  // (so the user can access the first parameter as input instead of arg[0]).
  boilerPlate: "return arrangeBalls(args[0]); ",

  // Code to be initial placed in the code panel
  initial: "function arrangeBalls(arr) {\n    return message;\n}",

  // The argument list to be sent to user code. Should be an array of arrays.
  // The outer array is the individual tests, the inner array is the argument
  // list to be sent to the user code for each test.

  args: [
    ['red', 'blue', 'yellow', 'blue', 'red', 'blue', 'red', 'blue', 'yellow', 'red',
      'yellow', 'blue', 'red', 'red', 'blue', 'yellow', 'yellow', 'red', 'red'
    ],
    ['red', 'blue', 'yellow', 'blue', 'red', 'blue', 'red', 'blue'],
    ['red', 'yellow', 'yellow', 'yellow', 'red', 'red', 'red', 'yellow'],
    ['red']
  ],

  setup: function () {},


  runTests: function (func, output = s => s) {
    output("Starting tests:\n");
    for (const test of this.args) {
      output("Running: arrangeBalls(arr): ");

      if (func(test) != this.test(test)) {
        output("Failed!\n");
        return false;
      }
      output("Succeeded!\n");
    }
    return true;
  },

  /**
   * Reference implementation. User code should provide the same result
   */
  test: function (arr) {
    let redBalls = [];
    let blueBalls = [];
    let yellowBalls = [];
    for (let i of arr) {
      if (i === 'red') {
        redBalls.push(i)
      } else if (i === 'blue') {
        blueBalls.push(i)
      } else if (i === 'yellow') {
        yellowBalls.push(i)
      }
    }
    let message = `We have ${redBalls.length} red balls, ${blueBalls.length} blue balls, ${yellowBalls.length} yellow balls.`
    return message
  }
}