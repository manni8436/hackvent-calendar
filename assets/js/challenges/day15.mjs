/* jshint esversion:8, expr:true */
/*jshint multistr: true */

export const challenge = {
  title: "Day Fifteen - Pizza Party",
  description: "Santa has been working his elves pretty hard over the Christmas crunch.\
    To say thank you he’s decided to throw a pizza party.\
    Assuming each elf will eat 3 slices of pizza and each pizza has 8 slices, work out how many pizzas santa has to order.\
    Remember he has to order whole pizzas.\
    Fill in the body of the function to return the correct values",


  boilerPlate: "return pizzaParty(args[0]); ",
  initial: "function pizzaParty(elves) {\n    return pizzas;\n}",


  args: [
    [4],
    [9],
    [8]

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
  runTests: function (func, output = s => s) {
    for (const test of this.args) {
      output(`Running: pizzaParty(${test}): `);
      if (func(test) != this.test(test)) return false;

      const t1 = Math.round(func(test[0], test[1]));
      const t2 = Math.round(this.test(test[0], test[1]));

      if (t1 != t2) {
        output("Failed!\n");
        return false;
      }
      output("Succeeded!\n");
    }
    return true;
  },

  test: function (elves) {
    let slices = elves * 3;
    let pizzas = Math.ceil(slices / 8);
    return pizzas;
  }
};