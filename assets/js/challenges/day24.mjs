/* jshint esversion:8, expr:true */
/*jshint multistr: true */

export const challenge = {
  title: "Christmas Eve - Feeding the Reindeer",
  description: "Santa’s reindeer require a lot of energy to pull his sleigh.\
    He needs your help to work out exactly how many sacks of carrots he needs to order to ensure that his reindeer don’t run out of energy when he’s halfway over the Atlantic.\
    Write a function that takes two parameters miles and reindeer and works out exactly how many sacks of carrots Santa needs.\
    Each sck of carrots is 400 calories, and each reindeer uses 100 calories per mile.\
    Remember santa buys his carrots wholesale, so he cannot buy fractions of a sack.\
    Fill in the body of the function to return the correct values",

  boilerPlate: "return reindeerFood(args[0],args[1]); ",

  initial: "function reindeerFood(miles,reindeer) {\n    return sacks;\n}",
  args: [
    [1000, 12],
    [1, 1],
    [2500, 9]
  ],


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
      output(`Running: ${test}`);
      if (func(test[0], test[1]) != this.test(test[0], test[1])) {
        output("Failed!\n");
        return false;
      } else {
        output("Succeeded!\n");
      }
    }
    return true;
  },

  test: function (miles, reindeer) {
    let sacks = Math.ceil((miles * 1000 * reindeer) / 400);
    return sacks;
  }
};